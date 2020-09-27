let { app, BrowserWindow } = require("electron");
let win;
app.on("ready", () => {
  win = new BrowserWindow();
  if (process.env.VITETRON === "dev") {
    win.loadURL(`http://localhost:${process.env.WEB_PORT}`);
  } else {
  }
});
