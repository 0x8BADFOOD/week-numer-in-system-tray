var app = require('app');
var Tray = require('tray');
var BrowserWindow = require('browser-window');
var win = null;
app.on('ready', function(){
    win = new BrowserWindow({show: false});
    appIcon = new Tray(null);

    appIcon.on('click', function(event) {
        console.log('clicked');
        //win.loadURL('file://' + __dirname + '/index.html');
        win.loadURL('https://github.com');
        // Emitted when the window is closed.
        win.on('closed', function() {
            mainWindow = null;
        });
        win.show();
    });
});
