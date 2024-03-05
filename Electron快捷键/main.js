const { app, BrowserWindow,BrowserView , Menu, dialog ,globalShortcut} = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  win.loadFile("index.html")
}

app.whenReady().then(() => {
  createWindow()

  

  const template = [
    {
      label: '快捷键',
      role: 'common',
      submenu: [
        {
          label: 'Shift + A',
          click() {
            globalShortcut.register("Shift+A",()=>{
              dialog.showMessageBox({
                message: 'Shift + A 快捷键',
                type: 'info',
                title: '注册了Shift + A 快捷键'
              });
            })
            
          }
        },
        {
          label: 'Shift + B 和 Shift + C 快捷键',
          click() {
            globalShortcut.registerAll(["Shift+B","Shift+C"],()=>{
              dialog.showMessageBox({
                message: 'Shift + B 和 Shift + C 快捷键',
                type: 'info',
                title: '注册了Shift + B 和 Shift + C 快捷键'
              });
            })
          }
        },
        {
          label: '3.注销 Shift + A 快捷键',
          click() {
            globalShortcut.unregister("Shift+A");
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
  globalShortcut.unregisterAll();
  if (process.platform !== 'darwin') {
    app.quit()
  }
})