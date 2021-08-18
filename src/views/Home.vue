<template>
  <div class="home">
    <h1>{{ activeChainId }}</h1>
    <h2>{{isSupportChainId}}</h2>
    <h2>{{account}}</h2>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import { useStore } from "@/store";

export default defineComponent({
  name: "Home",
  setup: () => {
    const { state, dispatch, getters } = useStore();
    // dispatch("init");

    return {
      account: computed(() => state.account),
      activeChainId: computed(() => state.activeChainId),
      isSupportChainId: computed(() => getters.isSupportChainId) ,
    };
  },
  components: {
    HelloWorld,
  },
});
</script>
