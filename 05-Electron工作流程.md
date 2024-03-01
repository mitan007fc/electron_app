## Electron工作流程
1. 启动main.js，为主进程
2. 在main中可以创建窗口，创建的窗口存在在渲染进程
3. 渲染进程与进程之间通过CPI进行通讯 
4. 只有主线程可以调用native API对GUI进行操作
5. 渲染进程可以通过Chromiu加载各种页面