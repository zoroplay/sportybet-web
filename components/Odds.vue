<template>
  <button type="button" class="btn btn_odds px-2 py-2 text-white" :class="[active == '0' ? 'btn-market--disabled' : 'btn-market--active'] ">
    <i class="fa fa-lock" v-if="active == 0"></i>
    <span v-if="active == 1">{{ odds }}</span>
  </button>
</template>

<script>
export default {
  name: "live-odds",
  props:["active", "odds","size"]
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
