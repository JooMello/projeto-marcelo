"use strict";

var _electron = _interopRequireDefault(require("electron"));

var _path = _interopRequireDefault(require("path"));

var _url = _interopRequireDefault(require("url"));

var _electronIsDev = _interopRequireDefault(require("electron-is-dev"));

var _store = _interopRequireDefault(require("./store"));

var _defaultData = _interopRequireDefault(require("./data/defaultData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = _electron["default"].app;
var BrowserWindow = _electron["default"].BrowserWindow;
var mainWindow;
var prefStore = new _store["default"]({
  configName: 'user-preferences',
  defaults: {
    windowBounds: {
      height: 800,
      width: 940
    }
  }
});

var createWindow = function createWindow() {
  var _prefStore$get = prefStore.get('windowBounds'),
      height = _prefStore$get.height,
      width = _prefStore$get.width;

  mainWindow = new BrowserWindow({
    height: height,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true
    },
    width: width
  });

  if (_electronIsDev["default"]) {
    mainWindow.webContents.openDevTools();
  }

  mainWindow.loadURL(_url["default"].format({
    pathname: _path["default"].join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  mainWindow.on('resize', function () {
    // This event doesn't pass the window size, so call getBounds which returns
    // an object with  height, width, and x and y coordinates.
    var _mainWindow$getBounds = mainWindow.getBounds(),
        height = _mainWindow$getBounds.height,
        width = _mainWindow$getBounds.width; // Store window size for use upon app restart


    prefStore.set('windowBounds', {
      height: height,
      width: width
    });
  });
  mainWindow.on('closed', function () {
    mainWindow = null;
  });
};

app.on('ready', createWindow);
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
}); // Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.

function makeSingleInstance() {
  if (process.mas) return;
  app.requestSingleInstanceLock();
  app.on('second-instance', function () {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });
} // Require each JS file in the main-process dir


function loadDemos() {
  var files = glob.sync(_path["default"].join(__dirname, 'main-process/**/*.js'));
  files.forEach(function (file) {
    require(file);
  });
}
//# sourceMappingURL=main.js.map
