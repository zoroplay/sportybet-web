<template>
  <div
    class="card rounded-0 shadow-none mb-4"
  >
    <div class="card-body">
      <div role="button" class="start" @click="hide($event)">
        <div class="league-title">
          <span class="dis-icon">
            <i class="bi bi-caret-down-fill"></i>
          </span>
          {{ tournament_name }}
        </div>
      </div>
      <div class="events-list">
        <div
          v-for="(event, s) in groupBy(tournament_group, 'event_date')"
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
              <div class="m-table-cell m-left-team-cell" style="width: 258px">
                <div class="left-team-table">
                  <div class="time">
                    <div class="clock-time">{{ game.event_time }}</div>
                    <div class="text-nowrap game-id">ID: {{ game.id }}</div>
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
          <!-- Game rows -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "fixtures",
  props:["tournament_name","tournament_group"],
  methods:{
    hide(e) {
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
  }
};
</script>

<style></style>
