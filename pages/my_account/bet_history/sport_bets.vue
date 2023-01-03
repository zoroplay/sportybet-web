<template>
  <div class="content d-flex m-sb">
      <div class="" style="width: 615px; min-width: 615px;">
       <div style="margin: 0 16px;">
          <div class="card px-3 py-2 border-0" >
          <ul class="top_nav nav mb-2 border-bottom">
            <li class="nav-item">
              <nuxt-link
                to="/bet_history/sports_bet"
                class="nav-link active"
                aria-current="page"
                >Sport Bets</nuxt-link
              >
            </li>
            <li class="nav-item">
              <nuxt-link to="/bet_history/jackpots" class="nav-link"
                >Jackpots</nuxt-link
              >
            </li>
          </ul>
          <div class="m-wrap">
            <ul class="nav nav-pills py-3">
              <li class="nav-item">
                <a class="nav-link" aria-current="page">All</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" @click="getSettled($event)">Settled</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active">Unsettled</a>
              </li>
            </ul>
          </div>
        </div>
        <div v-for="(bet, index) in bets" :key="index" class="card m-order_list border-0 mb-2">
          <div class="bet_item pt-2 pb-1">
            <span>{{ format(bet.created_at) }}</span>
            <div class="d-flex justify-content-between status p-1" :class="bet.status == 0 ? 'pending': bet.status == 1 ? 'won':bet.status == 2 ? 'lost':''">
              <span class="fw-bold">{{ bet.bet_type }}</span>
              <span class="fw-bold"> {{ bet.status == 0 ? 'Running': bet.status == 1 ? 'Won':bet.status == 2 ? 'Lost':'' }} <i class="ms-2 bi bi-chevron-right"></i></span>
            </div>
            <div class="detail d-flex justify-content-between mt-3">
              <div class="m-order-vs-wrap">
                <div v-if="bet.selections.length > 3">
                  <div v-for="(game,index) in bet.selections.slice(0,3)" :key="index" class="m-order-vs label">
                    <span> {{ game.event }} </span>
                  </div>
                  <span>and {{ bet.selections.slice(2,-1).length }} other matches</span>
                </div>
                <div v-else>
                  <div v-for="(game,index) in bet.selections" :key="index" class="m-order-vs label">
                    <span> {{ game.event }} </span>
                  </div>
                </div>
              </div>
              <div class="m-order-total-stake">
                <div class="total-stake label text-muted small" style="">Total Stake</div>
                <div class="stake label text-end h6">{{ bet.stake }}</div>
              </div>
              <div class="m-order-total-return">
                <div class="total-return label text-muted small">Total Return</div>
                <div class="winnings label text-end h6">{{ bet.winnings }}</div>
              </div>
            </div>
          </div>
        </div>
       </div>
      </div>
      <div class="" style="width: 235px; min-width: 235px;">
        <betslip></betslip>
      </div>
  </div>
</template>

<script>
import Betslip from "~/components/Betslip.vue";
export default {
  components: { Betslip },
  name: "sport_bets",
  layout: "account",
  data(){
    return {
      bets:[]
    }
  },
  methods:{
    getAllBetlist(){

    },
    getPending(){
      this.$axios.get('/user/account/open-bets').then((res)=>{
        this.bets = res.data.bets
      })
    },
    getSettled(e){
      this.bets = []
      // console.log(e.target.classList.add())
      this.$axios.post('/user/account/settled-bets').then((res)=>{
        this.bets = res.data.bets.data
      })
    },
    format(date){
      return this.$moment(date).format('DD/MM/yyyy HH:mm')
    }
  },
  mounted(){
    this.getPending()
  }
};
</script>

<style>
.m-sb .top_nav .nav-item {
  display: inline-block;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-transform: capitalize;
  font-size: 14px;
  margin-right: 12px;
  cursor: pointer;
}

.m-sb .nav-item a {
  text-decoration: none !important;
  color: #000 !important;
}
.m-sb .top_nav .nav-item a.nav-link.active {
  font-weight: bold;
  border-bottom: 3px solid #0d9737;
}

.m-sb .top_nav .nav-item a.nav-link:not(.active):hover {
  border-bottom: 3px solid rgba(13, 151, 55, 0.5);
}

.m-sb .nav.nav-pills .nav-item .nav-link {
  border-radius: 0;
  height: 32px;
  padding: 0 20px;
  margin-right: 4px;
  text-align: center;
  line-height: 32px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  border: 1px solid #eaecef;
  background-color: #fff;
  color: #353a45;
}

.m-sb .nav.nav-pills .nav-item a.nav-link.active {
  background-color: #0d9737;
  color: #fff !important;
}

.m-order_list {
  padding: 0 15px 15px 15px;
  position: relative;
  background-color: #fff;
  margin-top: 3px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}
.bet_item .status span {
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  padding: 0 6px;
}
.status.won {
  background-color: #0d9737;
}
.status.lost {
  background-color: #9ca0ab;
}
.status.pending{
  background-color: #000;
}

.detail .m-order-vs-wrap {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 auto;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 265px;
}

.m-order-total-stake .total-stake.label, .total-return.label{
  font-size: 12px;
  color: #9CA0AB;;
}

.stake, .winnings{
  font-size: 14px;
  line-height: 19px;
  font-weight: bold;
  color: #353A45;
  text-align: right;
}

</style>
