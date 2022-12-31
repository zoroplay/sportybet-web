<template>
  <div class="tab-pane" :id="'tab_'+sport_name">
    <div v-for="(event, index) in data" :key="index" class="event-group">
      <div class="tournament-header">
        <div
          class="d-flex justify-content-between align-items-center position-relative"
        >
          <span class="text-white text-nowrap h5 mb-0 position-absolute start-0"
            >{{ index }} {{ group[0].sport_tournament_name }}</span
          >
          <table
            id="market-headers"
            style="width: 100%; vertical-align: middle"
          >
            <tr style="text-align: center; color: #333">
              <td style="width: 30%"></td>
              <td style="width: 25%">3 Way</td>
              <td style="width: 25%">Double Chance</td>
              <td style="width: 10%"></td>
            </tr>
            <tr>
              <td style="width: 39%"></td>
              <td style="width: 26%">
                <div
                  class="each-module-table flex-fill px-1 mx-1 d-flex justify-content-around two-markets"
                >
                  <div class="each-module">1</div>
                  <div class="each-module">X</div>
                  <div class="each-module">2</div>
                </div>
              </td>
              <td style="width: 26%">
                <div
                  class="each-module-table flex-fill mx-1 px-1 d-flex justify-content-around two-markets"
                >
                  <div class="each-module">1X</div>
                  <div class="each-module">12</div>
                  <div class="each-module">2X</div>
                </div>
              </td>
              <td style="width: 10%"></td>
            </tr>
          </table>
        </div>
      </div>
      <div
        v-for="(event, index) in group"
        :key="index"
        class="event my-1 text-white mb-1"
      >
        <div class="d-flex justify-space-between">
          <div class="d-flex align-items-center me-5">
            <img src="/img/livearrow.svg" class="me-1" alt="" srcset="" />
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
            <tr style="text-align: center; color: #333; border-top: 0">
              <td style="width: 30%">
                <div class="d-flex justify-content-between text-white me-3">
                  <span class="text-start">
                    <p class="mb-0 text-success">{{ event.team_a }}</p>
                    <p class="mb-0 text-success">{{ event.team_b }}</p>
                  </span>
                  <span>
                    <p class="mb-0">0</p>
                    <p class="mb-0">1</p>
                  </span>
                </div>
              </td>
              <td style="width: 30%">
                <div
                  class="btn-group w-100 px-1"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    class="btn px-3 py-2 btn-success text-white"
                  >
                    1.21
                  </button>
                  <button
                    type="button"
                    class="btn px-3 py-2 btn-success text-white border-start"
                  >
                    5.23
                  </button>
                  <button
                    type="button"
                    class="btn px-3 py-2 btn-success text-white border-start"
                  >
                    7.50
                  </button>
                </div>
              </td>
              <td style="width: 30%">
                <div
                  class="btn-group w-100 px-1"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    type="button"
                    class="btn px-3 py-2 btn-success text-white"
                  >
                    1.21
                  </button>
                  <button
                    type="button"
                    class="btn px-3 py-2 btn-success text-white border-start"
                  >
                    5.23
                  </button>
                  <button
                    type="button"
                    class="btn px-3 py-2 btn-success text-white border-start"
                  >
                    7.50
                  </button>
                </div>
              </td>
              <td style="width: 10%">
                <nuxt-link
                  class="text-decoration-none text-white text-nowrap"
                  to=""
                  >+55 <i class="fa fa-chevron-right text-success"></i
                ></nuxt-link>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
    <!-- <div class="col-12">
      <div class="btn rounded-0 btn-lg view_all btn-block text-white w-100">
        View All <i class="fa fa-chevron-right text-success"></i>
      </div>
    </div> -->
  </div>
</template>

<script>
export default {
  name:"content",
  props: ["data","sport_name"]
};
</script>

<style></style>
