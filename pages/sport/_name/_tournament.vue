<template>
  <div class="m-main m-layout-main">
    <div class="m-table m-main-bottom">
      <div class="row m-table-row">
        <div class="col-2">
          <!-- Some borders are removed <tab-content :data="tab" :sport_name="index"></tab-content> -->
          <div class="card rounded-0 mb-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item sports p-3 d-flex justify-content-between">
                <nuxt-link :to="{name: 'sport-name-period', params:{name:'Soccer',period: 'today'}}" class="text-decoration-none text-dark"
                  >Today's Game</nuxt-link
                >
                <i class="fa fa-chevron-right"></i>
              </li>
              <li class="list-group-item sports p-3 d-flex justify-content-between">
                <nuxt-link :to="{name: 'sport-name-period', params:{name:'Soccer',period: 'upcoming'}}" class="text-decoration-none text-dark"
                  >Upcoming Games</nuxt-link
                >
                <i class="fa fa-chevron-right"></i>
              </li>
            </ul>
          </div>
          <div class="card rounded-0 mb-3">
            <div class="card-body">
              <p class="">Filter by start time</p>
              <input type="range" class="form-range" id="customRange1" />
              <label for="customRange1" class="form-label">Example range</label>
            </div>
          </div>
          <div class="card rounded-0 mb-3">
            <div class="card-body">
              <div class="d-flex justify-content-between">
                <p class="">Odds Filter</p>
                <svg style="width: 20px" viewBox="0 0 20 20">
                  <g
                    id="filter"
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g id="Group-11" transform="translate(2.000000, 3.000000)">
                      <g id="Group-9" transform="translate(0.500000, 0.075269)">
                        <rect
                          id="Rectangle-Copy-29"
                          fill="#353A45"
                          x="5.5"
                          y="10"
                          width="9"
                          height="1.5"
                        ></rect>
                        <circle
                          id="Oval-Copy-2"
                          stroke="#353A45"
                          stroke-width="1.4"
                          cx="3.3"
                          cy="10.8"
                          r="2.1"
                        ></circle>
                        <rect
                          id="Rectangle"
                          fill="#353A45"
                          x="0.5"
                          y="2.25806452"
                          width="9"
                          height="1.5"
                        ></rect>
                        <circle
                          id="Oval"
                          stroke="#353A45"
                          stroke-width="1.4"
                          cx="11.8"
                          cy="3.05806452"
                          r="2.1"
                        ></circle>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div class="dropdown d-none">
                <p class="fw-bold text-success mb-3">1 - <span>Max</span></p>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="20"
                  step="0.1"
                  id="customRange3"
                />
                <div class="d-flex justify-content-between mb-3 text-muted">
                  <span>1</span>
                  <span>Max</span>
                </div>
                <div class="d-flex">
                  <button
                    class="btn btn-sm flex-fill me-1 rounded-1 btn-outline-success"
                  >
                    Clear
                  </button>
                  <button class="btn btn-sm flex-fill rounded-1 btn-success">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card rounded-0">
            <div class="card-body">
              <div class="d-flex justify-content-between mb-2">
                <span>Top Leagues</span>
                <span>9</span>
              </div>
              <div class="d-flex justify-content-between mb-2">
                <span>Championship</span>
                <span>9</span>
              </div>
              <div class="d-flex justify-content-between mb-3">
                <span>England</span>
                <span>9</span>
              </div>
              <span>A - Z</span>
            </div>
          </div>
        </div>
        <div class="col-7 m-table-cell">
          <fixtures
            v-for="(group, index) in fixtures"
            :key="index"
            :tournament_name="index"
            :tournament_group="group"
            :predictions="predictions"
          ></fixtures>
          <div class="d-flex justify-content-center" v-if="loading">
            <div class="no_games text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
          <div class="card import-match" v-if="!fixtures.length && !loading">
            <div
              class="card-body d-flex justify-content-center"
            >
              <div class="no_games text-dark">
                <p>
                  Sorry, there are no games currently available in this
                  category. Please try later. Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="col-3 m-table-cell">
          <betslip></betslip>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Betslip from "~/components/Betslip.vue";
import Highlights from "~/components/Highlights.vue";
import Live from "~/components/Live.vue";
import _ from "lodash";
import Fixtures from "~/components/Fixtures.vue";
export default {
  name: "IndexPage",
  layout: "default",
  components: { Highlights, Betslip, Live, Fixtures },
  data() {
    return {
      fixtures: [],
      loading: false,
      tournament_id: null,
      active_sport_id: '',
      predictions: []
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        // react to route changes...
        this.tournament_id = to.params.tournament.slice(7);
        this.active_sport_id = this.getSportbyName(to.params.name);
        this.getFixtures();
      },
    },
  },
  methods: {
    getFixtures() {
      this.loading = true;
      this.$axios
        .get(
          "/sports/get-fixtures/" +
            this.tournament_id +
            "?sid=" +
            this.active_sport_id +
            "&source=web"
        )
        .then((res) => {
          this.fixtures = _.groupBy(res.data.fixtures, "sport_tournament_name");
          this.predictions = res.data.predictions
          this.loading = false
        });
    },
    groupBy(arr, key) {
      return _.groupBy(arr, key);
    },
  },
  mounted() {
    console.log("/sports/get-fixtures/" +
            this.tournament_id +
            "?sid=" +
            this.active_sport_id +
            "&source=web")
  },
};
</script>
