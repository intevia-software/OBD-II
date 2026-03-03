const { app, Menu, BrowserWindow } = require('electron');
const { spawn } = require('child_process');
const path = require('node:path');

const isDev = !app.isPackaged;

let pyProcess;
let mainWindow = null;
let settingsWindow = null;

/* -------------------- PYTHON -------------------- */

function startPython() {
  const pythonScript = isDev
    ? path.join(app.getAppPath(), 'python', 'index.py')
    : path.join(process.resourcesPath, 'python', 'index.py');

  const pythonExecutable = isDev ? 'python3' : pythonScript;

  pyProcess = isDev
    ? spawn(pythonExecutable, [pythonScript])
    : spawn(pythonExecutable, [], { shell: true });

  pyProcess.stdout.on('data', (data) => {
    console.log(`[Python stdout] ${data}`);
  });

  pyProcess.stderr.on('data', (data) => {
    console.error(`[Python stderr] ${data}`);
  });
}

/* -------------------- WINDOWS -------------------- */

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1100,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  createMenu();
}

function createSettingsWindow() {
  if (settingsWindow) {
    settingsWindow.focus();
    return;
  }

  settingsWindow = new BrowserWindow({
    width: 400,
    height: 200,
    parent: mainWindow,
    modal: false,
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: false,
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

   settingsWindow.loadURL(`${MAIN_WINDOW_WEBPACK_ENTRY}#/info`);

 

  settingsWindow.on('closed', () => {
    settingsWindow = null;
  });
}

/* -------------------- MENU -------------------- */

function createMenu() {
  const template = [
    {
      label: app.name, // ← nom automatique
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: "Information",
      submenu: [
        {
          label: "Ouvrir Information",
          click: () => createSettingsWindow(),
        }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

/* -------------------- APP EVENTS -------------------- */

if (require('electron-squirrel-startup')) {
  app.quit();
}

app.whenReady().then(() => {
  startPython();
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (pyProcess) pyProcess.kill();

  if (process.platform !== 'darwin') {
    app.quit();
  }
});