<template>
  <main class="win_p_m">
    <!-- 弹层遮罩 -->
    <div class="fl_bg" @click="closeInvite"></div>
    <!-- 邀请好友 -->
    <div class="f_popup_f">
      <div ref="shareDom" class="f_codebox">
        <img
          class=""
          src="../img/blindbox_v2/hb_codebg.jpg"
          style="width: 100%;"
        />
        <div class="f_popup_f_code">
          <div class="code" ref="qrCodeUrl"></div>
          <span
            >The LuckyBabyDoge red envelope award is waiting for you to get it.
            Come to the LuckyBabyDoge community to become my friend and create a
            dream together</span
          >
        </div>
      </div>
      <img v-if="img != ''" class="share_post" :src="img" alt="" />
      <div v-else class="loading">loading<dot>...</dot></div>
      <button
        v-if="img != ''"
        class="cm_popup_clo"
        @click="closeInvite"
      ></button>
    </div>
  </main>
</template>

<script>
import { defineComponent } from "vue";
import { mapState } from "vuex";
import QRCode from "qrcodejs2";
import html2canvas from "html2canvas";

export default defineComponent({
  name: "Friend",
  data() {
    return {
      html2canvas,
      img: "",
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
    //生成海报二维码
    this.creatQrCode();
  },
  methods: {
    closeInvite() {
      this.$emit("closeInvite");
    },
    creatQrCode() {
      let _this = this;
      try {
        new QRCode(_this.$refs.qrCodeUrl, {
          text:
            "https://games.luckybabydoge.com?inviteCode=" +
            _this.user.inviteCode,
          width: 120,
          height: 120,
          colorDark: "#000000",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.H,
        });
        setTimeout(() => {
          this.domToImg();
        }, 1000);
      } catch (e) {
        console.log(e);
      }
    },
    //将dom转成图片
    domToImg() {
      let _this = this;
      this.$nextTick(() => {
        html2canvas(_this.$refs.shareDom).then((resolve) => {
          let imgUrl = resolve.toDataURL("image/png"); //此时就得到了dom元素转成了base64的图片
          _this.img = imgUrl;
          console.log("海报地址--", imgUrl);
        });
      });
    },
  },
});
</script>
<style scoped>
.f_codebox {
  position: fixed;
  left: -500%;
  padding-bottom: 0.3rem;
}
.code {
  align-items: center;
  margin: 0 auto;
}

.share_post {
  width: 80%;
  height: 80%;
  margin: 0 auto;
}
/* 加载动画 */
.loading {
  position: fixed;
  z-index: 12;
  left: 50%;
  top: 50%;
  color: #ffffff;
  font-size: 0.3rem;
  transform: translate(-50%, -50%);
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
