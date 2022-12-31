<template>
  <div>
    <div id="j_page_header" class="s-header">
      <div class="m-top-wrapper">
        <div class="m-nav-wrapper">
          <div class="m-logo-bar">
            <div class="m-login-bar">
              <div v-if="$auth.loggedIn" class="m-info on">
                <div class="m-bablance-wrapper">
                  <span id="j_balance" class="m-text m-balance">NGN<span v-if="showBalance">{{ user.balance }}</span><span v-else id="j_balance" class="m-text m-balance mx-0">******</span>
                  </span>
                  <i style="font-size: 14px" @click="toggleBalance" class="bi text-white me-2" :class="{ 'bi-eye-fill': showBalance, 'bi-eye-slash-fill': !showBalance }"></i
                  ><i style="font-size: 14px" class="bi bi-arrow-clockwise text-white"></i>
                </div>
                <nuxt-link to="/my_account/deposit" class="m-text m-deposit"
                  ><span data-cms-key="deposit" data-cms-page="common_functions"
                    >Deposit</span
                  ></nuxt-link
                >
                <div id="j_betHistory" class="m-text m-history">
                  <nuxt-link
                    to="/my_account/bet_history/sport_bets"
                    ><span
                      data-cms-key="bet_history"
                      data-cms-page="common_functions"
                      >Bet History</span
                    ></nuxt-link
                  >
                  <div class="tips-wrapper"></div>
                </div>
                <div id="j_userInfo" class="dropdown m-text m-userInfo m-userInfo-fix">
                  <a
                    class="text-white dropdown-toggle btn-link text-decoration-none"
                    type="button"
                    aria-expanded="false"
                    id="triggerId"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    >My Account</a
                  >
                  <div class="dropdown-menu rounded-0" aria-labelledby="triggerId">
                    <a class="dropdown-item py-0" to="/my_account/gifts">Gifts</a>
                    <a class="dropdown-item py-0" to="/my_account/bet_history">Bet History</a>
                    <a class="dropdown-item py-0" to="/my_account/deposit">Deposits</a>
                    <a class="dropdown-item py-0" to="/my_account/withdraw">Withdraw</a>
                    <a class="dropdown-item py-0" to="/my_account/transactions">Transactions</a>
                    <a class="dropdown-item py-0" to="/my_account/">My Account Info</a>
                    <a class="dropdown-item py-0" to="/my_account/">Safety and Security</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item text-danger py-0" @click="logout">Logout</a>
                  </div>
                </div>
              </div>
              <div v-else class="m-opt">
                <div class="m-error-toast"></div>
                <div class="m-phone-wrapper">
                  <div class="m-phone">
                    <span>+234 </span
                    ><input
                      type="text"
                      name="phone"
                      v-model="formData.username"
                      autocomplete="off"
                      placeholder="Mobile Number"
                      class="fs-exclude data-hj-suppress"
                    />
                  </div>
                  <div class="m-error-wrapper"></div>
                </div>
                <div class="m-psd-wrapper">
                  <div class="m-psd">
                    <input
                      type="password"
                      name="psd"
                      v-model="formData.password"
                      autocomplete="off"
                      placeholder="Password"
                      plass="fs-exclude data-hj-suppress"
                    />
                    <button
                      @click.prevent="loginUser"
                      type="button"
                      name="logIn"
                      class="m-btn m-btn-login"
                    >
                      Login
                    </button>
                  </div>
                  <div class="m-error-wrapper"></div>
                </div>
                <button
                  type="button"
                  name="register"
                  class="m-btn m-btn-register"
                  data-cms-key="register"
                  data-cms-page="common_functions"
                >
                  Register
                </button>
                <div class="m-operation">
                  <nuxt-link to="/profile/reset_password" class="m-forgetPsd"
                    ><span
                      data-cms-key="forgot_password"
                      data-cms-page="common_functions"
                      >Forgot Password</span
                    >?</nuxt-link
                  ><span
                    class="m-activate"
                    data-cms-key="deactivate_reactivate"
                    data-cms-page="page_deactivate"
                    >Deactivate / Reactivate</span
                  >
                </div>
              </div>
            </div>
            <div class="m-left">
              <nuxt-link to="/" class="m-logo-wrapper">
                <div class="m-image-wrapper">
                  <img
                    src="~/assets/img/logo.png"
                    alt="Sportybet"
                    class="m-img m-img--logo"
                  />
                </div>
              </nuxt-link>
              <!---->
            </div>
          </div>
          <div class="m-nav-main m-header-item">
            <a class="m-image-wrapper"
              ><img
                src="//s.sporty.net/main/modules/main/desktop/common/core/image/shortLogo.e62322c232.png"
            /></a>
            <nav id="topHeader" class="m-flex">
              <nuxt-link
                to="/"
                id="header_nav_sports"
                href="/"
                data-sportsid=""
                data-path=""
                class="m-flex-item"
                :class="sportsRoute ? 'm-flex-item--active':''"
                ><span data-cms-key="sports" data-cms-page="common_functions"
                  >Sports</span
                >
                <!---->
              </nuxt-link>
              <nuxt-link
                to="/sport/live"
                id="header_nav_liveBetting"
                class="m-flex-item"
                ><span>Live Betting</span>
                <!---->
              </nuxt-link>
              <nuxt-link
                to="/scheduled-virtuals"
                id="header_nav_instantVirtuals"
                class="m-flex-item"
                style="display: inherit"
                ><span
                  >Instant Virtuals</span
                >
                <!---->
              </nuxt-link>
              <nuxt-link
                to="/virtuals"
                id="header_nav_virtuals"
                href="/virtual/"
                data-sportsid=""
                data-path=""
                class="m-flex-item"
                style="display: inherit"
                ><span
                  data-cms-key="scheduled_virtuals"
                  data-cms-page="common_functions"
                  >Scheduled Virtuals</span
                >
                <!---->
              </nuxt-link>
              <nuxt-link
                to="/jp"
                id="header_nav_jackpot"
                href="/jackpot/"
                data-sportsid=""
                data-path=""
                class="m-flex-item"
                ><span data-cms-key="jackpot" data-cms-page="common_functions"
                  >Jackpot</span
                >
                <!---->
              </nuxt-link>
              <nuxt-link
                to="/livescore"
                id="header_nav_Livescore"
                href="https://livescore.sportybet.com/"
                target="_blank"
                data-sportsid=""
                data-path=""
                class="m-flex-item"
                ><span data-cms-key="livescore" data-cms-page="common_functions"
                  >Livescore</span
                >
                <!---->
              </nuxt-link>
              <nuxt-link
                to="/res"
                id="header_nav_results"
                href="/liveResult/"
                data-sportsid=""
                data-path=""
                class="m-flex-item"
                ><span
                  data-cms-key="live_results"
                  data-cms-page="common_functions"
                  >Results</span
                >
                <!---->
              </nuxt-link>
              <nuxt-link
                to="/promotions"
                id="header_nav_promotions"
                href="/promotions/"
                data-sportsid=""
                data-path=""
                class="m-flex-item"
                ><span
                  data-cms-key="promotions"
                  data-cms-page="common_functions"
                  >Promotions</span
                >
                <!---->
              </nuxt-link>
            </nav>
            <div id="j_timezone" class="m-timezone">GMT+01:00</div>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import sportsList from './sportsList.vue';
export default {
  components: { sportsList },
  name: "page-header",
  data() {
    return {
      formData: {
        username: "",
        password: "",
      },
      showError: false,
      errorMsg: "",
      loading: false,
      showBalance: true,
    };
  },
  computed:{
    sportsRoute(){
      if($nuxt.$route.name === 'sport-name' || $nuxt.$route.name === 'sport-name-period'){
        return true;
      }
      return false;
    }
  },
  methods: {
    async loginUser() {
      await this.$auth
        .loginWith("local", { data: this.formData })
        .then(async (res) => {
          // const data = res.data.data.user
          // this.$auth.setUser(data)
          // this.$auth.$storage.setUniversal('user', data, true)
          this.$router.push("/");
        })
        .catch((error) => {
          $("#loginBtn").text("Login").attr("disabled", false);
          this.error = true;
          console.log(error);
        });
    },
    toggleBalance() {
      this.showBalance = !this.showBalance;
    },
    async logout() {
        await this.$auth.logout();
        this.$auth.$storage.removeCookie('auth.user',true)
    },
  },
};
</script>

<style></style>
