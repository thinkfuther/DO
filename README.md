# DAPP DEMO
当前连接BSC TESTNET，方便测试。如需切换BSC主网，代码搜索 `// TODO`，修改参数即可。



## Demo功能 - Vue

#### Web3连接钱包，并监控网络、钱包地址变化
> `./src/store/index.ts` 含全局状态管理，连接钱包方法connectWallet

#### 充值/转账BNB到指定钱包
> 转账方法 TransferBNB `./src/erc20/index.ts`
> 调用转账方法 `./src/views/Home.vue` Line 83
> 转账方法调用成功后返回交易HASH

#### 充值/转账其他代币到指定钱包
> 转账方法 TransferToken `./src/erc20/index.ts`
> 调用转账方法 `./src/views/Home.vue` Line 95
> 转账方法调用成功后返回交易HASH



## Demo功能 -  Server


#### 演示Nodejs服务端直接使用钱包助记词初始化Web3。
> `./server/src/web3.ts` 演示使用助记词初始化Web3
> 使用web3转账方法与前端完全相同。
> 提现/转账BNB withdrawBNB `./server/src/index.ts`  
> 提现/转账其他代币 withdrawToken `./server/src/index.ts`  


#### 根据交易HASH验证转账代币、金额，收款地址
> 验证方法 VerifyTransferByHash `./server/src/erc20/index.ts`
> 验证方法用处： 可以在用户在前端充值后，发送交易HASH给服务端。服务端验证后给用户增加余额。

