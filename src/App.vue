<template>
  <div class="head">
    <div class="logo">Logo</div>
    <div class="actions">
      <!-- <van-button type="default">当前网络: {{ activeChainId }}</van-button> -->
        <van-button v-if="!isSupportChainId" type="danger">非BSC，请切换钱包网络</van-button>
        <template v-else>
          <van-button @click="connectWallet" v-if="!account" type="primary">连接钱包</van-button>
          <van-button v-else type="primary">{{ account }}</van-button>
        </template>
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  setup: () => {
    const { dispatch } = useStore();
    dispatch("init");
    return {};
  },
  computed: {
    ...mapState(["account", "activeChainId"]),
    ...mapGetters(["isSupportChainId"]),
  },
  methods: {
    ...mapActions(["connectWallet"]),
  },
});
</script>

<style>
html,body{
  background-color: #f6f6f6;
}
.head {
  height: 65px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
</style>
