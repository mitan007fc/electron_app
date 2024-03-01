// 导入两个Electron模块
// 1. app 管理应用程序的事件生命周期
// 2. BrowserWindow负责创建和管理窗口
const {app, BrowserWindow } = require('electron')

// createWindow() 函数将您的页面加载到新的 BrowserWindow 实例中：
const createWindow = ()=>{
    const win = new BrowserWindow(
        {
            width : 800,
            height:600
        }
    )
    win.loadFile("./index.html")
}

//electron new 写法 不用on来监听事件 
app.whenReady().then(()=>{
    createWindow()
})

// 旧写法
// app.on('ready',createWindow);

app.on('window-all-closed',()=>{
    app.quit();
})