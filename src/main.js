const { app, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('node:path');
const fs = require('fs');

// Chemin vers le script Python
const pythonScript = path.join(__dirname, '..', '..', 'python', 'server.py');

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
    width: 800,
    height: 600,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
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