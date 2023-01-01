<template>
  <div class="card rounded-0 shadow-none mb-4">
    <div class="px-4 pt-5 header d-flex justify-content-between">
      <div class="start d-flex">
        <div class="highlight_indicator me-3"></div>
        <h2>Highlights</h2>
      </div>
      <div class="end d-flex">
        <span class="me-4"><i class="fa fa-print"></i> Print</span>
        <span><i class="bi bi-arrow-clockwise"></i> Refresh</span>
      </div>
    </div>
    <div class="card-body px-3">
      <nav>
        <div class="nav nav-tabs sports-tabs__list flex-row">
          <a
            v-for="(sport, index) in sports.slice(0, 5)"
            :id="'pills-' + sport.sport_id"
            data-bs-toggle="tab"
            :data-bs-target="'#tab_' + sport.sport_id"
            type="button"
            role="tab"
            :aria-selected="index == 0 ? 'true':'false'"
            @click="setSport(sport.sport_id, sport.categories[0].tournaments[0].sport_tournament_id)"
            :key="index"
            class="flex-sm-fill text-decoration-none text-dark text-capitalize text-sm-center nav-link"
            :class="index == 0 ? 'active' : ''"
            aria-current="page"
            >{{ sport.name }}</a
          >
          <div class="dropdown">
            <a
              type="button"
              @click="showDropdown"
              aria-haspopup="true"
              class="text-sm-center nav-link text-decoration-none"
            >
              <span class="me-3 text-dark" v-html="more_active_sport"></span>
              <i class="fa fa-chevron-down text-success"></i
            ></a>
            <div
              v-if="show_more_sports"
              class="text-dark select_dropdown"
              aria-labelledby="triggerId"
            >
              <a @click.prevent="showDropdown" class="dropdown-item" href="#"
                ><span class="me-3">More Sports</span>
                <i class="fa fa-chevron-up text-muted"></i
              ></a>
              <a
                v-for="(sport, index) in sport_list_menu_2"
                :key="index"
                :id="'pills-' + sport.id"
                data-bs-toggle="tab"
                :data-bs-target="'#tab_' + sport.id"
                @click="setActiveMoreSport(sport.id, $event)"
                type="button"
                role="tab"
                aria-selected="true"
                class="dropdown-item"
                href="#"
                >{{ sport.name }}</a
              >
            </div>
          </div>
          <a class="flex-sm-fill text-sm-center nav-link text-dark">
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
            Filter</a
          >
        </div>
      </nav>
      <div class="tab-content">
        <div
          v-for="(sport, index) in sports"
          :key="index"
          :id="'tab_' + sport.sport_id"
          class="tab-pane"
          :class="index == 0 ? 'active' : ''"
          role="tabpanel"
        >
          <nav class="nav nav-tabs leagues-tabs__list flex-row">
            <a
              v-for="(category, index) in sport.categories.slice(0, 5)"
              :key="index"
              class="text-decoration-none text-dark text-capitalize text-sm-start ps-3 nav-link"
              :class="index == 0 ? 'active' : ''"
              aria-current="page"
              id='category_tab'
              data-bs-toggle="tab"
              :data-bs-target="'#category_tab_' + category.sport_category_id"
              type="button"
              role="tab"
              aria-selected="true"
              @click="setCategory(category.tournaments[0].sport_tournament_id)"
            >
              <div class="category-name">{{ category.name }}</div>
              <div class="tournament-name text-truncate">
                {{ category.tournaments[0].name }}
              </div>
            </a>
          </nav>
          <div class="tab-content leagues_tab-content" id="category-tabContent">
            <div
              v-for="(category, index) in sport.categories.slice(0, 5)"
              :id="'category_tab_' + category.sport_category_id"
              :key="index"
              :class="index == 0 ? 'active show' : ''"
              class="tab-pane"
              role="tabpanel"
              :aria-labelledby="'pills'+category.sport_category_id+'-tab'"
              tabindex="0"
            >
              <div
                v-for="(event, index) in groupedHighlights"
                :key="index"
                class="border-top mt-4 pt-2"
              >
                <div class="m-table-row date-row">
                  <div class="m-table-cell date">{{ formatDate(index) }}</div>
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
                <!-- Game Rows -->
                <div
                  v-for="(game, index) in event"
                  :key="index"
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
                          <div class="lmt-icon">
                            <i class="fa fa-line-chart"></i>
                          </div>
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
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Betslip from "./Betslip.vue";
import _ from "lodash";
export default {
  components: { Betslip },
  // components: { Tabs, Tab },
  data() {
    return {
      sport_id: 1,
      sports: [],
      fixtures: [],
      loading: false,
      market_headers: [],
      active_tournament_id: null,
      more_active_sport: "More Sports",
      show_more_sports: false,
    };
  },
  computed: {
    groupedHighlights() {
      return _.groupBy(this.fixtures, "event_date");
    },
  },
  methods: {
    getHighlightFixtures() {
      this.$axios
        .get("sports/get-menu?period=all&start=null&end=null")
        .then((res) => {
          // console.log(res.data.menu)
          this.$store.dispatch("setCommitMenu", res.data.menu);
          this.sports = res.data.menu;
          this.active_tournament_id =
            res.data.menu[0].categories[0].tournaments[0].sport_tournament_id;
          this.$axios
            .get(
              "/sports/get-fixtures/" +
                this.active_tournament_id +
                "?sid=" +
                this.sport_id +
                "&source=web"
            )
            .then((res) => {
              this.fixtures = res.data.fixtures;
              // this.market_headers =
            });
        });
    },
    setCategory(id) {
      this.loading = true;
      this.active_tournament_id = id;
      this.$axios
        .get(
          "/sports/get-fixtures/" +
            this.active_tournament_id +
            "?sid=" +
            this.sport_id +
            "&source=web"
        )
        .then((res) => {
          this.fixtures = res.data.fixtures;
          this.loading = false
          // this.market_headers =
        });
    },
    setSport(sport_id, tournament_id){
      this.sport_id = sport_id;
      this.$axios
            .get(
              "/sports/get-fixtures/" +
                tournament_id +
                "?sid=" +
                this.sport_id +
                "&source=web"
            )
            .then((res) => {
              this.fixtures = res.data.fixtures;
              // this.market_headers =
            });
    },

    showDropdown() {
      //
    },
  },

  mounted() {
    this.getHighlightFixtures();
  },
};
</script>

