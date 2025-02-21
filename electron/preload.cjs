const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  saveData: (collection, data) => ipcRenderer.invoke(collection, data),
  readData: (collection) => ipcRenderer.invoke(collection),
  removeData: (collection, id) => ipcRenderer.invoke(collection, id),
});
