import { contextBridge, ipcRenderer } from 'electron'

// 将前端需要的api暴露
contextBridge.exposeInMainWorld('electron', {
  ipcRenderer
})