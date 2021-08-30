<template>
  <main class="walletbox">
    <div class="banner_zt_dog_img">
      <img src="./money_tree/img/flydoge.png" class="banner_zt_dog" />
      <div class=""></div>
    </div>
    <div class="banner_zt_num">404</div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";

export default defineComponent({
  components: {},
  name: "Loading",
  data() {
    return {};
  },
  setup: () => {
    return {};
  },
  methods: {},
});
</script>

<style>
.banner_zt_dog {
  width: 100%;
  margin: 0 auto;
  display: inline-block;
}
.banner_zt_dog_img {
  text-align: center;
  margin: 35% auto 0.3rem;
  animation: dog_ztAn 500ms alternate infinite;
}
.banner_zt_num {
  text-align: center;
  color: #fff;
  font-size: 1.5rem;
}
@keyframes dog_ztAn {
  from {
    transform: translate(-0.06rem, 0.1rem);
  }
  to {
    transform: translate(0, 0);
  }
}
</style>
