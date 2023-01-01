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

