let BASE_URL = "/api"; //这里是一个默认的url，可以没有

console.log("环境", process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case "development":
    BASE_URL = "/api"; //开发环境url
    break;
  case "production":
    BASE_URL = "https://api.luckybabydoge.com"; //生产环境url
    break;
}

export default BASE_URL;
