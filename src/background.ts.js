var i=Object.defineProperty,x=Object.prototype.hasOwnProperty,y=(e,t)=>()=>(t||(t={exports:{}},e(t.exports,t)),t.exports),P=e=>i(e,"__esModule",{value:!0}),R=(e,t)=>{if(P(e),typeof t=="object"||typeof t=="function")for(let o in t)!x.call(e,o)&&o!=="default"&&i(e,o,{get:()=>t[o],enumerable:!0});return e},d=e=>e&&e.__esModule?e:R(i({},"default",{value:e,enumerable:!0}),e);var v=y(u=>{var a=Object.defineProperty,_=Object.prototype.hasOwnProperty,m=e=>a(e,"__esModule",{value:!0}),b=(e,t)=>{m(e);for(var o in t)a(e,o,{get:t[o],enumerable:!0})},O=(e,t)=>{if(m(e),typeof t=="object"||typeof t=="function")for(let o in t)!_.call(e,o)&&o!=="default"&&a(e,o,{get:()=>t[o],enumerable:!0});return e},n=e=>e&&e.__esModule?e:O(a({},"default",{value:e,enumerable:!0}),e);const c=n(require("electron")),f=n(require("path")),q=n(require("fs")),L=n(require("url"));c.protocol.registerSchemesAsPrivileged([{scheme:"app",privileges:{secure:!0,standard:!0}}]);class T{regDefaultProtocol(e,t){let o=new L.URL(e.url).pathname;o=decodeURI(o);let w=f.join(__dirname,o);q.default.readFile(w,(p,j)=>{p&&console.error(`Failed to read ${o} on protocol`,p);const r=f.extname(o).toLowerCase();let l="";r===".js"?l="text/javascript":r===".html"?l="text/html":r===".css"?l="text/css":r===".svg"||r===".svgz"?l="image/svg+xml":r===".json"&&(l="application/json"),t({mimeType:l,data:j})})}constructor(){c.app.on("ready",()=>{c.protocol.registerBufferProtocol("vitetron",(e,t)=>this.regDefaultProtocol(e,t))})}}b(u,{default:()=>U});class ${load(e,t="index.html"){process.env.VITETRON==="dev"?e.loadURL(`http://localhost:${process.env.WEB_PORT}/${t}`):e.loadURL(`vitetron://./${t}`)}constructor(){this.protocol=new T}}let B=new $;var U=B});const h=d(v()),s=d(require("electron"));let g;s.app.on("ready",()=>{g=new s.BrowserWindow,h.default.load(g,"index.html")});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vdml0ZXRyb24vZGlzdC9pbmRleC5qcyIsICJzcmMvYmFja2dyb3VuZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsidmFyIGk9T2JqZWN0LmRlZmluZVByb3BlcnR5LHU9T2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSxwPWU9PmkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSxnPShlLG8pPT57cChlKTtmb3IodmFyIHQgaW4gbylpKGUsdCx7Z2V0Om9bdF0sZW51bWVyYWJsZTohMH0pfSxQPShlLG8pPT57aWYocChlKSx0eXBlb2Ygbz09XCJvYmplY3RcInx8dHlwZW9mIG89PVwiZnVuY3Rpb25cIilmb3IobGV0IHQgaW4gbykhdS5jYWxsKGUsdCkmJnQhPT1cImRlZmF1bHRcIiYmaShlLHQse2dldDooKT0+b1t0XSxlbnVtZXJhYmxlOiEwfSk7cmV0dXJuIGV9LGE9ZT0+ZSYmZS5fX2VzTW9kdWxlP2U6UChpKHt9LFwiZGVmYXVsdFwiLHt2YWx1ZTplLGVudW1lcmFibGU6ITB9KSxlKTtjb25zdCBsPWEocmVxdWlyZShcImVsZWN0cm9uXCIpKSxuPWEocmVxdWlyZShcInBhdGhcIikpLG09YShyZXF1aXJlKFwiZnNcIikpLGY9YShyZXF1aXJlKFwidXJsXCIpKTtsLnByb3RvY29sLnJlZ2lzdGVyU2NoZW1lc0FzUHJpdmlsZWdlZChbe3NjaGVtZTpcImFwcFwiLHByaXZpbGVnZXM6e3NlY3VyZTohMCxzdGFuZGFyZDohMH19XSk7Y2xhc3MgZHtyZWdEZWZhdWx0UHJvdG9jb2woZSxvKXtsZXQgdD1uZXcgZi5VUkwoZS51cmwpLnBhdGhuYW1lO3Q9ZGVjb2RlVVJJKHQpO2xldCBoPW4uam9pbihfX2Rpcm5hbWUsdCk7bS5kZWZhdWx0LnJlYWRGaWxlKGgsKGMsdik9PntjJiZjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gcmVhZCAke3R9IG9uIHByb3RvY29sYCxjKTtjb25zdCByPW4uZXh0bmFtZSh0KS50b0xvd2VyQ2FzZSgpO2xldCBzPVwiXCI7cj09PVwiLmpzXCI/cz1cInRleHQvamF2YXNjcmlwdFwiOnI9PT1cIi5odG1sXCI/cz1cInRleHQvaHRtbFwiOnI9PT1cIi5jc3NcIj9zPVwidGV4dC9jc3NcIjpyPT09XCIuc3ZnXCJ8fHI9PT1cIi5zdmd6XCI/cz1cImltYWdlL3N2Zyt4bWxcIjpyPT09XCIuanNvblwiJiYocz1cImFwcGxpY2F0aW9uL2pzb25cIiksbyh7bWltZVR5cGU6cyxkYXRhOnZ9KX0pfWNvbnN0cnVjdG9yKCl7bC5hcHAub24oXCJyZWFkeVwiLCgpPT57bC5wcm90b2NvbC5yZWdpc3RlckJ1ZmZlclByb3RvY29sKFwidml0ZXRyb25cIiwoZSxvKT0+dGhpcy5yZWdEZWZhdWx0UHJvdG9jb2woZSxvKSl9KX19ZyhleHBvcnRzLHtkZWZhdWx0OigpPT5SfSk7Y2xhc3Mgd3tsb2FkKGUsbz1cImluZGV4Lmh0bWxcIil7cHJvY2Vzcy5lbnYuVklURVRST049PT1cImRldlwiP2UubG9hZFVSTChgaHR0cDovL2xvY2FsaG9zdDoke3Byb2Nlc3MuZW52LldFQl9QT1JUfS8ke299YCk6ZS5sb2FkVVJMKGB2aXRldHJvbjovLy4vJHtvfWApfWNvbnN0cnVjdG9yKCl7dGhpcy5wcm90b2NvbD1uZXcgZH19bGV0IHg9bmV3IHc7dmFyIFI9eDtcbiIsICJpbXBvcnQgdml0ZXRyb24gZnJvbSBcInZpdGV0cm9uXCI7XHJcbmltcG9ydCB7IGFwcCwgQnJvd3NlcldpbmRvdywgcHJvdG9jb2wgfSBmcm9tIFwiZWxlY3Ryb25cIjtcclxubGV0IHdpbjtcclxuYXBwLm9uKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gIHdpbiA9IG5ldyBCcm93c2VyV2luZG93KCk7XHJcbiAgLy90b2RvXHJcbiAgdml0ZXRyb24ubG9hZCh3aW4sIFwiaW5kZXguaHRtbFwiKTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICJxWEFBQSxlQUFJLEdBQUUsT0FBTyxlQUFlLEVBQUUsT0FBTyxVQUFVLGVBQWUsRUFBRSxHQUFHLEVBQUUsRUFBRSxhQUFhLENBQUMsTUFBTSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxHQUFHLE9BQVEsS0FBSyxHQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxFQUFFLEdBQUcsV0FBVyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEtBQUssR0FBRyxFQUFFLEdBQUcsTUFBTyxJQUFHLFVBQVUsTUFBTyxJQUFHLFdBQVcsT0FBUSxLQUFLLEdBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxJQUFJLElBQUksV0FBVyxFQUFFLEVBQUUsRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLEdBQUcsV0FBVyxLQUFLLE1BQU8sSUFBRyxFQUFFLEdBQUcsR0FBRyxFQUFFLFdBQVcsRUFBRSxFQUFFLEVBQUUsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLFdBQVcsS0FBSyxHQUFHLEtBQU0sR0FBRSxFQUFFLHFCQUFxQixFQUFFLEVBQUUsaUJBQWlCLEVBQUUsRUFBRSxlQUFlLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxTQUFTLDRCQUE0QixDQUFDLENBQUMsT0FBTyxNQUFNLFdBQVcsQ0FBQyxPQUFPLEdBQUcsU0FBUyxPQUFPLFFBQVEsbUJBQW1CLEVBQUUsR0FBRyxHQUFJLEdBQUUsR0FBSSxHQUFFLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRSxVQUFVLEdBQUcsR0FBSSxHQUFFLEVBQUUsS0FBSyxVQUFVLEdBQUcsRUFBRSxRQUFRLFNBQVMsRUFBRSxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsTUFBTSxrQkFBa0IsZ0JBQWdCLEdBQUcsS0FBTSxHQUFFLEVBQUUsUUFBUSxHQUFHLGNBQWMsR0FBSSxHQUFFLEdBQUcsSUFBSSxNQUFNLEVBQUUsa0JBQWtCLElBQUksUUFBUSxFQUFFLFlBQVksSUFBSSxPQUFPLEVBQUUsV0FBVyxJQUFJLFFBQVEsSUFBSSxRQUFRLEVBQUUsZ0JBQWdCLElBQUksU0FBVSxHQUFFLG9CQUFvQixFQUFFLENBQUMsU0FBUyxFQUFFLEtBQUssTUFBTSxjQUFjLEVBQUUsSUFBSSxHQUFHLFFBQVEsS0FBSyxFQUFFLFNBQVMsdUJBQXVCLFdBQVcsQ0FBQyxFQUFFLElBQUksS0FBSyxtQkFBbUIsRUFBRSxPQUFPLEVBQUUsRUFBUSxDQUFDLFFBQVEsSUFBSSxJQUFJLFFBQVEsS0FBSyxFQUFFLEVBQUUsY0FBYyxRQUFRLElBQUksV0FBVyxNQUFNLEVBQUUsUUFBUSxvQkFBb0IsUUFBUSxJQUFJLFlBQVksS0FBSyxFQUFFLFFBQVEsZ0JBQWdCLEtBQUssY0FBYyxLQUFLLFNBQVMsR0FBSSxJQUFHLEdBQUksR0FBRSxHQUFJLEdBQUUsR0FBSSxHQUFFLElDQTd5QyxRQUFxQixPQUNyQixFQUE2Qyx1QkFDN0MsR0FBSSxHQUNKLE1BQUksR0FBRyxRQUFTLEtBQ2QsRUFBTSxHQUFJLGlCQUVWLFVBQVMsS0FBSyxFQUFLIiwKICAibmFtZXMiOiBbXQp9Cg==
