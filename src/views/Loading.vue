<template>
  <div class="ant-spin-nested-loading">
    <div>
      <div class="ant-spin ant-spin-spinning">
        <span class="ant-spin-dot ant-spin-dot-spin"
          ><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i
          ><i class="ant-spin-dot-item"></i><i class="ant-spin-dot-item"></i
        ></span>
      </div>
    </div>
    <div class="ant-spin-container ant-spin-blur">
      <div class="ChunkLoading_container__JJRDV"></div>
    </div>
  </div>
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
<style scoped>
.loading_m {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-size: 0.35rem;
  background: #2096f3;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 0.8rem;
  color: #fff;
}
dot {
  display: inline-block;
  height: 1em;
  line-height: 1;
  text-align: left;
  vertical-align: -0.25em;
  overflow: hidden;
}
dot::before {
  display: block;
  content: "...\A..\A.";
  white-space: pre-wrap;
  animation: dot 1s infinite step-start both;
}
@keyframes dot {
  33% {
    transform: translateY(-2em);
  }
  66% {
    transform: translateY(-1em);
  }
}
</style>
