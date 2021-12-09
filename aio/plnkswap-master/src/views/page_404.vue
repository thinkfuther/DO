<template>
  <main class="page_main">
    <div class="page_errobox">
      <p class="page_erro_tips">⚠️ 404</p>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  components: {},
  name: "Page_404",
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
