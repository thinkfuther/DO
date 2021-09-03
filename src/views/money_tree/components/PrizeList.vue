<template>
  <div class="spr_cm_box">
    <h2 class="spr_cm_tit">Super Jackpot</h2>
    <div class="spr_box_award">
      <div class="spr_box_award_flex">
        <img class="img_width" src="../img/blindbox_v2/LuckyBabyDoge.png" />
        <span class="spr_box_award_txt"><b>100 Trillion</b></span>
      </div>
      <div class="spr_box_award_flex">
        <img class="img_width" src="../img/blindbox_v2/LuckyBabyDoge.png" />
        <span class="spr_box_award_txt"><b>10 Trillion</b></span>
      </div>
      <div class="spr_box_award_flex">
        <img class="img_width" src="../img/blindbox_v2/LuckyBabyDoge.png" />
        <span class="spr_box_award_txt"><b>1 Trillion</b></span>
      </div>
    </div>

    <div class="spr_box_award">
      <div class="spr_box_award_flex">
        <img class="img_width" src="../img/blindbox_v2/LuckyBabyDoge.png" />
        <span class="spr_box_award_txt"><b>500 Billion</b></span>
      </div>
      <div class="spr_box_award_flex">
        <img class="img_width" src="../img/blindbox_v2/LuckyBabyDoge.png" />
        <span class="spr_box_award_txt"><b>200 Billion</b></span>
      </div>
      <div class="spr_box_award_flex">
        <img class="img_width" src="../img/blindbox_v2/LuckyBabyDoge.png" />
        <span class="spr_box_award_txt"><b>88.8 Billion</b></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";

export default defineComponent({
  components: {},
  name: "PrizeList",
  data() {
    return {};
  },
  setup: () => {
    return {};
  },
  computed: {
    ...mapState({
      user: "user",
    }),
  },
  methods: {},
});
</script>
