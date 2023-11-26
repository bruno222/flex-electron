require('dotenv').config();
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
      width: 800,
      height: 600
    })

    // in case we want to open Console at startup
    // win.webContents.openDevTools();
  
    win.loadURL('https://flex.twilio.com')
    
    // in case we want to load a file instead
    // win.loadFile('index.html')
  }

  app.whenReady().then(() => {
    createWindow()
  })