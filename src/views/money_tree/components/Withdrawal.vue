<template>
  <div class="home">
    <GoBack />
    <div class="head">
      <div class="actions">
        <van-button v-if="!isSupportChainId" type="danger"
          >非BSC，请切换钱包网络</van-button
        >
        <template v-else>
          <van-button @click="connectWallet" v-if="!account" type="primary"
            >连接钱包</van-button
          >
          <van-button v-else type="primary">{{ account }}</van-button>
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
        <van-field v-model="value" label="提现数量数量" placeholder="0.0" />
      </van-cell-group>
    </div>
    <div class="submit-button">
      <van-button
        type="primary"
        block
        @click="handleSubmit"
        :loading="loading"
        loading-text="提现中..."
        >提现</van-button
      >
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
          label: "积分",
          value: "1",
        },
        {
          label: "U",
          value: "2",
        },
        {
          label: "代币",
          value: "3",
        },
        {
          label: "链币",
          value: "4",
        },
        {
          label: "全部",
          value: "5",
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
        if (!(Number(this.value) > 0))
          return Notify({ type: "danger", message: "提现数量必须大于0" });

        this.loading = true;
        axios
          .post("/api/auth/withdraw", {
            wallet: "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48",
            point: this.value,
            type: this.currentIndex,
          })
          .then((res) => {
            console.log("提现成功", res);
            Notify({ type: "success", message: `提现成功` });
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
