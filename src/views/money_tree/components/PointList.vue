<template>
  <main class="walletbox">
    <go-back />

    <div class="fission_content">
      <div class="fission_gold">
        <b class="fission_gold_tit">My points</b>
        <span class="fission_gold_num"
          >{{ user.userPointBalance }}<small>LBD</small></span
        >
      </div>
    </div>
  </main>
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
