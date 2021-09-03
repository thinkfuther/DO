<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  setup: () => {
    const { dispatch, commit } = useStore();
    dispatch("init");
    return {};
  },
  computed: {
    ...mapState(["account", "activeChainId"]),
    ...mapGetters(["isSupportChainId"]),
  },
  methods: {
    ...mapActions(["connectWallet"]),
  },
});
</script>

<style>
#app {
  width: 100%;
  min-height: 100vh;
}
</style>
