<template>
  <div>
    <div class="card rounded-0 shadow-none mb-4" style="background: #353A45;">
      <div class="card-body p-2">
        <nav>
        <div class="betslip_container nav nav-tabs nav-fill text-center" id="nav-tab" role="tablist">
          <button class="nav-link active" id="nav-betslip-tab" data-bs-toggle="tab" data-bs-target="#nav-betslip" type="button" role="tab" aria-controls="nav-betslip" aria-selected="true">Betslip</button>
          <button class="nav-link" id="nav-cashout-tab" data-bs-toggle="tab" data-bs-target="#nav-cashout" type="button" role="tab" aria-controls="nav-cashout" aria-selected="false">Cashout</button>
        </div>
      </nav>
      <div class="tab-content" id="nav-tabContent">
        <div class="tab-pane active show" id="nav-betslip" role="tabpanel" aria-labelledby="nav-betslip-tab">
          <div class="toggle mt-3 mb-2">
            <span class="active">REAL</span>
            <span>SIM</span>
          </div>
          <div class="card rounded-0">
            <div class="card-body p-0">
              <div v-if="betslip.selections.length > 1" class="remove_all d-flex justify-content-between my-3">
                <span></span>
                <span @click="clearBetslip" class="m-betslip--remove">Remove All</span>
              </div>
              <div class="mt-3 px-2" v-if="betslip.selections.length > 0">
                <div v-for="(bet, index) in betslip.selections" :key="index" class="bet_item py-3 border-bottom">
                  <div class="d-flex flex-row">
                    <div class="form-check me-2">
                      <label class="form-check-label">
                        <input class="form-check-input" name="" id="" type="checkbox" value="checkedValue" aria-label="Text for screen reader">
                      </label>
                    </div>
                    <div class="w-100">
                      <div class="d-flex justify-content-between">
                        <span><span class="pe-2" id="sport_icon">⚽️</span>Home</span>
                        <i class="bi bi-x"></i>
                      </div>
                      <p class="small mb-0">{{ bet.event_name }}</p>
                      <div class="d-flex justify-content-between">
                        <p class="small">{{ bet.market_name }}</p>
                        <h1 class="h5">{{ bet.odds }}</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="divider my-3"></div>
                <div v-if="betslip.selections.length > 1" class="border-bottom">
                  <table class="table table-borderless">
                    <thead>
                      <tr>
                        <th style="width: 33.3%" class="text-start">Type</th>
                        <th style="width: 33.3%" class="text-center">No.</th>
                        <th style="width: 33.3%" class="text-end">Stake(NGN)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                      <td>{{ betslip.bet_type }}</td>
                      <td class="text-center">{{ betslip.selections.length }}</td>
                      <td ><input type="number"
                      @keyup="updateWinnings($event)"
                      :value="betslip.totalStake"
                       style="width:60px; text-align: right"></td>
                    </tr>
                    </tbody>
                  </table>
                </div>
                <div v-else>
                  <div class="d-flex justify-content-between py-3">
                    <span>Total Stake</span>
                    <span>
                      NGN
                      <input type="number"
                      @keyup="updateWinnings($event)"
                      :value="betslip.totalStake"
                      style="width:60px; text-align: right">
                    </span>
                  </div>
                </div>
                <div class="py-3">
                  <div v-if="betslip.selections.length > 1" class="d-flex justify-content-between mb-3">
                    <span>Odds</span>
                    <span>{{ formatNumber(betslip.totalOdds) }}</span>
                  </div>
                  <div v-if="betslip.selections.length > 1" class="d-flex justify-content-between mb-3">
                    <span>Total Stake</span>
                    <span>{{ formatNumber(betslip.totalStake) }}</span>
                  </div>
                  <div v-if="betslip.maxBonus > 0" class="d-flex justify-content-between mb-3">
                    <span>Max. Bonus</span>
                    <span>{{ formatNumber(bet.maxBonus) }}</span>
                  </div>
                  <div class="d-flex justify-content-between mb-3">
                    <span>Potential Win</span>
                    <span>{{ formatNumber(betslip.maxWin) }}</span>
                  </div>
                </div>
                <button class="btn btn-lg rounded-1 btn-success btn-block w-100 mb-2 af-button">Place Bet</button>
                <div class="d-flex justify-content-between mb-3 text-success">
                  <span>Book Bet</span>
                  <span>Print</span>
                </div>
              </div>
              <div v-else class="m-betslip-search">
                <p class="m-text-main mb-2">To place a bet, click on the odds. Or insert a booking code </p>
                <div class="mb-2">
                  <div class="form-group mb-3">
                    <select class="form-select form-select-lg rounded-1" name="" id="">
                      <option></option>
                      <option></option>
                      <option></option>
                    </select>
                  </div>
                  <div class="form-group mb-3">
                    <input type="text" v-model="booking_code" id="" class="form-control form-control-lg rounded-1" placeholder="" aria-describedby="helpId">
                  </div>
                  <button :class="booking_code ? '': 'm-submit--disabled disabled'" class="af-button btn btn-lg rounded-1 btn-success btn-block w-100">Load</button>
                </div>
                <div>
                  <p class="m-text-tips">
                    A booking code enables one to transfer a betslip between different devices.
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
        <div class="tab-pane" id="nav-cashout" role="tabpanel" aria-labelledby="nav-cashout-tab">
          <div class="card-body bg-white mx-3 mt-5 mb-3">
            <h4 class="card-title">Title</h4>
            <p class="card-text">Text</p>
          </div>
        </div>
      </div>
      </div>
    </div>
    <div id="carouselId" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active" data-bs-interval="2000">
          <img class="d-block w-100" src="https://s.sporty.net/ng/main/res/4c41228a398f76a970ac9c6e28c726a9.png" alt="First slide">
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img class="d-block w-100" src="	https://s.sporty.net/ng/main/res/92676595b2c3aab1d458317677955ce8.png" alt="Second slide">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "betslip",
  data(){
    return {
      booking_code: null
    }
  },
  methods:{
    clearBetslip() {
      this.$store.dispatch("coupon/clearBetslip");
    },
    removeSelection(selection) {
      this.$store.dispatch("coupon/removeSelection", selection);
    },
    updateWinnings(e) {
      const val = e.target.value;
      this.$store.dispatch("coupon/updateWinnings", val);
    },
  }
}
</script>

