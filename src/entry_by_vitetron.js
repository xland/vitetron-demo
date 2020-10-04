process.env={...process.env,...{"SERVICE_BASE_URL":"https://dev.yourdomain.site","VITETRON":"dev","WEB_PORT":"3000"}};
var n=Object.defineProperty,v=Object.prototype.hasOwnProperty;var g=o=>n(o,"__esModule",{value:!0});var u=(o,e)=>{if(g(o),typeof e=="object"||typeof e=="function")for(let t in e)!v.call(o,t)&&t!=="default"&&n(o,t,{get:()=>e[t],enumerable:!0});return o},i=o=>o&&o.__esModule?o:u(n({},"default",{value:o,enumerable:!0}),o);const l=i(require("electron")),a=i(require("path")),p=i(require("fs")),m=i(require("url"));l.protocol.registerSchemesAsPrivileged([{scheme:"app",privileges:{secure:!0,standard:!0}}]);class f{regDefaultProtocol(o,e){let t=new m.URL(o.url).pathname;t=decodeURI(t);let d=a.join(__dirname,t);p.default.readFile(d,(c,h)=>{c&&console.error(`Failed to read ${t} on protocol`,c);const r=a.extname(t).toLowerCase();let s="";r===".js"?s="text/javascript":r===".html"?s="text/html":r===".css"?s="text/css":r===".svg"||r===".svgz"?s="image/svg+xml":r===".json"&&(s="application/json"),e({mimeType:s,data:h})})}constructor(){l.app.on("ready",()=>{l.protocol.registerBufferProtocol("vitetron",(o,e)=>this.regDefaultProtocol(o,e))})}}class P{load(o,e="index.html"){process.env.VITETRON==="dev"?o.loadURL(`http://localhost:${process.env.WEB_PORT}/${e}`):o.loadURL(`vitetron://./${e}`)}constructor(){this.protocol=new f}}global.vitetron=new P;
;
var __defineProperty = Object.defineProperty;
var __hasOwnProperty = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => {
  return __defineProperty(target, "__esModule", {value: true});
};
var __exportStar = (target, module2) => {
  __markAsModule(target);
  if (typeof module2 === "object" || typeof module2 === "function") {
    for (let key in module2)
      if (!__hasOwnProperty.call(target, key) && key !== "default")
        __defineProperty(target, key, {get: () => module2[key], enumerable: true});
  }
  return target;
};
var __toModule = (module2) => {
  if (module2 && module2.__esModule)
    return module2;
  return __exportStar(__defineProperty({}, "default", {value: module2, enumerable: true}), module2);
};

// src/background.ts
const electron = __toModule(require("electron"));
let win;
electron.app.on("ready", () => {
  win = new electron.BrowserWindow();
  vitetron.load(win, "index.html");
});
//# sourceMappingURL=entry_by_vitetron.js.map
