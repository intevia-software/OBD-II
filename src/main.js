const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('node:path');
const fs = require('fs');

// Chemin vers le script Python
const pythonScript = path.join(__dirname, '..', '..', 'python', 'index.py');

// Vérifie que le script Python existe
if (!fs.existsSync(pythonScript)) {
  console.error(`Le script Python n'existe pas : ${pythonScript}`);
  process.exit(1);
}

// Lance le serveur Python
let pyProcess;
try {
  pyProcess = spawn('python3', [pythonScript]);

  pyProcess.stdout.on('data', (data) => {
    console.log(`[Python stdout] ${data.toString()}`);
  });

  pyProcess.stderr.on('data', (data) => {
    console.error(`[Python stderr] ${data.toString()}`);
  });

  pyProcess.on('close', (code) => {
    console.log(`[Python] Process exited with code ${code}`);
  });
} catch (err) {
  console.error('Impossible de lancer Python :', err);
}

// Fermer Python si Electron quitte
app.on('will-quit', () => {
  if (pyProcess) {
    pyProcess.kill();
  }
});

// Pour Windows : quitter si installé via Squirrel
if (require('electron-squirrel-startup')) {
  app.quit();
}

// Crée la fenêtre Electron
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1920,
    height: 1100,
    webPreferences: {

      contextIsolation: true,
      nodeIntegration: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  // Inject a CSP to allow blob images, data URIs, dev backend fetch, and unsafe-eval for React dev
  mainWindow.webContents.session.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': [
          "default-src 'self' 'unsafe-inline' data:; " +
          "img-src 'self' data: blob:; " +
          "connect-src 'self' http://127.0.0.1:5000; " +
          "script-src 'self' 'unsafe-inline' 'unsafe-eval'"
        ]
      }
    });
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
  mainWindow.webContents.openDevTools();


};

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Quitter sur toutes les plateformes sauf macOS
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    if (pyProcess) pyProcess.kill(); // Assurer la fermeture de Python
    app.quit();
  }
});