<style>
#nav-tab{
  border: 0;
}
.betslip_container .nav-link{
  text-decoration: none;
  color: white;
  font-size: 16px;
  line-height: 22px;
  padding: 8px 10px 6px;
  border: 0;
}

.betslip_container .nav-link.active{
  background-color: transparent;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  border-radius: 0;
  border-bottom: 3px solid green;
  color: white;
}

#nav-tab .nav-link:not(.nav-link.active):hover{
    border: 0 !important;
}

.toggle{
  border: 1px solid rgb(114, 114, 114);
  /* padding: 6px 0px; */
  border-radius: 25px;
  width: 100px;
  display: flex;
  justify-content: space-between;
}

.toggle span{
  /* height: 20px; */
  border-radius: 10px;
  /* line-height: 20px; */
  padding: 3px 6px;
  color: white;
  letter-spacing: 1.25px;
  font-family: Roboto-Bold;
}

.toggle span.active{
  background-color: green;
}

.m-betslip-search {
    background: #fff;
    padding: 18px 11px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-betslip-search .m-text-tips {
    font-size: 12px;
    line-height: 16px;
    color: #DCDEE5;
}

.af-button {
    width: 100%;
    height: 38px;
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    border: none !important;
    font-size: 14px;
    border-radius: 2px;
}

.m-submit--disabled {
    background: #DCDEE5 !important;
    color: #9CA0AB !important;
    cursor: not-allowed !important;
    pointer-events: none;
    border-color: transparent !important;
}
</style>
