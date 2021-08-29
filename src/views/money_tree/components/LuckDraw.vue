<template>
  <!-- banner -->
  <div class="spr_banner">
    <div class="spr_banner_con">
      <!--标题 -->
      <div class="spr_banner_tit">
        <img src="../img/blindbox_v2/logo_d.png" class="spr_banner_tit_dog" />
        <div class="spr_banner_tit_img"></div>
      </div>

      <!-- 树 -->
      <div class="spr_banner_tree an" :class="{ active1: active }">
        <div class="spr_banner_tree_awards"></div>
        <div class="spr_banner_tree_top" :class="{ active: active }"></div>
        <div class="spr_banner_tree_bottom"></div>
        <div class="spr_banner_tree_award">
          <div class="tree_award_template active" pos="pos11">
            <span class="tree_award_template_tit "></span>
          </div>
          <div class="tree_award_template" pos="pos12">
            <span class="tree_award_template_tit "></span>
          </div>
          <div class="tree_award_template " pos="pos13">
            <span class="tree_award_template_tit sp"></span>
          </div>
          <div class="tree_award_template " pos="pos21">
            <span class="tree_award_template_tit "></span>
          </div>
          <div class="tree_award_template" pos="pos22">
            <span class="tree_award_template_tit "></span>
          </div>
          <div class="tree_award_template" pos="pos23">
            <span class="tree_award_template_tit"></span>
          </div>
        </div>

        <div @click="draw" class="spr_banner_tree_btn">
          <b>6 LBD/每次</b>
          <strong>充值6 LBD代币开启活动</strong>
        </div>
      </div>
    </div>

    <div class="spr_banner_fl">
      <div @click="recharge" class="spr_banner_fl_template gold">
        <span>充值</span>
      </div>
      <div @click="withDrawal" class="spr_banner_fl_template gold">
        <span>提现</span>
      </div>
      <div @click="goPoint" class="spr_banner_fl_template balance">
        <span class="alink_w">我的积分</span>
      </div>
      <div @click="goRecord" class="spr_banner_fl_template record">
        <span class="alink_w">充值提现记录</span>
      </div>
    </div>
    <WinPrizeModel
      v-if="prizeModel"
      :prizePoint="prizePoint"
      @cancel="cancel"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";
import axios from "@/axios";
import WinPrizeModel from "./WinPrizeModel.vue";

//抽奖所需积分
const WITH_POINT = 10 ** 11;
export default defineComponent({
  components: { WinPrizeModel },
  name: "luckDraw",
  data() {
    return {
      active: false,
      prizeModel: false,
      prizePoint: 0, //中奖积分
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
  methods: {
    withDrawal() {
      this.$router.push({ name: "withDrawal" });
    },
    recharge() {
      this.$router.push({ name: "recharge" });
    },
    goPoint() {
      this.$router.push({ name: "point" });
    },
    goRecord() {
      this.$router.push({ name: "record" });
    },
    cancel() {
      this.prizeModel = false;
    },
    //抽奖
    draw() {
      try {
        this.active = true;
        setTimeout(() => {
          this.active = false;
        }, 2000);
        axios
          .post("/api/auth/lottery", {
            wallet: "0xF7a26e486bD1422ad759055D00CfC83Ba4Dd2B48",
            point: WITH_POINT,
          })
          .then((res) => {
            console.log("抽奖成功", res);
            let { data, code } = res;
            if (code == 0) {
              this.prizePoint = data.prizePoint;
              this.prizeModel = true;
            } else {
              Notify({ type: "danger", message: "积分不足" });
            }
          });
      } catch (e) {
        Notify({ type: "danger", message: "接口异常" });
      }
    },
  },
});
</script>
<style scoped>
.active {
  animation: yao 2s cubic-bezier(0.75, 1.39, 0.83, 0.67) infinite;
  animation-fill-mode: forwards;
}
@keyframes yao {
  0% {
    transform: rotate(-3deg);
  }
  12.5% {
    transform: rotate(3deg);
  }
  25% {
    transform: rotate(-3deg);
  }
  35.5% {
    transform: rotate(3deg);
  }
  50% {
    transform: rotate(-3deg);
  }
  62.5% {
    transform: rotate(3deg);
  }
  75% {
    transform: rotate(-3deg);
  }
  87.5% {
    transform: rotate(3deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
.active1::before {
  animation: tst 2500ms 800ms cubic-bezier(0, 0.63, 0.68, 1.13) infinite;
  animation-fill-mode: forwards;
}
@keyframes tst {
  0% {
    background-position: center -7rem;
  }
  100% {
    background-position: center 5rem;
  }
}
</style>
