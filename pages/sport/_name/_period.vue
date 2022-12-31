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
          <div
            v-for="(group, index) in fixtures"
            :key="index"
            class="card rounded-0 shadow-none mb-4"
          >
            <div class="card-body">
              <div class="start">
                <div class="league-title">{{ index }}</div>
              </div>
              <div
                v-for="(event, s) in groupBy(group, 'event_date')"
                :key="s"
                class="border-top pt-2"
              >

                <div
                  class="d-none d-flex justify-content-between align-items-center py-1 position-relative"
                >
                  <div
                    class="title text-dark m-date text-truncate h5 mb-0 position-absolute start-0"
                  >
                    {{ formatDate(s) }}
                  </div>
                  <table
                    id="market-headers"
                    style="width: 100%; vertical-align: middle"
                  >
                    <tr>
                      <td style="width: 35%"></td>
                      <td style="width: 23%">
                        <div
                          class="each-module flex-fill px-1 mx-1 d-flex justify-content-around"
                        >
                          <div class="each-module">1</div>
                          <div class="each-module">X</div>
                          <div class="each-module">2</div>
                        </div>
                      </td>
                      <td style="width: 23%">
                        <div
                          class="each-module x flex-fill mx-1 px-1 d-flex justify-content-around"
                        >
                          <div class="each-module">1X</div>
                          <div class="each-module">12</div>
                          <div class="each-module">X2</div>
                        </div>
                      </td>
                      <td style="width: 10%"></td>
                    </tr>
                  </table>
                </div>
                <div class="m-table-row date-row">
                  <div class="m-table-cell date">31/12 Saturday</div>
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
                  <div class="print-element p-table-th" style="display:none">
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
                    <div class="m-market" aria-label="Basic example">
                      <div v-for="(odds,o) in game.odds.slice(0,3)" :key="o" class="m-outcome">
                        <span class="m-outcome-odds">{{ odds.odds }}</span>
                      </div>
                    </div>
                    <div class="m-market" aria-label="Basic example">
                      <div v-for="(odds,o) in game.odds.slice(5)" :key="o" class="m-outcome">
                        <span class="m-outcome-odds">{{ odds.odds }}</span>
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
                      >+{{ game.markets_count }} <i class="fa fa-chevron-right text-success"></i
                    ></nuxt-link>
                  </div>
                </div>
                <!-- Game rows -->
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
  data() {
    return {
      fixtures: [],
      loading: false,
      period: "",
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        // react to route changes...
        this.period = to.params.period;
        this.getFixtures();
      },
    },
  },
  computed: {
    date() {
      let today = new Date();
      return (
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()
      );
    },
  },
  methods: {
    getFixtures() {
      if (this.period == "today") {
        this.$axios
          .get(
            "sports/get-fixtures-by-sport-date?date=" +
              this.date +
              "&sid=1&channel=website"
          )
          .then((res) => {
            this.fixtures = _.groupBy(
              res.data.fixtures,
              "sport_tournament_name"
            );
          });
      } else if (this.period == "upcoming") {
        this.$axios
        .get(
          "sports/get-fixtures-by-sport-date?date=" +
            this.start_date +
            "&end_date=" +
            this.end_date +
            "&sid=1&channel=website"
        )
        .then((res) => {
          this.fixtures = _.groupBy(res.data.fixtures, "sport_tournament_name");
          this.loading = false;
        });
      }
    },
    groupBy(arr, key) {
      return _.groupBy(arr, key);
    },
  },
  mounted() {},
};
</script>

<style>
.league-title {
  display: inline-block;
  max-width: 90%;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: middle;
  white-space: nowrap;
}

.league-title {
  font-size: 20px;
  height: 55px;
  line-height: 55px;
  padding: 0 10px;
  text-align: left;
}

.m-table-cell {
  display: table-cell;
  -webkit-box-flex: 1;
  -webkit-flex: 1 1 auto;
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  min-width: 1%;
}

.date-row,.league-row .date {
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: 36px;
  line-height: 36px;
  table-layout: fixed;
  vertical-align: middle;
}