<style scoped>
.m-main .m-main-bottom {
  margin-top: 10px !important;
}

.highlight_indicator {
  height: 24px;
  width: 24px;
  border-radius: 50%;
  background-color: #0d9737;
}

.m-layout-main .m-main-bottom {
  width: 1000px;
  min-width: 1000px;
  margin: 0 auto;
}

/* .sports-tabs__list > .nav-link.active {
  border-radius: 0;
  border: 0;
  border-bottom: 4px solid #0d9737;
} */

.sports-tabs__list .nav-link:not(.nav-link.active):hover {
  isolation: isolate;
  border-color: transparent;
  border-bottom: 2px solid #0d9737;
}

.leagues-tabs__list {
  margin-top: 10px;
  margin-bottom: 10px;
  border: 0;
}

.leagues-tabs__list > .nav-link.active {
  border-radius: 1;
  border: 0;
  border: 2px solid #0d9737;
}

.leagues-tabs__list a.nav-link {
  width: calc(100% / 5.2);
  background-color: #eeeeee;
  margin-right: 5px;
  border-radius: 0;
  padding: 10px 0px 10px 10px;
  display: inline-block;
  font-size: 16px;
}

.leagues-tabs__list a.nav-link:last-of-type {
  margin-right: 0px;
}
</style>
