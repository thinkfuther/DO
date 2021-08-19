import Web3 from "web3"
import HDWalletProvider from "@truffle/hdwallet-provider";

// TODO 这里填钱包助记词
const mnemonic = ""
const web3 = new Web3()
// BSC TESTNET https://data-seed-prebsc-1-s1.binance.org:8545
// BSC MAIN https://bsc-dataseed.binance.org

// TODO Switch from test network to main network
let provider = new HDWalletProvider(mnemonic, "https://data-seed-prebsc-1-s1.binance.org:8545")

web3.setProvider(provider)

export const getAccount = async () => {
    const accounts = await web3.eth.getAccounts()
    return accounts[0];
}

export default web3;