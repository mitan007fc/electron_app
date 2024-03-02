## Electron窗口

### 第一个自定义窗口
要求
* 加载一个自己定义的窗口
* 界面上定义一个最大化按钮和还原按钮，用来控制窗口最大化和还原

步骤
#### 1. 编写html，编写页面

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Hello World!</title>
    <meta http-equiv="Content-Security-Policy" content="script-src 'self' 'unsafe-inline';" />
</head>

<body>
    <h1>我们自己的Electron窗口!</h1>
    <!-- 1. html中编写 
            1.1 添加当前窗口大小状态
            1.2 添加最大化窗口按钮和还原按钮
    -->
    <p>当前窗口大小: <strong id="state">最初状态</strong></p>
    <button id="btnMax">最大化窗口</button>
    <button id="btnReduct">还原</button>
    <!-- 加载js -->
    <script src="index.js"></script>
</body>
</html>
```

#### 2. 编写index.js

点击最大化按钮时调用自定义方法 window.btn.btnIsMax()
点击还原按钮时调用自定义方法 window.btn.btnReduct()

```js
// 2. js文件中写
// 2.1 获取最大化按钮和还原按钮
// 2.2 点击时分别调用 window.btn.btnMax()方法 和window.btn.btnReduct()方法
var btnMax = document.getElementById("btnMax");

btnMax.addEventListener('click',async ()=>{
    const btnIsMax = await window.btn.btnIsMax();
    console.log(btnIsMax);
    document.getElementById("state").innerHTML = btnIsMax?"最大化":"正常";
})

var btnReduct = document.getElementById("btnReduct");
btnReduct.addEventListener('click',async ()=>{
    await window.btn.btnReduct();
    document.getElementById("state").innerHTML = "最初状态";
})
```

#### 3. 创建preload.js  

通过contextBridge 在窗口挂载window.btn.btnMax()方法 和window.btn.btnReduct()方法
通过ipcipcRenderer 调用主线程方法

```js
const {contextBridge,ipcRenderer } = require('electron/renderer')
contextBridge.exposeInMainWorld('btn',{
    btnIsMax : ()=>ipcRenderer.invoke('winSize:btnIsMax'),
    btnReduct : ()=>ipcRenderer.invoke('winSize:btnReduct')
})   
```

#### 4. 修改main.js 

用ipcMain监听渲染进程中window.btn.btnMax()方法 和window.btn.btnReduct()方法

```js
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadFile('index.html')

  // 监听winSize:btnIsMax
  ipcMain.handle('winSize:btnIsMax', () => {
    this.flag = win.isMaximized()
    if (this.flag ) {
      win.unmaximize()
    } else {
      win.maximize()
    }
    return  !this.flag
  })

  // 监听winSize:btnReduct
  ipcMain.handle('winSize:btnReduct', () => {
    if (win.isMaximized()) {
      win.unmaximize()
    }
  })
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
```

#### 5.界面效果

![应用界面](D:\Desktop\study\electron_study\新建一个我们自己的Electron窗口\应用界面.png)