## 第一个Electron程序 
1. 配置package.json
    * "main": "main.js",      主函数入口为main.js
    * "start": "electron .",  用electron启动
    ```json
    {
      "name": "electron_study",
      "version": "1.0.0",
      "description": "记录学习electron",
      "main": "main.js",            
      "scripts": {
        "start": "electron .",      
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "fangc",
      "license": "ISC",
      "devDependencies": {
        "electron": "^29.1.0"
      }
    }
    ```

2. 新增index.html 
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta
      http-equiv="Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <meta
      http-equiv="X-Content-Security-Policy"
      content="default-src 'self'; script-src 'self'"
    />
    <title>Hello from Electron renderer!</title>
  </head>
  <body>
    <h1>Hello from Electron renderer!</h1>
    <p>👋</p>
  </body>
</html>
```
3. 修改main.js
```javascript
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
// 监听app 创建，调用createWindow（）
app.whenReady().then(()=>{
    createWindow()
})

// 旧写法
// app.on('ready',createWindow);

// 监听 window-all-closed 事件， app退出
app.on('window-all-closed',()=>{
    app.quit();
})
```