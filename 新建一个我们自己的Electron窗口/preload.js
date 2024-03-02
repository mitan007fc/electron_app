const {contextBridge,ipcRenderer } = require('electron/renderer')
contextBridge.exposeInMainWorld('btn',{
    btnIsMax : ()=>ipcRenderer.invoke('winSize:btnIsMax'),
    btnReduct : ()=>ipcRenderer.invoke('winSize:btnReduct')
})   