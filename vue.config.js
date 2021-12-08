module.exports = {
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  // filenameHashing:true,//生成的静态资源在它们的文件名中包含了 hash 以便更好的控制缓存,false 来关闭文件名哈希
  devServer: {
    port: 8081,
    host: "localhost",
    open: true, //浏览器自动访问
    contentBase: "src", //指定托管的根目录
    hot: true, //启动热更新 第一步webpack只用这一步
    https: false,
    proxy: {
      "/": {
        //目标服务器,代理访问到http://localhost:8081
        target: "http://plnksales.finance",
        changOrigin: true, //开启代理
        pathRewrite: {
          "^/": "",
        },
      },
    },
  },
};
