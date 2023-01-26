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
            :class="[
              index == 0 ? 'm-item--active' : '',
              sport.hoverVisible ? 'a': 'b'
            ]"
            @mouseover="sport.hoverVisible = !sport.hoverVisible"
            class="list-group-item m-item"
          >
            <i :class="'icofont-' + lower(sport.name)"></i> {{ sport.name }}
          </li>
        </ul>
      </aside>
      <section class="m-eventDetail">
        <div class="m-tracker" style="background-color: #353a45">
          <h4 class="m-tracker-title">
            <span>Northeast United FC vs Bengaluru FC</span>
          </h4>
          <div class="m-live-wrapper">
            <div class="m-result-wrapper">
              <div class="m-result-title"><span>88' H2</span></div>
              <ul class="m-result-score">
                <li>
                  <div class="m-label"><span>Northeast United FC</span></div>
                  <div class="m-value"><span class="m-value-1">1</span></div>
                </li>
                <li>
                  <div class="m-label"><span>Bengaluru FC</span></div>
                  <div class="m-value"><span class="m-value-1">1</span></div>
                </li>
              </ul>
            </div>
          </div>
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
  vertical-align: top;
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
  /* -webkit-box-sizing: border-box;
  box-sizing: border-box; */
  /* position: relative; */
  /* z-index: 888; */
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

.m-tracker {
  background: #353a45;
  padding: 10px;
  /* -webkit-box-sizing: border-box;
  box-sizing: border-box; */
  margin-bottom: 10px;
}

.m-tracker .m-tracker-title {
  font-size: 24px;
  line-height: 32px;
  font-size: 500;
  color: #fff;
  margin-bottom: 2px;
}

.m-tracker .m-live-wrapper {
    padding: 24px 0 22px;
}

.m-tracker .m-result-wrapper {
  padding: 0 6px;
}
.m-tracker .m-result-title {
    text-align: center;
    font-size: 20px;
    line-height: 27px;
    color: #fff;
    margin-bottom: 13px;
}

ul {
    list-style: none;
}

.m-result-score li {
    display: table;
    /* display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox; */
    display: flex;
    width: 100%;
}

.m-tracker .m-result-score .m-value {
    display: inline-block;
    vertical-align: top;
    height: 55px;
    line-height: 55px;
    color: #fff;
}

.m-tracker .m-result-score .m-label {
    width: 410px;
    background: rgba(234, 236, 239, 0.15);
    font-size: 16px;
    position: relative;
    padding-left: 16px;
    /* -webkit-box-sizing: border-box;
    box-sizing: border-box; */
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}

.m-tracker .m-result-score .m-label {
    display: inline-block;
    vertical-align: top;
    height: 55px;
    line-height: 55px;
    color: #fff;
}

.m-tracker .m-result-score .m-value {
    display: inline-block;
    vertical-align: top;
    height: 55px;
    line-height: 55px;
    color: #fff;
}

.m-tracker .m-result-score .m-value {
    width: 180px;
    background: #0D9737;
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-left: 13px;
    position: relative;
}

.m-tracker .m-result-score .m-label:after {
    content: '';
    position: absolute;
    right: -10px;
    top: 0;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-top: 55px solid rgba(234, 236, 239, 0.15);
    border-right: 10px solid transparent;
}

.m-tracker .m-result-score .m-value:before {
    content: '';
    position: absolute;
    left: -10px;
    top: 0;
    width: 0;
    height: 0;
    vertical-align: middle;
    border-bottom: 55px solid #0D9737;
    border-left: 10px solid transparent;
}

.m-result-score .m-value-1 {
    display: inline-block;
    width: 100%;
}

.m-tracker .m-result-score li:nth-of-type(2) {
    margin-top: 4px;
}

</style>
