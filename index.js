const { app, BrowserWindow, Menu, ipcMain, session } = require('electron');
const path = require('path');
const axios = require('axios');

let mainWindow;


// mainWindow.webContents.openDevTools()

app.whenReady().then(() => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });

    mainWindow.loadFile(path.join(__dirname, 'views/login.html'));

    mainWindow.openDevTools();
    const menu = Menu.buildFromTemplate([
        {
            label: 'Menu',
            submenu: [
                { label: 'Login', click: () => mainWindow.loadFile('views/login.html') },
                { label: 'Register', click: () => mainWindow.loadFile('views/register.html') },
                { label: 'Logout', click: () => mainWindow.loadFile('views/logout.html') },
                { label: 'Exit', role: 'quit' }
            ]
        }
    ]);
    // mainWindow.setFullScreen(true);
    // mainWindow.maximize();
    Menu.setApplicationMenu(menu);
});

