import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import Web3 from 'web3';

export enum ChainId {
  BSC_TESTNET = 97,
  BSC_MAINNET = 56,
  HECO_MAINNET = 128,
  OKEX_MAINNET = 66
}
declare global {
  interface Window {
    ethereum?: any;
  }
}

export interface State {
  supportChainId: ChainId,
  activeChainId: ChainId,
  web3: Web3,
  account: string | null

}
export const key: InjectionKey<Store<State>> = Symbol()
export const store = createStore<State>({
  state: {
    supportChainId: ChainId.BSC_MAINNET,
    activeChainId: 0,
    web3: new Web3(),
    account: null
  },
  getters: {
    isSupportChainId: state => {
      return state.activeChainId === state.supportChainId
    }
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
    }
  },
  actions: {
    init({ commit, dispatch }) {
      if (!window.ethereum) { return; }
      commit('updateWeb3', new Web3(window.ethereum))
      window.ethereum.on('chainChanged', (chainId: any) => dispatch('handleChainChanged', chainId));
      window.ethereum.on('accountsChanged', (accounts: string[]) => dispatch('handleAccountsChanged', accounts));

      window.ethereum.request({ method: 'eth_chainId' }).then((chainId: any) => dispatch('handleChainChanged', chainId))
      window.ethereum.request({ method: 'eth_accounts' }).then((accounts: string[]) => {
        dispatch('handleAccountsChanged', accounts)
        if (accounts.length === 0) dispatch('connectWallet')
      })
    },
    connectWallet() {
      if (!window.ethereum) { return; }
      window.ethereum.request({ method: 'eth_requestAccounts' }).catch((err: any) => console.error(err))
    },
    handleChainChanged({ commit }, _chainId: any) {
      const chainId = parseInt(_chainId, 16);
      commit('updateActiveChainId', chainId)
    },
    handleAccountsChanged({ commit }, accounts: string[]) {
      if (accounts.length === 0) return commit('updateAccount', null)
      commit('updateAccount', accounts[0])
    }
  },
  modules: {}
})

export function useStore() {
  // 通过key给store提供类型
  return baseUseStore(key)
}