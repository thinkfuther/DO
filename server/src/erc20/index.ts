import Web3 from "web3";
import { AbiItem } from "web3-utils";
import { formatUnits, parseUnits } from '@ethersproject/units'
const ERC20_ABI= require('./abis/erc20.json'); 

// 获取代币信息
export const GetTokenInfo = async (web3: Web3, contractAddress: string,): Promise<{ name: string, symbol: string, decimals: string } | null> => {
    try {
        const contractInstance = new web3.eth.Contract(ERC20_ABI as AbiItem[], contractAddress);
        const name = await contractInstance.methods.name().call()
        const symbol = await contractInstance.methods.symbol().call()
        const decimals = await contractInstance.methods.decimals().call()
        return { name, symbol, decimals }
    } catch (err) {
        return null
    }
}

export const GetTokenDecimals = async (web3: Web3, contractAddress: string,): Promise<string> => {
    const contractInstance = new web3.eth.Contract(ERC20_ABI as AbiItem[], contractAddress);
    const decimals = await contractInstance.methods.decimals().call()
    return decimals || 18
}

// 获取代币余额
export const GetBalanceOfToken = async (web3: Web3, contractAddress: string, account: string): Promise<string> => {
    try {
        const contractInstance = new web3.eth.Contract(ERC20_ABI as AbiItem[], contractAddress);
        const decimals = await GetTokenDecimals(web3, contractAddress)
        const balance = await contractInstance.methods.balanceOf(account).call()
        return formatUnits(balance, decimals)
    } catch (err) {
        return "0"
    }
}

// 获取BNB余额
export const GetBalanceOfBNB = async (web3: Web3, account: string): Promise<string> => {
    const wei = await web3.eth.getBalance(account)
    return web3.utils.fromWei(wei)
}

// 转账BNB
export const TransferBNB = async (web3: Web3, from: string, to: string, value: string) => {
    const amount = parseUnits(value, 18).toString()
    return await web3.eth.sendTransaction({
        from: from,
        to: to,
        value: amount,
    });
}

// 转账代币
export const TransferToken = async (web3: Web3, contractAddress: string, from: string, to: string, value: string) => {
    const contractInstance = new web3.eth.Contract(ERC20_ABI as AbiItem[], contractAddress);
    const decimals = await GetTokenDecimals(web3, contractAddress)
    const amount = parseUnits(value, decimals).toString()
    return await contractInstance.methods.transfer(to, amount).send({ from: from })
}


// 根据交易HASH验证转账代币、转账金额、收款地址。
const InputDataDecoder = require('ethereum-input-data-decoder');
const decoder = new InputDataDecoder(ERC20_ABI);
export const VerifyTransferByHash = async (web3: Web3, hash: string): Promise<{ token: string, receiveAddress: string, amount: number } | null> => {
    const txR = await web3.eth.getTransaction(hash);
    const to = txR.to;
    const bnbAmount = Number(txR.value);
    if (to && bnbAmount > 0) {
        const amount = Number(formatUnits(bnbAmount, 18))
        return { token: "BNB", receiveAddress: to, amount: amount };
    }
    const decodeData = decoder.decodeData(txR.input);
    if (to && decodeData.method === "transfer" && decodeData.inputs && decodeData.inputs.length === 2) {
        const decimals = await GetTokenDecimals(web3, to)
        const receiveAddress = decodeData.inputs[0];
        const amount = Number(formatUnits(decodeData.inputs[1].toString(), decimals))
        return{ token: to, receiveAddress, amount }
    }
    return null;
}
