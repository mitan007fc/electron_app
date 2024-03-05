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