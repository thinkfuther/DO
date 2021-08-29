<template>
  <main class="win_p_m">
    <!-- 弹层遮罩 -->
    <div class="fl_bg"></div>
    <!-- 中奖弹窗 -->
    <div class="cm_popup popup_money ">
      <div class="popup_gold_flex">
        <b class="popup_gold_flex_txt"
          >{{ bigNumberTransform(prizePoint) }} IBD</b
        >
      </div>
      <button class="cm_popup_clo" @click="cancel"></button>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import { bigNumberTransform } from "@/utils/index";

export default defineComponent({
  name: "prizeModel",
  data() {
    return {
      bigNumberTransform,
    };
  },
  props: ["prizePoint"],
  setup: () => {
    return {};
  },
  computed: {},
  methods: {
    cancel() {
      this.$emit("cancel");
    },
  },
});
</script>
