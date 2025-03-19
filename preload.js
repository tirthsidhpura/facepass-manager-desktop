const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('electron', {
    login: (credentials) => ipcRenderer.send('login', credentials),
    register: (userData) => ipcRenderer.send('register', userData),
    onLoginError: (callback) => ipcRenderer.on('login-error', (_, message) => callback(message)),
    onRegisterError: (callback) => ipcRenderer.on('register-error', (_, message) => callback(message))
});