let BASE_URL = "/"; //这里是一个默认的url，可以没有

console.log("env", process.env.NODE_ENV);
switch (process.env.NODE_ENV) {
  case "development":
    BASE_URL = "/"; //开发环境url
    break;
  case "production":
    BASE_URL = "https://plnksales.finance"; //正式环境
    break;
}

export default BASE_URL;
