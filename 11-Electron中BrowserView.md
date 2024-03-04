## Electron中BrowserView
BrowserView 被用来让 BrowserWindow 嵌入更多的 web 内容。 它就像一个子窗口，除了它的位置是相对于父窗口。 这意味着可以替代webview标签.

### 示例
```js
const { app, BrowserView, BrowserWindow } = require('electron')

app.whenReady().then(() => {
  const win = new BrowserWindow({ width: 800, height: 600 })

  const view = new BrowserView()
  win.setBrowserView(view)
  view.setBounds({ x: 0, y: 0, width: 300, height: 300 })
  view.webContents.loadURL('https://electronjs.org')
})
```

### 效果图
![微信图片_20240304112126](C:\Users\admin\Pictures\微信图片_20240304112126.png)

### 构造方法
```js
view = new BrowserView()
```

### 实例属性
view.webContents(webContents)

### 实例方法
**view.setAutoResize(options)**  调整视图的大小，并将它移动到窗口边界
* 选项 对象
    * width boolean（可选） - 如果为true，视图宽度跟随窗口变化。 默认值为 false
    * height boolean(可选) - 如果 true，视图的高度将增长和缩小 与窗口。 默认值为 false
    * horizontal boolean (可选) - 如果为 true，视图的x轴和宽度将随着窗口的大小变化等比例缩放。 默认值为 false
    * vertical boolean(可选) - 如果 true，视图的y位置和高度将增长 和收缩比例与窗口。 默认值为 false

**view.setBounds(bounds)**
* bounds Rectangle
    Rectangle {
        x number
        y number
        width number
        height number
    }

**view.setBounds()**
返回 Rectangle

**view.setBackgroundColor(color)** 设置背景颜色

