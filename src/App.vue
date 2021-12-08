<template>
  <main>
    <div v-if="isfailed">
      <Loading />
    </div>
    <div v-else>
      <router-view />
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters, mapState } from "vuex";
import Loading from "./views/Loading.vue";

export default defineComponent({
  setup: () => {
    return {};
  },
  components: { Loading },

  computed: {
    ...mapGetters(["isSupportChainId"]),
    ...mapState(["isfailed"]),
  },
  methods: {},
});
</script>

<style>
.loading {
  margin-top: 0.6rem;
}
.van-skeleton__row,
.van-skeleton__title {
  background: #046a38 !important;
}
.van-tabbar-item--active {
  color: #046a38 !important;
  background: #f5f7f9 !important;
}
.van-tabbar {
  background: #f5f7f9 !important;
}
</style>
