const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
  });

  win.loadFile(path.join(__dirname, 'help', 'index.html')); // Adjust as needed
}

app.whenReady().then(createWindow);
