import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import Web3 from "web3";
import axios from "@/axios";
import { Notify } from "vant";
import { getQueryParam } from "../utils/index";

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
  inviteCode: string | "";
}
export const key: InjectionKey<Store<State>> = Symbol();
export const store = createStore<State>({
  state: {
    // TODO Switch from test network to main network
    supportChainId: ChainId.BSC_MAINNET,
    activeChainId: 0,
    web3: new Web3(),
    account: null,
    token: "", //用户登陆凭证
    user: null, //用户信息
    isfailed: true, //是否请求失败
    inviteCode: "", //邀请码
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
    //存储邀请码
    setCode(state, inviteCode: string | "") {
      state.inviteCode = inviteCode;
    },
    //网络请求失败
    isfailed(state, isfailed: boolean) {
      state.isfailed = isfailed;
    },
  },
  actions: {
    async init({ commit, dispatch }) {
      //存储邀请码
      const inviteCode = getQueryParam("inviteCode") || "";
      console.log("inviteCode---", inviteCode);
      commit("setCode", inviteCode);
      if (!window.ethereum) {
        return;
      }
      commit("updateWeb3", new Web3(window.ethereum));
      window.ethereum.on("chainChanged", (chainId: any) =>
        dispatch("handleChainChanged", chainId)
      );
      window.ethereum.on("accountsChanged", (accounts: string[]) => {
        dispatch("handleAccountsChanged", accounts);
      });

      window.ethereum
        .request({ method: "eth_chainId" })
        .then((chainId: any) => dispatch("handleChainChanged", chainId));
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts: string[]) => {
          dispatch("handleAccountsChanged", accounts);
          //获取钱包地址后
          const account = accounts[0];
          axios
            .get("/api/token", {
              wallet: account,
              inviteCode: inviteCode,
            })
            .then((res) => {
              const { code, data } = res.data;
              if (code == 0) {
                store.commit("setToken", data?.token);
                //获取用户信息
                axios
                  .get("/auth/user", {
                    wallet: account,
                  })
                  .then((res1) => {
                    const { code, data } = res1.data;
                    if (code == 0) {
                      store.commit("setUser", data);
                      store.commit("isfailed", false);
                      // Notify({ type: "success", message: "Auto login success" });
                    }
                  });
              } else {
                // return Notify({ type: "danger", message: "自动登陆失败" });
              }
            })
            .catch((err) => {
              console.log(err);
              return Notify({ type: "danger", message: "failed" });
            });
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
