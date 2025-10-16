const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 600,
    height: 700,
    webPreferences: {
      nodeIntegration: true,   // autorise require() côté renderer
      contextIsolation: false  // pas de preload nécessaire
    }
  });

  win.loadFile("index.html");

  // Écoute le signal pour fermer la fenêtre
  ipcMain.on("close-app", () => {
    if (win) win.close();
  });
};

app.whenReady().then(createWindow);