.date-row .date,.league-row .date {
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    font-size: 16px;
    font-weight: bold;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 263px;
}

.each-module-wrap {
    color: #9CA0AB;
    -webkit-box-flex: 0;
    -webkit-flex: 0 1 auto;
    -ms-flex: 0 1 auto;
    flex: 0 1 auto;
    width: 280px;
    display: inline-table !important;
}

.each-module-table, .import-match .match-league .match-table .league-row .each-module-wrap .each-module-table {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: inline-table;
    display: inline-flex;
    table-layout: fixed;
    white-space: nowrap;
    width: 100%;
}

.each-module-table.two-markets, .import-match .match-league .match-table .league-row .each-module-wrap .each-module-table.two-markets {
    width: 50%;
}

.empty-cell, .import-match .match-league .match-table .league-row .empty-cell {
    width: 55px;
}

.each-module, .import-match .match-league .match-table .league-row .each-module-wrap .each-module-table .each-module {
    display: table-cell;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 12px;
    min-width: 1%;
    text-align: center;
}

.m-match-row {
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  border-top: 1px solid #eaecef;
  cursor: pointer;
  font-size: 12px;
  height: 50px;
  position: relative;
  table-layout: fixed;
}

.m-match-row:after {
  background-color: #fff;
  content: " ";
  display: block;
  height: 1px;
  left: 0;
  position: absolute;
  top: -1px;
  width: 65px;
}

.m-match-row .m-table-cell {
  vertical-align: middle;
}

.market-cell.two-markets .m-market {
  width: calc(50% - 3px);
}

.market-cell.two-markets .m-market:first-child {
  margin-right: 2px;
}
.left-team-table {
  display: inline-table;
  height: 50px;
  table-layout: fixed;
  width: 100%;
}

.left-team-table > div {
  display: table-cell;
  vertical-align: middle;
}

.time .clock-time {
  padding-bottom: 4px;
}

.time .game-id {
  color: #d8d8d8;
  font-weight: 500;
}

.left-team-table .time {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  font-weight: 700;
  line-height: 1.1;
  text-align: left;
  width: 68px;
}

.left-team-table .lmt-icon {
  color: #353a45;
  -webkit-box-flex: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  font-size: 12px;
  position: relative;
  text-align: left;
  width: 37px;
}

.left-team-table .teams > div:first-child {
  padding-bottom: 4px;
}

.teams > div {
  display: block;
  line-height: 1.1;
  font-weight: 500;
  overflow: hidden;
  padding-right: 4px;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.lmt-icon:before {
  content: "\E61D";
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-table-cell {
  font-size: 12px;
}

.market-cell.two-markets .m-market:first-child {
  padding-right: 2px;
}

.m-market {
  -webkit-align-content: center;
  -ms-flex-line-pack: center;
  align-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  display: inline-table;
  display: -webkit-inline-box;
  display: -webkit-inline-flex;
  display: -ms-inline-flexbox;
  display: inline-flex;
  -webkit-justify-content: space-around;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  table-layout: fixed;
  width: 100%;
}

.m-market .m-outcome {
  background-color: #0d9737;
  border: 0px;
  color: #fff;
  cursor: pointer;
  display: block;
  -webkit-box-flex: 1;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  font-size: 12px;
  font-weight: 700;
  height: 36px;
  line-height: 36px;
  min-width: 1%;
  position: relative;
  text-align: center;
}

.m-market > div:first-child {
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
}

.m-market > div:last-child {
  border-bottom-right-radius: 4px;
  border-top-right-radius: 4px;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.m-market > div {
  -webkit-box-shadow: -1px 0px 0px 0px rgb(255 255 255 / 30%) inset;
  box-shadow: -1px 0px 0px 0px rgb(255 255 255 / 30%) inset;
}

.m-market .m-outcome:hover {
  background: #32ce62;
}

.m-market .m-outcome.m-outcome--checked {
  background: #33ea6a;
  color: #1b1e25;
}
</style>
