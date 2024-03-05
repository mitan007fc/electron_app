# electron_app
记录学习electron

**2024/3/1**

**新增** *<u>01初探Electron.md</u>*

* 什么是Electron
* 为什么要学习Electron
* 如何学习Electron

**新增** *<u>02安装Electron.md</u>*
* 介绍如何安装Electron

**新增** *<u>03安装Electron.md</u>*
* 介绍第一个Electron程序

**新增** *<u>04Electron架构.md</u>*
* Chromium：支持最新特性的浏览器
* Node.js :javascript运行时，可实现文件读写等
* Native API：提供统一的原生界面能力

**新增** *<u>05Electron工作流程.md</u>*
1. 启动main.js，为主进程
2. 在main中可以创建窗口，创建的窗口存在在渲染进程
3. 渲染进程与进程之间通过CPI进行通讯 
4. 只有主线程可以调用native API对GUI进行操作
5. 渲染进程可以通过Chromiu加载各种页面

**新增** *<u>06Electron的生命周期.md</u>*

**2024/3/3**
**新增** *<u>07Electron的窗口.md</u>*
**新增** *<u>08制作Electron窗口.md</u>*

**2024/3/4**
**新增** *<u>09Electron的窗口.md</u>*
**新增** *<u>10Electron中dialog.md</u>*
**新增** *<u>11Electron中BrowserView.md</u>*
**新增** *<u>12Electron中Notification.md</u>*
**新增** *<u>13Electron中globalShortcut.md</u>*