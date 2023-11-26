require('dotenv').config();
const { app, BrowserWindow } = require('electron')

const createWindow = () => {

    win = new BrowserWindow({show: false});
    win.maximize();
    win.show();

    // in case we want to open Console at startup
    // win.webContents.openDevTools();
  
    win.loadURL('https://flex.twilio.com/agent-desktop')
    
    // in case we want to load a file instead
    // win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })