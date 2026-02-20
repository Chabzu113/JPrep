const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

// Keep a global reference to prevent garbage collection
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 800,
    minHeight: 600,
    title: 'AP Test Prep',
    titleBarStyle: 'hiddenInset',
    trafficLightPosition: { x: 15, y: 15 },
    backgroundColor: '#f8f9fa',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  // Load the main HTML file
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // Add macOS class so CSS can offset the navbar past traffic lights
  if (process.platform === 'darwin') {
    mainWindow.webContents.on('did-finish-load', () => {
      mainWindow.webContents.executeJavaScript(
        'document.documentElement.classList.add("macos")'
      );
    });
  }

  // Build a simple menu bar
  const menuTemplate = [
    {
      label: 'AP Test Prep',
      submenu: [
        { role: 'about' },
        { type: 'separator' },
        { role: 'hide' },
        { role: 'hideOthers' },
        { role: 'unhide' },
        { type: 'separator' },
        { role: 'quit' }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectAll' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'zoom' },
        { type: 'separator' },
        { role: 'front' }
      ]
    }
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(menuTemplate));

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

// Quit when all windows are closed (macOS standard behavior override)
app.on('window-all-closed', () => {
  app.quit();
});

// Re-create window if dock icon is clicked and no windows exist
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
