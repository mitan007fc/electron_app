const { app, BrowserWindow, ipcMain, Menu, dialog } = require('electron')
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

  const template = [
    {
      label: '帮助',
      role: 'help',
      menuItem: [
        {
          label: '帮助',
          role: 'help'
        }],
      submenu: [
        {
          label: '关于electronapp',
          click() {
            dialog.showMessageBox({
              message: '这是一个Electron应用！',
              type: 'info',
              title: 'electron应用'
            });
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