<template>
  <div class="m-main m-layout-main">
    <div class="m-table m-main-bottom">
      <div class="row m-table-row">
        <div class="col-2">
          <!-- Some borders are removed <tab-content :data="tab" :sport_name="index"></tab-content> -->
          <div class="card rounded-0 mb-3">
            <ul class="list-group list-group-flush">
              <li class="list-group-item sports p-3">
                <nuxt-link to="/" class="text-decoration-none text-dark"
                  >Today's Game</nuxt-link
                >
              </li>
              <li class="list-group-item sports p-3">
                <nuxt-link to="/" class="text-decoration-none text-dark"
                  >Upcoming Games</nuxt-link
                >
              </li>
              <li class="list-group-item sports p-3">
                <nuxt-link to="/" class="text-decoration-none text-dark"
                  >Outrights</nuxt-link
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
          <div class="mb-4">
            <nuxt-link :to="{ name: 'sport-name', params: { name: sport } }">
              {{ sport }} /
            </nuxt-link>
            {{ details.sport_tournament_name }}
          </div>
          <div v-if="!loading" class="card">
            <div class="card-body">
              <p class="m-t-info mb-2">
                <span class="game-time me-3"
                  >{{ formatDate(details.event_date) }} {{ details.event_time }}
                </span>
                <span class="live-in-play me-3"> Live In-Play Available </span>
                <span class="event-id"> ID:{{ details.id }}</span>
              </p>
              <div class="league-title px-0">
                {{ details.event_name }}
              </div>
              <div
                class="card-body text-start px-0 border-bottom py-1"
                v-for="(i, o) in details.markets"
                :key="o"
              >
                <div class="m-table-wrapper">
                  <div class="league-title">
                    <span class="dis-icon">
                      <i class="bi bi-caret-down-fill"></i>
                    </span>
                    <span style="font-size: 14px">{{ i.market_name }}</span>
                  </div>
                  <div class="m-table">
                    <div class="m-table-ro m-outcome">
                      <div
                        v-for="(outcome, y) in i.selections"
                        :key="y"
                        class="m-table-cell m-table-cell--responsive mb-2"
                        @click="add(i, outcome)"
                        :class="
                          isSelected(
                            createID(
                              details.provider_id,
                              i.market_id,
                              outcome.name,
                              outcome.id
                            ),
                            betslip
                          )
                            ? '.m-table-cell--checked'
                            : ''
                        "
                        :style="
                          i.selections.length % 2 === 0
                            ? 'width: calc(50% - 8px)'
                            : 'width: calc(33.33333% - 8px)'
                        "
                      >
                        <span class="m-table-cell-item">{{ outcome.name }}</span
                        ><span class="m-table-cell-item">{{
                          outcome.odds
                        }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
import Live from "~/components/Live.vue";
import _ from "lodash";
export default {
  name: "match",
  layout: "default",
  components: { Betslip, Live },
  data() {
    return {
      event_id: "",
      sport: "",
      details: {},
      loading: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.sport = to.params.name;
        this.event_id = to.params.id; //this.baseConverter(to.params.game_id, 36, 10);
        this.live = to.params.status === "live";
        this.getMatch();
      },
    },
  },
  computed: {
    betslip() {
      return this.$store.state.coupon.betslip;
    },
  },
  methods: {
    getMatch() {
      this.loading = true;
      this.$axios
        .get(`/sports/get-fixture/${this.event_id}`)
        .then((res) => {
          this.details = res.data.data;
          this.loading = false;
        })
        .catch((error) => {
          this.loading = false;
          console.log(error);
        });
    },
    add(market, outcome) {
      const data = {
        fixture: this.details,
        market_id: market.market_id,
        market_name: market.market_name,
        odds: outcome.odds,
        odd_id: outcome.id,
        odd_name: outcome.name,
        ele_id: this.createID(
          this.details.provider_id,
          market.market_id,
          outcome.name,
          outcome.id
        ),
        fixture_type: this.details.fixture_type,
      };
      this.$store.dispatch("addToCoupon", data);
    },
    sort: function (arr) {
      return arr.slice().sort(function (a, b) {
        return a.id - b.id;
      });
    },
  },
};
</script>

<style>
.m-outcome .m-table-cell--checked {
    background: #33EA6A;
    color: #1B1E25;
}
</style>
