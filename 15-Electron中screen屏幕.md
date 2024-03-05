## Electron中screen
检索有关屏幕大小、显示器、光标位置等的信息。
可以实现以下两个功能
* 窗口全屏
* 显示在额外显示器上

## 方法
```js
screen.getCursorScreenPoint()
```
返回 Point
当前鼠标的绝对位置。

```js
screen.getPrimaryDisplay()
```
返回主窗口Display

```js
screen.getAllDisplays()
```
返回一个窗口数组Display[]，表示当前可用的窗口。

```js
screen.getDisplayNearestPoint(point)
```
返回离指定点最近的一个窗口Display

```js
screen.getDisplayMatching(rect)
```
返回离指定的图形最密切相交一个窗口Display

### 示例
* 创建填充整个屏幕的窗口
```js
const { app, BrowserWindow, screen } = require('electron/main')

let mainWindow = null

app.whenReady().then(() => {
  // Create a window that fills the screen's available work area.
  const primaryDisplay = screen.getPrimaryDisplay()
  const { width, height } = primaryDisplay.workAreaSize

  mainWindow = new BrowserWindow({ width, height })
  mainWindow.loadURL('https://electronjs.org')
})
```

* 在外部显示器中创建窗口
```js
const { app, BrowserWindow, screen } = require('electron')

let win

app.whenReady().then(() => {
  const displays = screen.getAllDisplays()
  const externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })

  if (externalDisplay) {
    win = new BrowserWindow({
      x: externalDisplay.bounds.x + 50,
      y: externalDisplay.bounds.y + 50
    })
    win.loadURL('https://github.com')
  }
})
```