<template>
  <div>
    <div class="m-table-cell m-main-mid" style="width: 765px;">
      <div class="tab-content" id="live-tabContent" style="margin-right: 15px">
        <div class="tab-pane show active" id="nav-multi" role="tabpanel" aria-labelledby="nav-multi-tab" tabindex="0">
          <live-multi :fixtures="fixtures" :loading="loading"></live-multi>
        </div>
        <div class="tab-pane" id="nav-single" role="tabpanel" aria-labelledby="nav-single-tab" tabindex="0">
          <live-single></live-single>
        </div>
      </div>
    </div>
    <div class="m-table-cell m-main-right" style="width: 235px; min-width: 235px; vertical-align: top;">
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
  methods: {
    getLive() {
      this.loading = true;
      this.$axios
        .get("sports/live")
        .then((res) => {
          this.loading = false;
          // this.sports_menu = res.data.data.sports;
          // this.fixtures = res.data.data.fixtures;
          this.$store.dispatch(
            "setCommitActiveSport",
            res.data.data.sports[0].Id
          );
          let groupedBySport  = this.groupLiveSports(res.data.data.fixtures)
          let sports = res.data.data.sports;
          if(sports.length > 0){
            sports.forEach((item, key) => {
                item.Tournaments = []
                item.headers = market_headers.find(sport => sport.id === item.Id);
                groupedBySport.forEach(tournament => {
                    if(tournament.sport_id === item.Id) item.Tournaments.push(tournament);
                })
            });
            // console.log(sports);
            this.fixtures = sports
          }
          console.log(_.groupBy(this.groupLiveSports(res.data.data.fixtures), "sport_name"))
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

