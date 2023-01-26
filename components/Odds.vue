<template>
  <div @click="addToBetslip" class="m-outcome text-white" :class="[active == '0' ? 'btn-market--disabled' : 'btn-market--active', size.length % 2 == 0 ? 'btn_odds-2': 'btn_odds-3'] ">
    <i class="fa fa-lock" v-if="active == 0"></i>
    <span class="m-outcome-odds" v-if="active == 1">{{ odds }}</span>
  </div>
</template>

<script>
export default {
  name: "live-odds",
  props:["active", "odds","size"],
  methods:{
    addToBetslip(){
      
    }
  }
};
</script>

<style>
.btn-market--active{
  background-color: #0D9737;
  color: white;
}

.btn-market--active:hover{
  background-color: #32CE62;
}

.btn-market--disabled{
  background: #50545E !important;
  color: #9CA0AB;
}
.btn_odds.btn_odds-3{
  width: calc(100% / 3);
}

.btn_odds.btn_odds-2{
  width: calc(100% / 2);
}

.btn_odds:not(:last-child){
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.btn_odds{
  border-right: .5px;
}

.btn_odds:not(:first-child){
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>
