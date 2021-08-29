<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useStore } from "@/store";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  setup: () => {
    const { dispatch,commit } = useStore();
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
html,body{
  background-color: #f6f6f6;
}
#app{
  width: 100%;
  min-height: 100vh;
}
.head {
  height: 65px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
}
</style>
