import app from "../main";
import axios from "@/axios";
import { Notify } from "vant";
//获取用户token及用户信息
export function getUserToken(account, inviteCode = "") {
  try {
    const { commit } = app.$store;
    axios
      .get("/api/token", {
        wallet: account,
        inviteCode: inviteCode,
      })
      .then(async (res) => {
        const { code, data, msg } = res.data;
        if (code == 0) {
          commit("setToken", data?.token);

          await getUser(account);
          await getPresale(account);
        } else {
          return Notify({ type: "danger", message: msg });
        }
      })
      .catch((err) => {
        console.log("err--", err);
      });
  } catch (err) {
    //
  }
}
//获取用户信息
async function getUser(account) {
  try {
    const { commit } = app.$store;
    const { data } = await axios.get("/auth/user", {
      wallet: account,
    });
    if (data.code == 0) {
      commit("setUser", data.data);
    } else {
      console.error(data.msg);
    }
  } catch (err) {
    //
  }
}

//presale
async function getPresale(account) {
  try {
    const { commit } = app.$store;
    const { data } = await axios.get("/api/presale", {
      wallet: account,
    });
    if (data.code == 0) {
      commit("setPresale", data.data);
      // commit("isfailed", false);
    } else {
      console.error(data.msg);
    }
  } catch (err) {
    //
  }
}
