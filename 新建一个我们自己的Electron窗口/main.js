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