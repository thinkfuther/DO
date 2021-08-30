<template>
  <div>
    <go-back />
    <div class="home fission_content">
      <div class="head">
        <div class="actions">
          <!-- <van-button type="default">当前网络: {{ activeChainId }}</van-button> -->
          <van-button v-if="!isSupportChainId" type="danger"
            >Non BSC, please switch wallet network</van-button
          >
          <template v-else>
            <van-button @click="connectWallet" v-if="!account" type="primary"
              >connect wallet</van-button
            >
            <van-button v-else type="primary">{{ account }}</van-button>
          </template>
        </div>
      </div>
      <div class="button-tabs">
        <van-button
          v-for="(item, index) in supportTokens"
          :key="index"
          :type="currentTokenIndex === index ? 'primary' : 'default'"
          @click="handleChangeToken(index)"
          >{{ item.label }}</van-button
        >
      </div>
      <div class="value-input">
        <van-cell-group>
          <van-field
            v-model="value"
            label="Recharge quantity"
            placeholder="0.0"
          />
        </van-cell-group>
      </div>
      <div class="submit-button">
        <van-button
          type="primary"
          block
          @click="handleSubmit"
          :loading="loading"
          loading-text="Recharging..."
          >Recharge</van-button
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { mapState, mapGetters, mapActions } from "vuex";
import { Notify } from "vant";
import { TransferBNB, TransferToken } from "@/erc20";
import axios from "@/axios";
import GoBack from "./GoBack.vue";

// TODO 修改充值收款钱包。接口从后端获取最好。
const ReceivePaymentAddress = "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48";

export default defineComponent({
  components: { GoBack },
  name: "Home",
  data() {
    return {
      currentTokenIndex: 0,
      value: "",
      loading: false,
      supportTokens: [
        { label: "BNB", address: "BNB" },
        // TODO Switch from test network to main network
        {
          label: "SpaceCoin",
          address: "0x0365d6a6b6266989adebe0410979365c2e736431",
        },
      ],
    };
  },
  setup: () => {
    const { dispatch } = useStore();
    dispatch("init");
    return {};
  },
  computed: {
    ...mapState(["account", "activeChainId", "web3"]),
    ...mapGetters(["isSupportChainId"]),
  },
  methods: {
    ...mapActions(["connectWallet"]),
    handleChangeToken(index: number) {
      this.currentTokenIndex = index;
    },
    async handleSubmit() {
      try {
        if (!this.isSupportChainId)
          return Notify({
            type: "danger",
            message: "不支持的网络，请切换钱包网络后重试",
          });
        if (!this.account)
          return Notify({ type: "danger", message: "请连接钱包后重试" });
        if (!(Number(this.value) > 0))
          return Notify({ type: "danger", message: "充值数量必须大于0" });

        this.loading = true;
        const token = this.supportTokens[this.currentTokenIndex];
        if (token.address === "BNB") {
          // BNB和其他代币转账方法不同
          const result = await TransferBNB(
            this.web3,
            this.account,
            ReceivePaymentAddress,
            this.value
          );
          console.log(result);
          // 充值/转账成功后获取到交易HASH值。可以将HASH传给后端，后端通过接口验证该笔交易和转账数量。验证成功后入库，增加用户金额。
          const transactionHash = result.transactionHash;
          console.log(transactionHash);
        } else {
          // 除BNB外其他所有代币，如USDT,WBNB,CAKE及用户发布代币均使用该方法转账
          const result = await TransferToken(
            this.web3,
            token.address,
            this.account,
            ReceivePaymentAddress,
            this.value
          );
          console.log(result);
          // 同转账BNB一样，成功后获取到交易HASH值。传给后端验证。验证方式与BNB有点不同。 在Node JS服务端DEMO中演示验证代码。
          const transactionHash = result.transactionHash;
          console.log(transactionHash);
        }
        Notify({ type: "success", message: `${token.label}充值成功` });
        //充值成功，调用积分接口
        axios
          .post("/auth/recharge", {
            wallet: "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48",
            point: 20,
            inviteCode: "",
            hash: "",
          })
          .then((res) => {
            console.log("抽奖成功", res);
          });
      } catch (err) {
        console.error(err);
        Notify({ type: "danger", message: err.message });
      } finally {
        this.value = "";
        this.loading = false;
      }
    },
  },
});
</script>

<style>
.home {
  background-color: #fff;
  margin: 0.3rem;
  padding: 0.2rem;
}
.button-tabs {
  display: flex;
  flex-direction: row;
}
.value-input {
  margin: 15px 0;
}
</style>
