## Electron的dialog模块

dialog 模块具有以下方法:

### dialog.showOpenDialogSync([browserWindow, ]options)   

同步打开文件对话框

    * browserWindow BrowserWindow (可选)
    * options
        * title string (可选) - 对话框窗口的标题
        * defaultPath string (可选) - 对话框的默认展示路径
        * buttonLabel string (可选) - 「确认」按钮的自定义标签, 当为空时, 将使用默认标签。
        * filters FileFilter[]  - 显示过滤器
        * properties string[] (可选) - 包含对话框相关属性。 支持以下属性值:
            * openFile - 允许选择文件
            * openDirectory - 允许选择文件夹
            * multiSelections-允许多选。
            * showHiddenFiles-显示对话框中的隐藏文件。
            * createDirectory macOS -允许你通过对话框的形式创建新的目录。
            * promptToCreate Windows-如果输入的文件路径在对话框中不存在, 则提示创建。 这并不是真的在路径上创建一个文件，而是允许返回一些不存在的地址交由应用程序去创建。
            * noResolveAliases macOS-禁用自动的别名路径(符号链接) 解析。 所选别名现在将会返回别名路径而非其目标路径。
            * treatPackageAsDirectory macOS -将包 (如 .app 文件夹) 视为目录而不是文件。
            * dontAddToRecent Windows - 不要将正在打开的项目添加到最近的文档列表中。
        * message string (可选) macOS -显示在输入框上方的消息。
        * securityScopedBookmarks boolean (可选) macOS MAS - 在打包提交到Mac App Store时创建 security scoped bookmarks
          返回 string[] | undefined, 用户选择的文件路径，如果对话框被取消了 ，则返回undefined。


​        

### dialog.showOpenDialog([browserWindow, ]options) 

打开文件

    入参：同上，不再赘述
    返回 Promise<Object> - resolve包含以下内容的object：
    * canceled boolean - 对话框是否被取消。
    * filePaths string[] - 用户选择的文件路径的数组. 如果对话框被取消，这将是一个空的数组。
    * bookmarks string[] (optional) macOS MAS - 一个数组， filePaths 数组，base64编码字符串包含安全范围书签数据。 securityScopedBookmarks 必须启用才能捕获数据。


​    

### dialog.showSaveDialogSync([browserWindow, ]options) 

显示保存对话框  同上，不再赘述

### dialog.showSaveDialog([browserWindow, ]options) 

同上，不再赘述



### dialog.showMessageBoxSync([browserWindow, ]options)

显示信息框

    * browserWindow BrowserWindow (可选)
    * options 对象
        * message string - message box 的内容.
        * type string (可选) - 可以为 none, info, error, question 或者 warning. 在 Windows 上, question 与info显示相同的图标, 除非你使用了 icon 选项设置图标。 在 macOS 上, warning 和 error 显示相同的警告图标
        * buttons string[] (可选) - 按钮文本数组。 在 Windows上，一个空数组将导致按钮被标为“OK”。
        * defaultId Integer (可选) - 在 message box 对话框打开的时候，设置默认选中的按钮，值为在 buttons 数组中的索引
        * title string (可选) - message box 的标题，一些平台不显示.
        * detail string (可选) - 额外信息.
        * icon (NativeImage | string) (可选)
        * textWidth Integer (可选) macOS - 自定义消息框中文本的宽度
        * cancelId Integer (可选) - 用于取消对话框的按钮的索引，例如 Esc 键. 默认情况下，它被分配给第一个按钮，文字为 “cancel” 或 “no”。 如果不存在这个标签的按钮，同时该选项又未设置，返回值为0。
        * noLink boolean (可选) - 在Windows上，应用将尝试找出哪个 buttons 是常用按钮(例如 "Cancel" 或 "Yes")，然后在对话框中以链接命令的方式展现其它的按钮。 这可以使对话框以现代Windows应用程序的风格显示。 如果你不喜欢这个行为, 你可以设置 noLink 为 true.
        * normalizeAccessKeys boolean (可选) -规范跨平台的键盘访问键。 默认值为 false. 用 & 连接和转换键盘访问键, 以便它们在每个平台上正常工作.& 字符会在macOS上被删除，在 Linux 上会被转换为 _，在 Windows 上保持不变。 例如 Vie&w 的按钮标签在 Linux 上会被转换为 Vie_w，在 macOS 转换为 View 并且可以被选择。而Windows和Linux上表示 Alt-W 。
          返回 Integer - 点击的按钮的索引。


​        

### dialog.showMessageBox([browserWindow, ]options) 

同上，不再赘述

    返回 Promise<Object> - resolve包含以下属性的promise：
        * response number - 点击的按钮的索引。
    
    * checkboxChecked boolean - 如果设置了 checkboxLabel，返回复选框是否被选中的状态。 否则，返回 false。


​    

### dialog.showErrorBox(title, content)

显示错误框

    * title string - 显示在错误框中的标题.
    * content string - 显示在错误框中的文本内容.


​    

### dialog.showCertificateTrustDialog([browserWindow, ]options)

显示证书确认框

    * browserWindow BrowserWindow (可选)
    * options 对象
        * certificate Certificate - 信任/导入的证书
        * message string - 要向用户显示的消息


### 案例
* 自定义菜单，对话框
  * 1.打开文件对话框 
  * 2.保存文件对话框 
  * 3.信息对话框 
  * 4.错误对话框
* 实现每个子菜单功能

```js
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
```

