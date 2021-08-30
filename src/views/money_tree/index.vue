<template>
  <main class="page_main">
    <div v-if="isfailed">
      <Loading />
    </div>
    <div class="main_act" v-else>
      <!-- 抽奖组件 -->
      <LuckDraw />
      <!-- 奖品列表 -->
      <PrizeList />
      <!-- 邀请好友 -->
      <div class="fission_banner" style="background: none; padding-top:1rem;">
        <div class="fission_banner_content">
          <div @click="invite" class="fission_banner_btn">立即邀请好友</div>
        </div>
      </div>
      <div class="fission_banner_info">
        <b class="fission_banner_info_num"
          >My invitation code: <br />{{ user.userId || "" }}</b
        >
        <span @click="copy" class="fission_banner_info_btn">Copy</span>
      </div>
      <div class="fission_content">
        <div class="fission_gold">
          <b class="fission_gold_tit">我的代币</b>
          <span class="fission_gold_num"
            >{{ user.coinBalance }}<small>LBD</small></span
          >
        </div>
      </div>

      <!-- 我的邀请 -->
      <InviteList />
      <!-- 邀请好友 -->
      <InviteFriend v-if="inviteModel" @closeInvite="closeInvite" />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import axios from "@/axios";
import LuckDraw from "./components/LuckDraw.vue";
import PrizeList from "./components/PrizeList.vue";
import InviteList from "./components/InviteList.vue";
import Loading from "../Loading.vue";
import InviteFriend from "./components/InviteFriend.vue";

export default defineComponent({
  components: { LuckDraw, PrizeList, InviteList, Loading, InviteFriend },
  name: "Index",
  data() {
    return {
      inviteModel: false, //邀请好友
    };
  },
  setup: () => {
    return {};
  },
  computed: {
    ...mapState({
      user: "user",
      isfailed: "isfailed",
    }),
  },
  methods: {
    //复制
    copy() {
      var input = document.createElement("input");
      input.value = this.user.inviteCode;
      document.body.appendChild(input);
      input.select();
      document.execCommand("Copy");
      Notify({ type: "success", message: "复制成功" });
      document.body.removeChild(input); //复制完移除元素
    },
    invite() {
      this.inviteModel = true;
    },
    closeInvite() {
      this.inviteModel = false;
    },
  },
});
</script>

<style>
@import "./css/reset.css";
@import "./css/blindbox_v2/main.css";
@import "./css/liebian.css";
.main_act {
  background: url(./img/blindbox_v2/bg_repeat.png) 3.75rem;
}
</style>
