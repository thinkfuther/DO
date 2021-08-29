import express from 'express';
import { Request, Response } from 'express';
import web3, { getAccount } from './web3';
import { TransferBNB, TransferToken,VerifyTransferByHash } from "./erc20"

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application works!');
});


// 提取BNB
app.get('/withdrawBNB', async (req: Request, res: Response) => {
  const from = await getAccount();
  const to = "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48"
  const amount = "0.001"
  try {
    // 转账方法和前端完全相同。
    const result = await TransferBNB(web3, from, to, amount)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  res.send('Done');
});

// 提取其他代币
app.get('/withdrawToken', async (req: Request, res: Response) => {
  const from = await getAccount();
  const to = "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48"
  const contractAddress = "0x0365d6a6b6266989adebe0410979365c2e736431"
  const amount = "100"
  try {
    const result = await TransferToken(web3, contractAddress, from, to, amount)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  res.send('Done');
})

// 根据交易HASH验证转账代币、转账金额、收款地址。
app.get('/verifyTransferByHash', async (req: Request, res: Response) => {
  const hash = "0x1b98ba0edcd26f7529833765e1cb1a8e548922179375ef66b148a7d055fef74e";
  try {
    const result = await VerifyTransferByHash(web3, hash)
    console.log(result)
  } catch (err) {
    console.log(err)
  }
  res.send('Done');
})

app.listen(7001, () => {
  console.log('Application started on port 7001!');
});