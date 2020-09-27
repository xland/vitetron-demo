module.exports = {
  main: "./src/background.ts",
  build: {
    appId: "com.xland.app",
    productName: "ViteElectron示例",
  },
  env: {
    dev: {
      SERVICE_BASE_URL: "https://dev.yourdomain.site",
    },
    test: {
      SERVICE_BASE_URL: "https://test.yourdomain.site",
    },
    release: {
      SERVICE_BASE_URL: "https://release.yourdomain.site",
    },
  },
};
