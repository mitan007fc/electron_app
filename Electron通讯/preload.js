const { contextBridge, ipcRenderer } = require("electron")
contextBridge.exposeInMainWorld("electronIpc", {
    // 预加载脚本暴露 ipcRenderer.send
    send: (text) => { ipcRenderer.send('messageToMain', text) },
    // 预加载脚本暴露 ipcRenderer.on
    onGet: (callback) => {
        ipcRenderer.on("messageFromMain", (event, text) => {
            callback(text)
        })
    },
    // 预加载脚本暴露 ipcRenderer.invoke
    getData: () => { return ipcRenderer.invoke("getData") }
})

