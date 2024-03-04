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