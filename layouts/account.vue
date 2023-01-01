<template>
  <div class="s-page">
    <div class="header">
      <page-header></page-header>
    </div>
    <div class="m-main m-layout-main">
      <div class="m-main-top"></div>
      <div class="m-table m-main-bottom">
        <div class="row">
          <div class="col-2 px-0" style="width: 150px">
            <div class="card mb-3 m-user-info">
              <div class="card-header d-flex bg-black rounded-0">
                <div class="d-inline m-user-img">
                  <img src="https://s.sporty.net/common/avatar/30.png" alt="">
                </div>
                <div class="d-flex flex-column m-user-det">
                  <em :title="user.details.first_name+ ' '+user.details.last_name" class="text-truncate">{{ user.details.first_name+ ' '+user.details.last_name }}</em>
                  <small>{{ user.details.phone_number }}</small>
                </div>
              </div>
              <div class="card-body">
                <p class="card-text">Balance</p>
                <h5 class="card-title">{{ 'NGN'+user.balance }}</h5>
              </div>
            </div>
            <div class="card mb-3">
              <div class="account list-group list-group-flush">
                <!-- <li v-for="(list, index) in menu" :key="index" class="list-group-item px-3 border-bottom-0"> -->
                  <nuxt-link v-for="(list, index) in menu" :key="index" :to="list.url" class="list-group-item list-group-item-action text-decoration-none text-dark border-0 py-2 rounded-0">
                    <div class="d-flex justify-content-between">
                      <span>{{ list.name }}</span>
                      <i class="bi bi-chevron-right"></i>
                    </div>
                  </nuxt-link>
                  <!-- <a href="#" class="list-group-item list-group-item-action">A second link item</a> -->
                <!-- </li> -->
              </div>
            </div>
          </div>
          <div class="col-10 px-0" style="width: 850px">
            <nuxt/>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'
export default {
  components: { PageHeader, PageFooter },
  data(){
    return {
      menu:[
        {
          name: "Gifts",
          url: '/my_account/gifts'
        },
        {
          name: "Bet History",
          url: '/my_account/bet_history/sport_bets'
        },
        {
          name: "Deposit",
          url: '/my_account/deposit'
        },
        {
          name: "Withdraw",
          url: '/my_account/withdraw'
        },
        {
          name: "Transactions",
          url: '/my_account/transactions'
        },
        {
          name: "My Account Info",
          url: '/my_account/my_account_info'
        },
        {
          name: "Safety & Security",
          url: '/my_account/safety_security'
        }
      ]
    }
  }

}
</script>

<style>
.m-user-info .m-user-img img {
    border-radius: 31px;
    height: 31px;
    margin-right: 8px;
    overflow: hidden;
    width: 31px;
}
.m-user-info .m-user-det {
    color: #fff;
    font-size: 10px;
    line-height: 1.3;
    width: 95px;
}

.m-user-info .m-user-det em {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: block;
    font-size: 14px;
}

.list-group-item.nuxt-link-exact-active.nuxt-link-active{
  background-color: #0D9737;
  color: white !important;
}

.account.list-group-item:hover{
  background-color: #32CE62;
  color: #fff !important;
}
</style>
