import app from "../main";
import axios from "@/axios";
import { Notify } from "vant";

//获取用户信息
export async function getUser(account) {
  try {
    const { data } = await axios.get("/auth/user", {
      wallet: account,
    });
    if (data.code == 0) {
      return data.data;
    } else {
      console.error(data.msg);
    }
  } catch (err) {
    //
  }
}
