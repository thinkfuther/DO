<template>
  <!-- 我的积分 -->
  <div class="point">
    <go-back />
    <div class="fission_content m_t">
      <div class="fission_gold">
        <b class="fission_gold_tit">我的积分</b>
        <span class="fission_gold_num">{{ user.userPointBalance }}</span>
      </div>
    </div>

    <!-- 我的积分明细 -->
    <div class="fission_content">
      <h2 class="fission_cm_tit">
        积分记录
      </h2>
      <section class="fission_tab_content">
        <div class="fission_tab_row">
          <div class="fission_tab_flex">
            <b class="txt_del">202108190600</b>
          </div>
          <div class="fission_tab_flex">
            <b class="txt_del">+1000</b>
          </div>
        </div>
        <div class="fission_tab_row">
          <div class="fission_tab_flex">
            <b class="txt_del">202108190630</b>
          </div>
          <div class="fission_tab_flex">
            <b class="txt_del">+1000</b>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import GoBack from "./GoBack.vue";

export default defineComponent({
  components: { GoBack },
  name: "Point",
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
<style>
.m_t {
  margin-top: 0.3rem;
}
</style>
