const model = "build"; // dev 为开发环境 build 为测试环境  product 为生产环境
let host = "http://39.106.171.35:8090";
if (model == "build") {
  host = "http://39.106.171.35:8090";
} else if (model == "dev") {
  host = "http://localhost:8090";
}

module.exports = {
  //devServer.proxy适用于本地开发使用，
  //生成环境请用第三方代理软件，如nginx。
  publicPath: "./",
  outputDir: "dist",
  assetsDir: "static",
  devServer: {
    port: 8081, //本机端口号
    host: "localhost", //本机主机名
    https: false, //协议
    open: true, //启动服务器时自动打开浏览器访问
    proxy: {
      "/api": {
        //目标服务器,代理访问到http://localhost:8888
        target: "http://137.184.50.142:8080",
        changOrigin: true, //开启代理
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
