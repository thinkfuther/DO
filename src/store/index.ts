import { InjectionKey } from "vue";
import { useRoute } from "vue-router";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import Web3 from "web3";
import axios from "@/axios";
import { Notify } from "vant";

export enum ChainId {
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
  HECO_MAINNET = 128,
  OKEX_MAINNET = 66,
}

declare global {
  interface Window {
    ethereum?: any;
  }
}

interface User {
  userPointBalance: 0;
  userName: "";
  userId: "";
  token: "";
}

export interface State {
  supportChainId: ChainId;
  activeChainId: ChainId;
  web3: Web3;
  account: string | null;
  token: string | "";
  user: User | null;
  isfailed: boolean | true;
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state: {
    // TODO Switch from test network to main network
    supportChainId: ChainId.BSC_TESTNET,
    activeChainId: 0,
    web3: new Web3(),
    account: null,
    token: "", //用户登陆凭证
    user: null, //用户信息
    isfailed: true, //是否请求失败
  },
  getters: {
    isSupportChainId: (state) => {
      return state.activeChainId === state.supportChainId;
    },
  },
  mutations: {
    updateWeb3(state, web3: Web3) {
      state.web3 = web3;
    },
    updateActiveChainId(state, chainId: ChainId) {
      state.activeChainId = chainId;
    },
    updateAccount(state, account: null | string) {
      state.account = account;
    },
    //存储token
    setToken(state, token: string | "") {
      state.token = token;
    },
    //存储用户信息
    setUser(state, user: User) {
      state.user = user;
    },
    //网络请求失败
    isfailed(state, isfailed: boolean) {
      state.isfailed = isfailed;
    },
  },
  actions: {
    init({ commit, dispatch }) {
      axios
        .get("/api/api/token", {
          wallet: "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48",
          inviteCode: "",
        })
        .then((res) => {
          const { code, data } = res.data;
          if (code == 0) {
            commit("setToken", data?.token);
            //获取用户信息
            axios
              .get("/api/auth/user", {
                wallet: "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48",
              })
              .then((res1) => {
                const { code, data } = res1.data;
                if (code == 0) {
                  console.log("用户信息", res1);
                  commit("setUser", data);
                  commit("isfailed", false);
                  Notify({ type: "success", message: "自动登录成功" });
                }
              });
          } else {
            return Notify({ type: "danger", message: "自动登陆失败" });
          }
        })
        .catch((err) => {
          console.log(err);
          return Notify({ type: "danger", message: "接口请求异常" });
        });

      if (!window.ethereum) {
        return;
      }
      commit("updateWeb3", new Web3(window.ethereum));
      window.ethereum.on("chainChanged", (chainId: any) =>
        dispatch("handleChainChanged", chainId)
      );
      window.ethereum.on("accountsChanged", (accounts: string[]) =>
        dispatch("handleAccountsChanged", accounts)
      );

      window.ethereum
        .request({ method: "eth_chainId" })
        .then((chainId: any) => dispatch("handleChainChanged", chainId));
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          dispatch("handleAccountsChanged", accounts);
          if (accounts.length === 0) dispatch("connectWallet");
        });
    },
    connectWallet() {
      if (!window.ethereum) {
        return;
      }
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .catch((err: any) => console.error(err));
    },
    handleChainChanged({ commit }, _chainId: any) {
      const chainId = parseInt(_chainId, 16);
      commit("updateActiveChainId", chainId);
    },
    handleAccountsChanged({ commit }, accounts: string[]) {
      if (accounts.length === 0) return commit("updateAccount", null);
      commit("updateAccount", accounts[0]);
    },
  },
  modules: {},
});

export function useStore() {
  // 通过key给store提供类型
  return baseUseStore(key);
}
