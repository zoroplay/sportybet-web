<template>
  <div class="m-main m-layout-main">
    <div class="m-table m-main-bottom">
      <div class="row m-table-row">
        <div class="col-2">
          <!-- Some borders are removed <tab-content :data="tab" :sport_name="index"></tab-content> -->
          <div class="card rounded-0 mb-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item p-3">
                <nuxt-link to="/" class="text-decoration-none text-dark"
                  >Today's Game</nuxt-link
                >
              </li>
              <li class="list-group-item p-3">
                <nuxt-link to="/" class="text-decoration-none text-dark"
                  >Upcoming Games</nuxt-link
                >
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
          <fixtures v-for="(group, index) in fixtures" :key="index" :tournament_name="index" :tournament_group="group"></fixtures>
          <div class="d-flex justify-content-center" v-if="loading">
            <div class="no_games text-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
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
import Fixtures from "~/components/Fixtures.vue"
import _ from "lodash";
export default {
  name: "IndexPage",
  layout: "default",
  components: { Highlights, Betslip, Live, Fixtures },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        // react to route changes...
        this.sport = to.params.name;
        this.active_sport_id = this.getSportbyName(to.params.name);
        this.getUpcomingBySport();
      },
    },
  },
  data() {
    return {
      sport: "",
      active_sport_id: 1,
      fixtures: [],
      loading: false,
    };
  },

  methods: {
    getUpcomingBySport() {
      this.loading = true;
      this.$axios
        .get(
          "sports/get-fixtures-by-sport-date?date=" +
            this.start_date +
            "&end_date=" +
            this.end_date +
            "&sid=" +
            this.active_sport_id +
            "&channel=website"
        )
        .then((res) => {
          this.fixtures = _.groupBy(res.data.fixtures, "sport_tournament_name");
          this.loading = false;
        });
    },
  },
  mounted() {},
};
</script>

<style></style>
