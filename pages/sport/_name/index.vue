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
          <div
            v-if="!loading"
            v-for="(group, index) in fixtures"
            :key="index"
            class="card rounded-0 shadow-none mb-4"
          >
            <div class="card-body">
              <div
                role="button"
                class="start"
                @click="hide('sdsdsds' + index, $event)"
              >
                <div class="league-title">
                  <span class="dis-icon">
                    <i class="bi bi-caret-down-fill"></i>
                  </span>
                  {{ index }}
                </div>
              </div>
              <div class="events-list">
                <div
                  v-for="(event, s) in groupBy(group, 'event_date')"
                  :key="s"
                  class="pt-2"
                >
                  <div class="m-table-row date-row">
                    <div class="m-table-cell date">{{ formatDate(s) }}</div>
                    <div class="m-table-cell each-module-wrap">
                      <div class="each-module-table two-markets">
                        <div class="each-module">1</div>
                        <div class="each-module">X</div>
                        <div class="each-module">2</div>
                      </div>
                      <div class="each-module-table two-markets">
                        <div class="each-module">1X</div>
                        <div class="each-module">12</div>
                        <div class="each-module">X2</div>
                      </div>
                    </div>
                    <div class="print-element p-table-th" style="display: none">
                      <div class="id">ID</div>
                      <div class="time">Time</div>
                      <div class="event">Event</div>
                    </div>
                    <div class="m-table-cell empty-cell"></div>
                  </div>

                  <!-- Game rows -->
                  <div
                    v-for="(game, g) in event"
                    :key="g"
                    class="m-table-row m-match-row"
                    @click="toMatch(game)"
                  >

                      <div class="m-left-content">
                        <div
                          class="m-table-cell m-left-team-cell"
                          style="width: 258px"
                        >
                          <div class="left-team-table">
                            <div class="time">
                              <div class="clock-time">{{ game.event_time }}</div>
                              <div class="text-nowrap game-id">
                                ID: {{ game.id }}
                              </div>
                            </div>
                            <div class="teams">
                              <div>{{ game.team_a }}</div>
                              <div>{{ game.team_b }}</div>
                            </div>
                            <div class="lmt-icon"><em class="icon"></em></div>
                          </div>
                        </div>
                      </div>
                      <div
                        class="m-table-cell market-cell two-markets"
                        style="width: 280px; vertical-align: middle"
                      >
                        <div
                          v-if="game.odds.length"
                          class="m-market"
                          aria-label="Basic example"
                        >
                          <div
                            v-for="(odds, o) in game.odds.slice(0, 3)"
                            :key="o"
                            class="m-outcome"
                          >
                            <span class="m-outcome-odds">{{ odds.odds }}</span>
                          </div>
                        </div>
                        <div
                          v-if="game.odds.length"
                          class="m-market"
                          aria-label="Basic example"
                        >
                          <div
                            v-if="game.odds.length > 6"
                            v-for="(odds, o) in game.odds.slice(5)"
                            :key="o"
                            class="m-outcome"
                          >
                            <span class="m-outcome-odds">{{ odds.odds }}</span>
                          </div>
                          <div
                            v-if="game.odds.length <= 6"
                            v-for="(odds, v) in game.odds.slice(3, 6)"
                            :key="v"
                            class="m-outcome"
                          >
                            <span class="m-outcome-odds">{{ odds.odds }}</span>
                          </div>
                        </div>
                        <div v-if="game.odds.length == 0" class="m-market market w-100">
                          <!---->
                          <div class="m-outcome m-outcome--disabled">
                            <span class="m-outcome-odds">
                              <i class="fa fa-lock"></i>
                            </span>
                          </div>
                          <div class="m-outcome m-outcome--disabled">
                            <span class="m-outcome-odds">
                              <i class="fa fa-lock"></i>
                            </span>
                          </div>
                          <div class="m-outcome m-outcome--disabled">
                            <span class="m-outcome-odds">
                              <i class="fa fa-lock"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        class="m-table-cell market-size py-1 px-2 text-center"
                        style="width: 55px; vertical-align: middle"
                      >
                        <nuxt-link
                          class="text-decoration-none text-dark text-nowrap"
                          to=""
                          >+{{ game.markets_count }}
                          <i class="fa fa-chevron-right text-success"></i
                        ></nuxt-link>
                      </div>
                    <!-- </nuxt-link> -->
                  </div>
                  <!-- Game rows -->
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
import Highlights from "~/components/Highlights.vue";
import Live from "~/components/Live.vue";
import _ from "lodash";
export default {
  name: "IndexPage",
  layout: "default",
  components: { Highlights, Betslip, Live },
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
    hide(s, e) {
      if (e.target.parentElement.classList.contains("start")) {
        if (
          e.target.parentElement.nextElementSibling.classList.contains("d-none")
        ) {
          e.target.parentElement.nextElementSibling.classList.remove("d-none");
        } else {
          e.target.parentElement.nextElementSibling.classList.add("d-none");
        }
      } else {
        // console.log('kjgjh')
      }
    },
    toMatch(game){
      return this.$router.push({name: 'sport-name-id', params:{name:this.sport ,id: game.provider_id === undefined ? 0 : game.provider_id}})
    }
  },
  mounted() {},
};
</script>

<style></style>
