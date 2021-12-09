import axios from "axios";
import app from "../main.ts";
import BASE_URL from "../utils/baseUrl";
import { getQueryParam } from "../utils/index";

axios.defaults.baseURL = BASE_URL;

axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;
//post请求头
axios.defaults.headers.post["Content-Type"] = "application/json";
//设置超时
axios.defaults.timeout = 30000;

axios.interceptors.request.use(
  (config) => {
    const { token = "" } = app.$store.state || "";
    config.headers["access-token"] = token;
    config.headers["coin"] = getQueryParam("coin") || "MiniTennis";
    config.headers["activityType"] = 3;
    config.headers["chainType"] = 1;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    alert(`异常请求：${JSON.stringify(error.message)}`);
  }
);
export default {
  post(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "post",
        url,
        data: data,
      })
        .then((res) => {
          resolve(res.data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },

  get(url, data) {
    return new Promise((resolve, reject) => {
      axios({
        method: "get",
        url,
        params: data,
      })
        .then((res) => {
          resolve(res);
        })
        .catch((err) => {
          reject(err);
        });
    });
  },
};
