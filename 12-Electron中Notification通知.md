## Electron中的Notification
Notification  用来创建OS(操作系统)桌面通知

### 静态方法
```js
Notification.isSupported()
```
返回 boolean - 当前系统是否支持桌面通知
```js
const notification = new Notification([options])
```

### 实例方法
```js
notification.show()
```
显示通知

```js
notification.close()
```
忽略这条通知

### 实例属性
notification.title              string 属性，用于确定通知的标题。
notification.subtitle           string 属性，用于确定通知的子标题。
notification.body               string 属性，用于确定通知的内容。
notification.replyPlaceholder   string 属性，用于确定通知的回复提示信息。
notification.sound              string 属性，用于确定通知的声音。
notification.closeButtonText    string 属性，用于确定通知关闭按钮文本。
notification.silent             boolean 属性代表通知是否静音。
notification.hasReply           boolean 属性表示通知是否有回复操作。
notification.urgency Linux      string 属性，用于确定通知的紧急级别 可以是 'normal', 'critical', 或者 'low'
notification.timeoutType        string 属性代表通知的超时持续时间。 可以是 'default' 或 'never'.
notification.actions            属性代表通知的动作
notification.toastXml Windows   string 通过windows的 toastXML 自定义通知

### 实例
* 菜单栏，通知下有两个子菜单 
    * 1.显示通知
    * 2.关闭通知

### 代码
```js
const { app, BrowserWindow, Menu, Notification,dialog} = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')

}

app.whenReady().then(() => {
  createWindow()
  const notification = new Notification();
  const template = [
    {
      label: '通知',
      role: 'common',
      submenu: [
        {
          label: '1.显示通知',
          click() {
            if(Notification.isSupported()){
              // 支持Notification
              
              notification.title = "自定义通知--title";
              notification.body = "自定义通知--body";
              notification.show();
            }else{
              dialog.showErrorBox("报错！","不支持Notification")
            }
          }
        },
        {
          label: '2.关闭通知',
          click() {
            if(notification){
              notification.close();
            }
          }
        }
      ]

    }
  ]
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)


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
### 效果
![微信图片_20240304143804](C:\Users\admin\Pictures\微信图片_20240304143804.png)