## Electron中globalShortcut
globalShortcut 模块可以在操作系统中注册/注销全局快捷键, 以便可以为操作定制各种快捷键。

### 方法
```js
globalShortcut.register(accelerator, callback)
```
* accelerator Accelerator

* callback Function

  返回boolean - 快捷键注册是否成功

  注册 accelerator 的全局快捷键。 当用户按下注册快捷键时， callback 会被调用。

```js
globalShortcut.registerAll(accelerators , callback)
```
* accelerators Accelerator[] - an array of Accelerators.
* callback Function
  注册多个全局快捷键。 当用户按下注册快捷键时， callback 会被调用。

```js
globalShortcut.isRegistered(accelerator)
```
* accelerator Accelerator
Returns boolean - 表示 accelerator 全局快捷键是否注册成功

```js
globalShortcut.unregister(accelerator)
```
accelerator Accelerator
注销 accelerator 的全局快捷键。

```js
globalShortcut.unregisterAll()
```
注销所有的全局快捷键（清空该应用程序的所有全局快捷键）。

### 示例
* 注册 Shift+A 快捷键
* 注册 Shift+B 和 Shift+B 快捷键
* 注销 Shift+A 快捷键
* 程序关闭时 注销所有快捷键

### 代码
```js
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
```
