import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import Web3 from "web3";
import { getUserToken } from "../api/index";

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

interface Ip {
  bought: 0;
  hardCap: 0;
}

export interface State {
  supportChainId: ChainId;
  activeChainId: ChainId;
  web3: Web3;
  account: string | null;
  token: string | "";
  presale: Ip | null;
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
    presale: null,
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
    setPresale(state, presale: Ip) {
      state.presale = presale;
    },

    setCode(state, inviteCode: string | "") {
      state.inviteCode = inviteCode;
    },

    isfailed(state, isfailed: boolean) {
      state.isfailed = isfailed;
    },
  },
  actions: {
    connectWallet() {
      if (!window.ethereum) {
        return;
      }
      window.ethereum
        .request({ method: "eth_requestAccounts" })
        .then((res) => {
          getUserToken(res[0]);
        })
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
