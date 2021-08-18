<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <h1>{{ activeChainId }}</h1>
  <h2>{{ isSupportChainId }}</h2>
  <button @click="connectWallet" v-if="!account">Connect Wallet</button>
  <span v-else>{{ account }}</span>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore } from "@/store";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  setup: () => {
    const { dispatch } = useStore();
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
