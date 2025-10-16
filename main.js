const { app, BrowserWindow, ipcMain } = require("electron");

let win;

const createWindow = () => {
  win = new BrowserWindow({
    width: 600,
    height: 700,
    maxHeight:700,
    minHeight:700,
    maxWidth:600,
    minWidth:600,
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
