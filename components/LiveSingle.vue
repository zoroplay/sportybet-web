<template>
  <div>
    <div class="m-main-top">
      <h2 class="fw-bold text-white" style="font-size: 36px">Single View</h2>
    </div>
    <div>
      <aside class="m-side-bar">
        <ul
          class="list-group sports-live__list list-group-flush bg-transparent"
        >
          <li
            v-for="(sport, index) in sport_list_menu"
            :key="index"
            :class="[index == 0 ? 'm-item--active' : '', hover ? 'm-item-on':'']"
            class="list-group-item m-item"
          >
            <i :class="'icofont-' + lower(sport.name)"></i> {{ sport.name }}
          </li>
        </ul>
      </aside>
      <section class="m-eventDetail">
        <div
          class="card rounded-0 shadow-none"
          style="background-color: #353a45"
        >
          <div class="card-body pb-4 px-0 pt-0"></div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "live-single",
  data() {
    return {
      hover: false,
    };
  },
  methods: {
    lower(str) {
      return str.toLowerCase().trim();
    },
  },
};
</script>

<style>
aside.m-side-bar {
  display: inline-block;
  width: 150px;
  background-color: #353a45;
  position: relative;
}

section.m-eventDetail {
  display: inline-block;
  margin-left: 20px;
  width: 575px;
}
.sports-live__list .m-item {
  color: #fff;
  font-size: 14px;
  height: 44px;
  line-height: 44px;
  padding: 0 6px 0 8px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  position: relative;
  z-index: 888;
  background-color: #353a45;
}
.sports-live__list .m-item.m-item--active {
  background-color: #32ce62;
  color: #000;
}
.sports-live__list .m-item.m-item-on {
  background: rgba(50, 206, 98, 0.6);
  color: #000;
}
</style>
