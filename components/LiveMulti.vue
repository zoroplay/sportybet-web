<template>
  <div class="live">
    <div class="m-main-top">
      <h2 class="fw-bold text-white" style="font-size: 36px">Multi View</h2>
    </div>
    <div class="card rounded-0 shadow-none" style="background-color: #353a45">
      <div class="card-body pb-4 px-0 pt-0">
        <nav
          class="nav mx-4 nav-justified nav-tabs sports-tabs__list flex-column flex-sm-row mb-2"
        >
          <a
            v-for="(sport, index) in sport_list_menu.slice(0, 5)"
            :id="'pills-' + sport.id"
            data-bs-toggle="tab"
            :data-bs-target="'#tab_' + sport.id"
            @click.prevent="setActiveSport(sport.id)"
            type="button"
            role="tab"
            aria-selected="true"
            :key="index"
            class="text-decoration-none text-capitalize text-sm-center nav-link"
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
              <span class="me-3" v-html="more_active_sport"></span>
              <i class="fa fa-chevron-down text-success"></i
            ></a>
            <div
              v-if="show_more_sports"
              class="text-white select_dropdown"
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
        </nav>
        <div class="tab-content">
          <div
            v-for="(sport, index) in sport_list_menu"
            :key="index"
            :class="index == 0 ? 'active show' : ''"
            class="tab-pane"
            :id="'tab_' + sport.id"
          >
            <div v-if="Object.keys(games).length > 0 && !loading">
              <div
                v-for="(event, index) in games"
                :key="index"
                class="event-group text-white"
              >
                <div class="tournament-header px-4">
                  <div
                    class="d-flex justify-content-between align-items-center position-relative"
                  >
                    <div
                      class="title text-white text-truncate h5 mb-0 position-absolute start-0"
                    >
                      {{ index + " " + event[0].sport_tournament_name }}
                    </div>
                    <table
                      id="market-headers"
                      style="width: 100%; vertical-align: middle"
                    >
                      <tr style="text-align: center; color: #333">
                        <td style="width: 30%"></td>
                        <td style="width: 25%">p</td>
                        <td style="width: 25%">p</td>
                        <td style="width: 10%"></td>
                      </tr>
                      <tr>
                        <td style="width: 42%"></td>
                        <td style="width: 23%">
                          <div
                            class="each-module-table flex-fill px-1 mx-1 d-flex justify-content-around two-markets"
                          >
                            <!-- <div class="each-module"> {{ headers[0].markets[0]?.outcomes[0].name }} </div>
                                  <div class="each-module">{{ headers[0].markets[0]?.outcomes[1].name }}</div>
                                  <div class="each-module">{{ headers[0].markets[0]?.outcomes[2].name }}</div> -->
                          </div>
                        </td>
                        <td style="width: 23%">
                          <div
                            class="each-module-table x flex-fill mx-1 px-1 d-flex justify-content-around two-markets"
                          >
                            <!-- <div class="each-module"> {{ headers[0].markets[1]?.outcomes[0]?.name }} </div>
                                  <div class="each-module"> {{ headers[0].markets[1]?.outcomes[1]?.name }} </div>
                                  <div class="each-module"> {{ headers[0].markets[1]?.outcomes[2]?.name }} </div> -->
                            <!-- <div class="each-module">{{ headers[0].markets[1].outcomes[1].name }}</div>
                                  <div class="each-module">{{ headers[0].markets[2].outcomes[2].name }}</div> -->
                          </div>
                        </td>
                        <td style="width: 10%"></td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div
                  v-for="(game, index) in event"
                  :key="index"
                  class="event my-1 text-white mb-1"
                >
                  <div class="d-flex justify-space-between">
                    <div class="d-flex align-items-center me-5">
                      <img
                        src="/img/livearrow.svg"
                        class="me-1"
                        alt=""
                        srcset=""
                      />
                      <div class="d-flex flex-column">
                        <span>23:23</span>
                        <span>H1</span>
                      </div>
                    </div>
                    <table
                      id="live_event_single"
                      class="table mb-0 table-bordered"
                      style="width: 100%; vertical-align: middle"
                    >
                      <tr
                        style="text-align: center; color: #333; border-top: 0"
                      >
                        <td style="width: 32%">
                          <div
                            class="d-flex justify-content-between text-white me-3"
                          >
                            <span class="text-start">
                              <p class="mb-0 text-success">
                                {{ game.team_a }}
                              </p>
                              <p class="mb-0 text-success">
                                {{ game.team_b }}
                              </p>
                            </span>
                            <span>
                              <p class="mb-0">
                                {{ liveScore(game?.score, "home") }}
                              </p>
                              <p class="mb-0">
                                {{ liveScore(game?.score, "away") }}
                              </p>
                            </span>
                          </div>
                        </td>
                        <td style="width: 25%">
                          <div class="w-100 px-1" aria-label="Basic example">
                            <Odds
                              v-for="(o, index) in sortFixture(game, 0, 1)[0]
                                .odds"
                              :key="index"
                              :active="o.active"
                              :odds="o.odds"
                              :size="sortFixture(game, 0, 1)[0].odds"
                            />
                          </div>
                          <span class="text-white">{{
                            sortFixture(game, 0, 1)[0]
                          }}</span>
                        </td>
                        <td style="width: 25%">
                          <div class="w-100 px-1" aria-label="Basic example">
                            <Odds
                              v-for="(o, index) in sortFixture(game, 1, 2)[0]
                                .odds"
                              :key="index"
                              :active="o.active"
                              :odds="o.odds"
                              :size="sortFixture(game, 1, 2)[0].odds"
                            />
                          </div>
                        </td>
                        <td style="width: 10%">
                          <nuxt-link
                            class="text-decoration-none text-white text-nowrap"
                            to=""
                            >+55
                            <i class="fa fa-chevron-right text-success"></i
                          ></nuxt-link>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="d-flex justify-content-center"
              v-if="Object.keys(games).length < 1 && !loading"
            >
              <div class="no_games">
                <p>
                  Sorry, there are no games currently available in this
                  category. Please try later. Thank you.
                </p>
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Betslip from "~/components/Betslip.vue";
import market_headers from "~/plugins/constants";
import _ from "lodash";
import LiveMulti from "~/components/LiveMulti.vue";

export default {
  components: { Betslip, LiveMulti },
  name: "IndexPage",
  layout: "live",
  props: ["sports_menu", "loading", "fixtures"],
  data() {
    return {
      // headers:'',
      more_active_sport: "More Sports",
      show_more_sports: false,
    };
  },
  computed: {
    games() {
      let sport_id = this.$store.state.sport_id;
      let filteredData = this.fixtures.filter((x) => x.sport_id == sport_id);
      return _.groupBy(filteredData, "sport_category_name");
    },
    // headers(){
    //   let sport_id = this.$store.state.sport_id;
    //   return market_headers.filter((x) => x.id == sport_id)
    // }
  },
  methods: {
    groupBy(arr, key) {
      return _.groupBy(arr, key);
    },
    setActiveSport(id) {
      this.$store.dispatch("setCommitActiveSport", id);
      this.headers = market_headers.filter((x) => x.id == id);
      // console.log(this.headers)
    },
    setActiveMoreSport(id, e) {
      this.$store.dispatch("setCommitActiveSport", id);
      this.more_active_sport = e.target.innerHTML;
      this.showDropdown();
    },
    showDropdown() {
      this.show_more_sports = !this.show_more_sports;
    },
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




</style>
