<template>
  <main class="walletbox">
    <go-back />

    <div class="fission_content">
      <div class="fission_gold">
        <b class="fission_gold_tit">Staked wallet</b>
        <span v-if="userPointBalance !== ''" class="fission_gold_num"
          >{{ userPointBalance }}<small>LBD</small></span
        >
        <span v-else class="loading">loading<dot>...</dot></span>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import GoBack from "./GoBack.vue";
import axios from "@/axios";

export default defineComponent({
  components: { GoBack },
  name: "Point",
  data() {
    return {
      userPointBalance: "",
    };
  },
  setup: () => {
    return {};
  },
  computed: {
    ...mapState({
      user: "user",
      account: "account",
    }),
  },
  mounted() {
    this.init();
  },
  methods: {
    //初始化
    init() {
      axios
        .get("/auth/user", {
          wallet: this.account,
        })
        .then((res) => {
          const { data, code } = res.data;
          if (code == 0) {
            this.userPointBalance = data.userPointBalance;
          } else {
            return Notify({ type: "danger", message: "数据异常" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
</script>
<style>
.m_t {
  margin-top: 0.3rem;
}
/* 加载动画 */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 0.8rem;
  font-size: 0.3rem;
  color: #ffffff;
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
