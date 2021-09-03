<template>
  <div>
    <go-back />
    <div class="home fission_content">
      <h2 class="spr_cm_tit">Unstaked</h2>
      <div class="head">
        <div class="actions">
          <van-button v-if="!isSupportChainId" type="danger"
            >Non BSC, please switch wallet network</van-button
          >
          <template v-else>
            <van-button @click="connectWallet" v-if="!account" type="primary"
              >connect wallet</van-button
            >
            <!-- <van-button v-else type="primary">{{ account }}</van-button> -->
          </template>
        </div>
      </div>
      <div class="button-tabs">
        <van-button
          v-for="(item, index) in supportType"
          :key="index"
          :type="currentIndex === item.value ? 'primary' : 'default'"
          @click="handleChange(item.value)"
          >{{ item.label }}</van-button
        >
      </div>
      <div class="value-input">
        <van-cell-group>
          <van-field
            v-model="value"
            label="Withdrawal quantity"
            placeholder="0.0"
            label-width="5rem"
          />
        </van-cell-group>
      </div>
      <div class="submit-button">
        <van-button
          type="primary"
          block
          @click="handleSubmit"
          :loading="loading"
          loading-text="Withdrawaling..."
          >Withdrawal</van-button
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

export default defineComponent({
  components: { GoBack },
  name: "WithDrawal",
  data() {
    return {
      value: "", //积分
      loading: false,
      currentIndex: "1", //提现类型
      supportType: [
        {
          label: "LBD",
          value: "1",
        },
        {
          label: "U",
          value: "2",
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
    handleChange(value) {
      try {
        this.currentIndex = value;
      } catch (e) {
        Notify({ type: "danger", message: "切换失败" });
      }
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
        if (!(Number(this.value) > 100000000000000))
          return Notify({
            type: "danger",
            message: "提现数量必须大于100000000000000",
          });

        this.loading = true;
        axios
          .post("/auth/withdraw", {
            wallet: this.account,
            point: this.value,
            type: this.currentIndex,
          })
          .then((res) => {
            let { code, msg = "提现失败" } = res;
            if (code == 0) {
              console.log("提现成功", res);
              Notify({ type: "success", message: `提现成功` });
            } else {
              Notify({ type: "danger", message: msg });
            }
          });
        //充值成功，调用积分接口
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
.value-input {
  margin: 15px 0;
}
</style>
