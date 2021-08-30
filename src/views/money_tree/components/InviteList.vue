<template>
  <!-- 我的邀请 -->
  <div class="fission_content">
    <nav class="fission_tab_nav">
      <span class="fission_tab_nav_link">My friends</span>
    </nav>
    <div class="fission_tab_content">
      <div v-if="friends.length > 0">
        <div class="fission_tab_row" v-for="(item, idx) in friends" :key="idx">
          <div class="fission_tab_flex">
            <b class="txt_del">{{ item.createTime }}</b>
          </div>
          <div class="fission_tab_flex">
            <b class="txt_del">{{ item.userName }}</b>
          </div>
        </div>
      </div>
      <div v-else class="no_friend">no-data</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import axios from "@/axios";

export default defineComponent({
  name: "invite",
  data() {
    return {
      friends: [],
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
  mounted() {
    this.init();
  },
  methods: {
    //初始化
    init() {
      axios
        .get("/auth/invite/list", {
          wallet: "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48",
        })
        .then((res) => {
          console.log("邀请记录", res);
          const { data, code } = res.data;
          if (code == 0) {
            this.friends = data;
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
.no_friend {
  min-height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.3rem;
  color: #111111;
}
</style>
