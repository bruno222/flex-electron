const { app, BrowserWindow } = require("electron");
const { removeHeaders } = require("./utils");

const createWindow = () => {
  win = new BrowserWindow({ show: false });
  win.maximize();
  win.show();
  win.loadURL("https://flex.twilio.com/agent-desktop");
  removeHeaders(win);
  // win.webContents.openDevTools();
};

app.whenReady().then(() => {
  createWindow();
});