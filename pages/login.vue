<template>
  <div class="c_page-container">
    <div class="c_wrapper">
      <div class="c_login-card">
        <tabs>
          <tab title="Register">
            <form action="">
              <div class="form-group">
                <input type="text">
              </div>
              <div class="form-group">
                <input type="text">
              </div>
              <button class="btn btn-dark">Create New Account</button>
            </form>
          </tab>
          <tab title="Login">
            <form action="">
              <div class="form-group">
                <input type="text">
              </div>
              <div class="form-group">
                <input type="text">
              </div>
              <button>Login to your Account</button>
            </form>
          </tab>
        </tabs>
      </div>
    </div>
  </div>
</template>

<script>
import Tab from '~/components/Tab.vue';
import Tabs from '~/components/Tabs.vue';
export default {
  components: { Tab, Tabs },
  name: "login",
  layout: "main",
  data () {
      return {
          isActive: true,
          tabs: [],
      }
  },
  methods:{
    selectTab(){

    }
  },
  created() {
    this.tabs = this.$children;
  },
};
</script>

<style>
.c_page-container {
  background-color: #e9ecef;
  height: 100vh;
}

.c_wrapper {
  background: url(//s.sporty.net/ng/main/modules/main/desktop/login/image/loginBg.260a4adc08.png)
    no-repeat left top;
  background-size: cover;
  width: 1000px;
  margin: 0 auto;
  height: 564px;
  padding: 63px 0 61px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

.c_login-card {
  width: 462px;
  background: #fff;
  /* display: inline-block; */
  float: right;
}

.card__tabs ul{
  display: flex;
  justify-content: space-between;
}

.c_login-card .login-card-header{
  padding: 32px 48px 25px;
  box-sizing: border-box;
  border-bottom: 1px solid #EAECEF;
}

.c_login-card .login-card-body{
  box-sizing: border-box;
  padding: 36px 62px 0 62px;
  text-align: left;
}


.card__tabs ul li{
  font-size: 24px;
  color: #000;
  padding: 0 !important;
  height: 38px;
  line-height: 38px;
}

.c_login-card .login-card-body .form-group input {
  border: 1px solid #B4B4B4;
  border-radius: 0px;
  font-size: 14px;
  height: 54px;
  width: 100%;
  /* padding-left: 18px; */
}

.c_login-card .login-card-body .form-group:first-child input {
  border-top: 1px solid #B4B4B4;
  border-right: 1px solid #B4B4B4;
  border-left: 1px solid #B4B4B4;
  border-bottom: 0px;
}

.c_login-card .login-card-body button{
  width: 100%;
  background-color: #0C7C59;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  margin: 20px 0;
}

.c_login-card .login-card-body {
  padding-bottom: 30px;
}
</style>
