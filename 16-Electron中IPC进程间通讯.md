## Electron中IPC
进程间通信 (IPC) 是在 Electron 中构建功能丰富的桌面应用程序的关键部分之一。
在 Electron 中，进程使用 ipcMain 和 ipcRenderer 模块，通过开发人员定义的“通道”传递消息来进行通信。
本文介绍以下几个方面：
* 1-渲染进程到主进程（单项） 
```js
ipcRender.send()
```
* 2-主进程到渲染进程（单项） 
```js
WebContents.send()
```
* 3-渲染进程到到主进程（双向）
```js
ipcRender.invoke(渲染进程)
ipcMain.handle（主进程）
```


### 1.渲染进程到主进程 
* 渲染进程通过ipcRender.send()API发送消息
* 主进程通过ipcMain.on()API接受信息

### 2.主进程到渲染进程
* 主进程通过WebContents.send()发送数据
* 渲染进程通过ipcRender.on()获取数据

### 3.渲染进程到主进程（双向）
* 渲染进程通过invoke调用API
* 主进程通过handle处理API

### 示例
功能：
* 渲染进程发送111到主进程
* 主进程发送222到渲染进程
* 渲染进程invoke主进程
```js
// main.js
const { app, BrowserWindow,ipcMain } = require("electron")
const path = require("path")
var id = "";
const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show: false,
        webPreferences:{
            preload:path.join(__dirname,"./preload.js")
        }
    })
    win.loadFile("./index.html")
    win.show()
    id = win.id
}

app.whenReady().then(() => {
    createWindow()
})

ipcMain.on("messageToMain",(event,text)=>{
    // ipcMain.on 来接收渲染进程发送的数据
    console.log("主进程从渲染进程接收到的数据："+text);
    // 获取当前窗口
    // BrowserWindow.webContents.send 发送数据
   BrowserWindow.fromId(id).webContents.send("messageFromMain","222")
})

// ipcMain.handle 返回invoke调用
ipcMain.handle("getData",()=>{
    return "333"
})


app.on("window-all-closed", () => {
    app.quit()
})
```

```js
// preload.js
const { contextBridge, ipcRenderer } = require("electron")
contextBridge.exposeInMainWorld("electronIpc", {
    // 预加载脚本暴露 ipcRenderer.send
    send: (text) => { ipcRenderer.send('messageToMain', text) },
    // 预加载脚本暴露 ipcRenderer.on
    onGet: (callback) => {
        ipcRenderer.on("messageFromMain", (event, text) => {
            callback(text)
        })
    },
    // 预加载脚本暴露 ipcRenderer.invoke
    getData: () => { return ipcRenderer.invoke("getData") }
})
```

```html
<!-- index.html -->
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Electron的ipc通讯</title>
</head>
<body>
    <h2>渲染进程到主进程（单向）</h2>
    <div>
        <button id="btnToMain">渲染进程发送到主进程</button>
    </div>
    <div>
        <input type="text" id="sendText">
    </div>
    <br>
    <br>
    <div>收到主进程发送到渲染进程的消息：</div>
    <div>
        <input type="text" id="messageFromMain" style="width: 300px;">
    </div>
    <br>
    <div>
        <button id="btnInvoke">渲染进程invoke主进程</button>
    </div>
    <div>
        <input type="text" id="messageInvokeMain" style="width: 300px;">
    </div>
     <script src="./index.js"></script>
</body>
</html>
```

```js
// index.js
window.onload = () => {
    var btnToMain = document.getElementById("btnToMain");
    btnToMain.addEventListener("click", () => {
        var sendText = document.getElementById("sendText").value;
        window.electronIpc.send(sendText)
    })

    window.electronIpc.onGet((text) => {
        var messageFromMain = document.getElementById("messageFromMain");
        messageFromMain.value = text;
    })

    var btnInvoke = document.getElementById("btnInvoke");
    btnInvoke.addEventListener("click",async ()=>{
        var getData = await window.electronIpc.getData();
        var messageInvokeMain = document.getElementById("messageInvokeMain");
        messageInvokeMain.value = getData;
    })
}
```

### 效果

![微信图片_20240305154842](C:\Users\admin\Pictures\微信图片_20240305154842.png)