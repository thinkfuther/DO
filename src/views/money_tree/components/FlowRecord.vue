<template>
  <!-- 我的邀请 -->
  <div class="record">
    <GoBack />
    <nav class="fission_tab_nav">
      <span
        @click="change(1)"
        class="fission_tab_nav_link"
        :class="{ active: tab == 1 }"
        >充值记录</span
      >
      <span
        @click="change(2)"
        class="fission_tab_nav_link"
        :class="{ active: tab == 2 }"
        >提现记录</span
      >
    </nav>
    <div v-if="isSucc" class="fission_tab_content">
      <div v-if="!isLoading && listData.length == 0" class="tab_no">
        暂无数据
      </div>
      <div v-else>
        <div
          class="fission_tab_row"
          v-for="(item, index) in listData"
          :key="index"
        >
          <div class="fission_tab_flex">
            <b class="txt_del">{{ item.createTime }}</b>
          </div>
          <div class="fission_tab_flex">
            <b class="txt_del"
              >{{ tab == 1 ? "+" : "-" }}{{ item.pointAmount }}</b
            >
          </div>
        </div>
      </div>
    </div>
    <div v-if="isLoading">
      <div class="loading">加载中<dot>...</dot></div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import axios from "@/axios";
import GoBack from "./GoBack.vue";

export default defineComponent({
  components: { GoBack },
  name: "invite",
  data() {
    return {
      tab: 1,
      listData: [],
      isSucc: false,
      isLoading: true,
      page: 1,
    };
  },
  setup: () => {
    return {};
  },
  computed: {
    ...mapState({
      user: "user",
    }),
  },
  created() {
    this.bindScroll();
  },
  mounted() {
    //初始化
    let { tab } = this;
    this.listData = [];
    this.getList(tab);
  },
  methods: {
    change(tab) {
      this.tab = tab;
      this.listData = [];
      this.getList(tab);
    },
    //获取数据
    getList(tab) {
      this.isLoading = true;
      axios
        .get("/api/auth/point/log", {
          wallet: "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48",
          operateType: tab,
          page: this.page,
          size: 20,
        })
        .then((res) => {
          console.log("充值提现记录", res);
          const { data, code } = res.data;
          if (code == 0) {
            this.isSucc = true;
            this.isLoading = false;
            this.listData = this.listData.concat(data);
          } else {
            return Notify({ type: "danger", message: "数据异常" });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    //绑定scroll事件
    bindScroll() {
      window.addEventListener("scroll", this.scrollHande);
    },
    scrollHande() {
      // scroll和input滑动等都是高频率触发事件，所以在写这些事件的时候 尽量加上防抖和节流
      if (this.isLoading) return; // 正在加载的时候，如果滚动时候不请求新数据
      var B = document.documentElement.scrollHeight; //获取html内容的高度
      var H = window.innerHeight; //获取窗口的高度
      var S = document.body.scrollTop || document.documentElement.scrollTop; //滚出去的高度

      if (B - H - S < 60) {
        // 快触底了 请求新数据
        console.log("触底刷新～");
        this.page++;
        this.getList(this.tab);
      }
    },
  },
});
</script>
<style>
.record {
  background: #ffffff;
}
.tab_no {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
  color: #111111;
}
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 0.8rem;
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
