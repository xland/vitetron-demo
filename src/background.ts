import vitetron from "vitetron";
import { app, BrowserWindow } from "electron";
let win;
app.on("ready", () => {
  win = new BrowserWindow();
  vitetron.load(win, "index.html");
});
