import { Notify, Toast } from "vant";
import Web3 from "web3";
import { TransferToken } from "@/erc20";
import { formatUnits, parseUnits } from "@ethersproject/units";
//充值收款钱包
const ReceivePaymentAddress = "0x2b2cb0fD50f734a054Ea282D9C7fA8533B28C521";

/**
 * 转账BNB
 * @param {*} params
 * @param {*} success
 * @param {*} error
 */
export const TransferBNB = async (web3, from, to, value) => {
  const amount = parseUnits(value, 18).toString();
  return web3.eth.sendTransaction(
    { from: from, to: to, value: amount },
    function(err, address) {
      if (!err) return address;
    }
  );
};
export async function payBNB(params, success, error) {
  console.log("params", params);
  try {
    const amount = parseUnits(params.value, 18).toString();
    new Web3().eth.sendTransaction(
      {
        from: params.from,
        to: ReceivePaymentAddress,
        value: amount,
      },
      function(err, address) {
        if (!err) {
          //
          success(address);
        } else {
          //
          error(err);
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
}
/**转账代币
 * @param {web3} web3
 * @param {钱包地址} account
 * @param {合约地址} contractAddress
 * @param {充值金额} value
 */

export async function pay(params, success, error) {
  try {
    Toast.loading({
      message: "加载中...",
      forbidClick: true,
      overlay: true,
      duration: 0,
    });
    setTimeout(() => {
      Toast.clear();
    }, 2000);
    const result = await TransferToken(
      params.web3,
      ReceivePaymentAddress,
      params.account,
      params.contractAddress,
      params.value
    );

    const { transactionHash } = result;
    console.log("hash--", transactionHash);
    //充值成功，调用积分接口
    success(transactionHash);
  } catch (err) {
    error(err);
    Notify({ type: "danger", message: " failed" });
  }
}
