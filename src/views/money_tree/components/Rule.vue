<template>
  <main class="walletbox">
    <!--标题 -->
    <div class="spr_banner_tit">
      <img src="../img/blindbox_v2/logo_d.png" class="spr_banner_tit_dog" />
      <div class="spr_banner_tit_img"></div>
    </div>

    <div class="fission_content ruleguide">
      <div class="rule_content">
        <h2 class="fission_cm_tit">User Guide</h2>
      </div>
    </div>
    <div class="fission_content">
      <div class="rule_content">
        <h4>Issue 1：Ready to use</h4>
        <p>1. TokenPocket app start</p>
        <p>
          1.1 You could download the application using the link in Downloads.
          <a href="https://download.tokenpocket.pro/index.html?new#/" title=""
            >Downloads</a
          >
        </p>
        <p>2. Switching to apply BSC chains</p>
        <p>2.1 Click on the upper left in asset page.</p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
        <p>2.2 Switching to apply BSC chains.</p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>

        <p>3. Homepage of lottery</p>
        <p>
          3.1 Switch to discovery page and search”Cach cow”in the top search
          bar. In case of search result is empty, please copy the link to enter.
          <a href="https://download.tokenpocket.pro/index.html?new#/" title=""
            >https://games.luckydoge.com</a
          >
        </p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
        <p>3.2 Get in the game.</p>
      </div>
    </div>

    <div class="fission_content">
      <div class="rule_content">
        <h4>Issue 2: Win the price</h4>

        <p>4. Recharge</p>
        <p>
          4.1 To win the price, you should first click stake button on the right
          bar to recharge.
        </p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
        <p>4.2 You must use LBD(LuckyBabyDoge) to recharge.</p>

        <p>5. Cash cow</p>
        <p>
          5.1 100Billion LBD are required when you click Lottery Draw Once
          button，at the same time ,of course, you should get your rewards.
        </p>
        <div class="tablelist">
          <ul>
            <li>Super</li>
            <li>100,000Billion</li>
          </ul>
          <ul>
            <li>Top</li>
            <li>10,000Billion</li>
          </ul>
          <ul>
            <li>second</li>
            <li>1,000Billion</li>
          </ul>
          <ul>
            <li>third</li>
            <li>500Billion</li>
          </ul>
          <ul>
            <li>fourt</li>
            <li>200Billion</li>
          </ul>
          <ul>
            <li>fifth</li>
            <li>88Billion</li>
          </ul>
          <ul>
            <li>sixth</li>
            <li>55Billion</li>
          </ul>
          <ul>
            <li>guarantee</li>
            <li>20Billion</li>
          </ul>
        </div>
        <p>6. Withdrawal</p>
        <p>
          6.1 there is no worry for you due to a realtime withdrawal when you
          click unstake button.
        </p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
        <p>7. Balance</p>
        <p>7.1 Click Staked Wallet button to view balance.</p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
      </div>
    </div>

    <div class="fission_content">
      <div class="rule_content">
        <h4>Issue 3: Sharing</h4>
        <p>8. Invite friends</p>
        <p>
          8.1 generating QR code when you click invite friends button, and share
          friends with the QR code.
        </p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
        <p>
          8.2 Or you could copy link when click Copy button，system would copy a
          string like “7c527f……”, and share your friends with the link.
        </p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
        <p>9. friend list</p>
        <p>
          9.1 After inviting and your friend accept the request ，homepage of My
          friends will list your friends.
        </p>
        <div class="rule_content_pic">
          <img
            src="https://luckybabydoge.com/images/eyeglasses-luckybabydoge-p-1080.png"
          />
        </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState, mapGetters } from "vuex";
import { Notify } from "vant";

export default defineComponent({
  name: "GoBack",
  data() {
    return {};
  },
  setup: () => {
    return {};
  },
  computed: {},
  methods: {
    back() {
      try {
        this.$router.go(-1);
      } catch (err) {
        Notify({ type: "danger", message: "返回失败" });
      }
    },
  },
});
</script>
<style scoped></style>
