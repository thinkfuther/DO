import Vue, { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { store, key } from "./store";
import "./assets/main.css";

import Vant from "vant";
import "vant/lib/index.css";
import { getQueryParam } from "./utils/index";
import axios from "@/axios";
import { Notify } from "vant";
import Web3 from "web3";
import { getUserToken } from "./api/index";

import { AbiItem } from "web3-utils";
import { formatUnits, parseUnits } from "@ethersproject/units";
import ERC20_ABI from "./erc20/abis/erc20.json";

//语言切换
import i18n from "./lang/index";

const app = createApp(App)
  .use(router)
  .use(Vant)
  .use(i18n)
  .use(store, key)
  .mount("#root");
export default app;

createApp(App).config.globalProperties.$YAddress = "y";
createApp(App).config.globalProperties.$WAddress = "y";
//项目初始化
function appInit() {
  if (app) {
    const { dispatch, commit } = app.$store;

    //隐藏骨架屏
    if (!window.ethereum) {
      setTimeout(() => {
        commit("isfailed", false);
      }, 3000);
      return;
    }

    commit("updateWeb3", new Web3(window.ethereum));
    window.ethereum.on("accountsChanged", (accounts: string[]) => {
      dispatch("handleAccountsChanged", accounts);
    });
    window.ethereum
      .request({ method: "eth_chainId" })
      .then((chainId: any) => dispatch("handleChainChanged", chainId));
    //节点持有的账户列表
    window.ethereum
      .request({ method: "eth_accounts" })
      .then((accounts: string[]) => {
        dispatch("handleAccountsChanged", accounts);

        commit("updateAccount", accounts[0]);

        if (accounts.length > 0) {
          getUserToken(accounts[0]);
        }
        if (accounts.length === 0) dispatch("connectWallet");
      });
  }
}

//启动
setTimeout(() => {
  appInit();
}, 1e3);
