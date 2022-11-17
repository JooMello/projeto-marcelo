import electron from 'electron';
import path from 'path';
import url from 'url';
import isDevelopment from 'electron-is-dev';
import Store from './store';
import defaultData from './data/defaultData';

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let mainWindow;

const prefStore = new Store({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      height: 800,
      width: 940
    }
  }
});

const createWindow = () => {
  const { height, width } = prefStore.get('windowBounds');

  mainWindow = new BrowserWindow({
    height,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true
    },
    width
  });

  if (isDevelopment) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    })
  );

  mainWindow.on('resize', () => {
    // This event doesn't pass the window size, so call getBounds which returns
    // an object with  height, width, and x and y coordinates.
    const { height, width } = mainWindow.getBounds();

    // Store window size for use upon app restart
    prefStore.set('windowBounds', { height, width });
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
};




app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});


// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function makeSingleInstance () {
  if (process.mas) return

  app.requestSingleInstanceLock()

  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
}

// Require each JS file in the main-process dir
function loadDemos () {
  const files = glob.sync(path.join(__dirname, 'main-process/**/*.js'))
  files.forEach((file) => { require(file) })
}
