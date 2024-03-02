## Electron生命周期
说是生命周期，其实就是主进程APP的事件
整理常用的事件：（更新于2024/3/1）
### 1.事件: 'ready' 

当 Electron 完成初始化时，发出一次。 在 macOS 上，如果通过通知中心启动应用程序，launchInfo 保存 NSUserNotification 的 userInfo 或 UNNotificationResponse 的信息。 你也可以通过调用 app.isReady() 来检查该事件是否已被触发，以及通过 app.whenReady() 得到一个当Electron已初始化后fulfill 的 Promise。

### 2.事件: 'window-all-closed'

当所有的窗口都被关闭时触发。
如果你没有监听此事件并且所有窗口都关闭了，默认的行为是控制退出程序；但如果你监听了此事件，你可以控制是否退出程序。 如果用户按下了 Cmd + Q，或者开发者调用了 app.quit()，Electron 会首先关闭所有的窗口然后触发 will-quit 事件，在这种情况下 window-all-closed 事件不会被触发。

### 3.事件：'before-quit'

在程序关闭窗口前发信号。 调用 event.preventDefault() 将阻止终止应用程序的默认行为。
注意： 如果由 autoUpdater.quitAndInstal() 退出应用程序 ，那么在所有窗口触发 close 之后 才会触发 before-quit 并关闭所有窗口。
注:在 Windows 系统中，如果应用程序因系统关机/重启或用户注销而关闭，那么这个事件不会被触发。

### 4.事件: 'will-quit'

当所有窗口被关闭后触发，同时应用程序将退出。 调用 event.preventDefault() 将阻止终止应用程序的默认行为。
关于 window-all-closed 和 will-quit 事件之间的差异, 请参见 window-all-closed 事件的说明。
注:在 Windows 系统中，如果应用程序因系统关机/重启或用户注销而关闭，那么这个事件不会被触发。

### 5.事件: 'quit'

在应用程序退出时发出。
注:在 Windows 系统中，如果应用程序因系统关机/重启或用户注销而关闭，那么这个事件不会被触发。

### 6.事件: 'browser-window-blur'

当一个 browserWindow 失去焦点时触发。

### 7.事件: 'browser-window-focus'

当一个 browserWindow 获得焦点时触发。

### 8.事件: 'browser-window-created'

当一个新的 browserWindow 被创建时触发。

### 9.事件: 'web-contents-created'

当一个新的 webContents 被创建时触发。

