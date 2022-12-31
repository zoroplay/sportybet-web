<template>
  <div>
    <div class="m-table-cell m-main-mid" style="width: 765px;">
      <div class="tab-content" id="live-tabContent" style="margin-right: 15px">
        <div class="tab-pane show active" id="nav-multi" role="tabpanel" aria-labelledby="nav-multi-tab" tabindex="0">
          <live-multi :fixtures="fixtures" :loading="loading" :sports_menu="sports_menu"></live-multi>
        </div>
        <div class="tab-pane" id="nav-single" role="tabpanel" aria-labelledby="nav-single-tab" tabindex="0">
          <live-single></live-single>
        </div>
      </div>
    </div>
    <div class="m-table-cell m-main-right" style="width: 235px; min-width: 235px;">
      <Betslip />
    </div>
  </div>

</template>

<script>
import Betslip from "~/components/Betslip.vue";
import market_headers from "~/plugins/constants"
import _ from "lodash";
import LiveMulti from '~/components/LiveMulti.vue';
import LiveSingle from '~/components/LiveSingle.vue';
export default {
  components: { Betslip, LiveMulti, LiveSingle },
  name: "IndexPage",
  layout: "live",
  data() {
    return {
      // headers:'',
      sports_menu: [],
      loading: false,
      fixtures: [],
      tournaments: [],
      more_active_sport: "More Sports",
      show_more_sports: false,
    };
  },
  // computed: {
  //   games() {
  //     let sport_id = this.$store.state.sport_id;
  //     let filteredData = this.fixtures.filter((x) => x.sport_id == sport_id);
  //     return _.groupBy(filteredData, "sport_category_name");
  //   },
  //   headers(){
  //     let sport_id = this.$store.state.sport_id;
  //     return market_headers.filter((x) => x.id == sport_id)
  //   }
  // },
  methods: {
    getLive() {
      this.loading = true;
      this.$axios
        .get("sports/live")
        .then((res) => {
          this.loading = false;
          this.sports_menu = res.data.data.sports;
          this.fixtures = res.data.data.fixtures;
          this.$store.dispatch(
            "setCommitActiveSport",
            res.data.data.sports[0].Id
          );
        })
        .catch((error) => {
          this.loading = false;
          this.error = error.message;
        });
    },
  },

  mounted() {
    this.getLive();
  },
};
</script>

<style>
.sports-tabs__list .nav-link,
.sports-tabs__list .nav-link.active {
  line-height: 37px !important;
}

.dropdown .select_dropdown {
  position: absolute;
  z-index: 1000;
  /* width: 121px; */
  border: solid 1px rgba(234, 236, 239, 0.15);
  border-radius: 2px;
  background-color: #353a45;
  top: 0;
  /* right: 0 */
}

.select_dropdown .dropdown-item {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  line-height: 48px;
  height: 48px;
  padding: 0 10px;
  cursor: pointer;
  color: white;
  font-size: 14px;
  text-decoration: none;
}

.select_dropdown .dropdown-item:not(:first-of-type):hover {
  background-color: #0d9737;
  text-decoration: none;
}

.m-main .m-main-top .home-top .first-part-wrap {
  background-color: #1b1e25;
}
.m-main .m-main-top .home-top .first-part {
  background-color: #1b1e25;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0 auto;
  min-width: 1000px;
  padding: 5px 0;
  position: relative;
  width: 1000px;
}

.m-main .m-main-top .home-top .top-main {
  min-width: 1000px;
  overflow: hidden;
  width: 1000px;
}

.m-main .m-main-top .home-top .first-part .popular {
  color: #fff;
  display: inline-block;
  height: 254px;
  text-align: left;
  vertical-align: top;
  width: 238px;
}

.m-main .m-main-top .home-top .first-part .popular .popular-text {
  font-size: 20px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}

.m-main .m-main-top .home-top .first-part .popular .popular-list {
  height: 199px;
  width: 200px;
}

</style>
