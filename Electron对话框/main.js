const { app, BrowserWindow,BrowserView, ipcMain, Menu, dialog } = require('electron')
const path = require('node:path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })
  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  view.webContents.loadURL('https://electronjs.org')

}

app.whenReady().then(() => {
  createWindow()

  

  const template = [
    {
      label: '对话框',
      role: 'help',
      submenu: [
        {
          label: '1.打开文件对话框',
          click() {
            dialog.showOpenDialog({
              title: '打开文件对话框',  //标题
              defaultPath :__dirname,  //默认打开地址
              filters: [  //过滤器
                { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
                { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
                { name: 'Custom File Type', extensions: ['as'] },
                { name: 'All Files', extensions: ['*'] }
              ],
              properties :["openFile","multiSelections","showHiddenFiles"]  //参数
            });
          }
        },
        {
          label: '2.保存文件对话框',
          click() {
            dialog.showSaveDialog({
              title: '保存文件对话框',  //标题
              defaultPath :__dirname,  //默认打开地址
              filters: [  //过滤器
                { name: 'Images', extensions: ['jpg', 'png', 'gif'] },
                { name: 'Movies', extensions: ['mkv', 'avi', 'mp4'] },
                { name: 'Custom File Type', extensions: ['as'] },
                { name: 'All Files', extensions: ['*'] }
              ]
            });
          }
        },
        {
          label: '3.信息对话框',
          click() {
            dialog.showMessageBox({
              message: '这是一个信息对话框！',
              type: 'info',
              title: '信息对话框'
            });
          }
        },
        {
          label: '4.错误对话框',
          click() {
            dialog.showErrorBox(
              '错误对话框',
              '这是一个错误对话框！'  
            );
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