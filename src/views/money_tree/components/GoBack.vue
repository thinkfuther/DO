<template>
  <main class="go_back">
    <div class="fixed" @click="back"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";

export default defineComponent({
  name: "GoBack",
  data() {
    return {};
  },
  setup: () => {
    return {};
  },
  computed: {},
  methods: {
    back() {
      try {
        this.$router.go(-1);
      } catch (err) {
        Notify({ type: "danger", message: "返回失败" });
      }
    },
  },
});
</script>
<style scoped>
.go_back {
  width: 100%;
  height: 1rem;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 999;
}
.go_back .fixed {
  width: 0.5rem;
  height: 0.5rem;
  background: url(../img/back.png) center / contain no-repeat;
}
</style>
