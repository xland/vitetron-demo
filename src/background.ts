import vitetron from "vitetron";
import { app, BrowserWindow, protocol } from "electron";
let win;
app.on("ready", () => {
  win = new BrowserWindow();
  //todo
  vitetron.load(win, "index.html");
});
