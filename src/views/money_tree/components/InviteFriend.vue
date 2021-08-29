<template>
  <main class="win_p_m">
    <!-- 弹层遮罩 -->
    <div class="fl_bg"></div>
    <!-- 邀请好友 -->
    <div class="f_popup">
      <h3 class="popup_gold_tit">分享给好友</h3>

      <div class="f_codebox">
        <img class="f_codeimg" src="../img/code.jpg" />
      </div>
      <button class="cm_popup_clo" @click="closeInvite"></button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import { TransferBNB, TransferToken } from "@/erc20";

export default defineComponent({
  name: "Friend",
  data() {
    return {};
  },
  setup: () => {
    return {};
  },
  computed: {},
  methods: {
    closeInvite() {
      this.$emit("closeInvite");
    },
  },
});
</script>
