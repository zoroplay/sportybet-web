<template>
  <div class="m-nav-bar">
    <div class="m-nav">
      <div class="m-header-item">
        <nav
          id="header"
          class="m-flex"
          style="flex-shrink: 0"
        >
          <nuxt-link
            to="/"
            data-path="home"
            data-key="home"
            class="m-flex-item m-flex-item--active"
            ><span
                  data-cms-key="home"
              data-cms-page="common_functions"
              >Home</span
            ></nuxt-link
          ><nuxt-link
            v-for="(sport, index) in sport_list_menu.slice(0,9)"
            :key="index"
            :to="{name:'sport-name', params:{name:sport.name}}"
            class="m-flex-item"
            ><span>{{ sport.name }}</span></nuxt-link
          >

          <div
            id="more-sports"
            data-key="more"
            class="m-flex-item dropdown d-noe"
          >
            <span

              >More Sorts</span
            ><span class="arrow-icon"
              ><div class="dropdown-menu">
                <nuxt-link
                          to="/ng/sport/volleyball/"
                  data-sportsid="23"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Volleyball</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/lol/"
                  data-sportsid="110"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>LoL</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/handball/"
                  data-sportsid="6"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Handball</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/iceHockey/"
                  data-sportsid="4"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Ice Hockey</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/rugby/"
                  data-sportsid="12"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Rugby</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/cricket/"
                  data-sportsid="21"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Cricket</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/darts/"
                  data-sportsid="22"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Darts</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/beachVolley/"
                  data-sportsid="34"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Beach Volley</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/americanFootball/"
                  data-sportsid="16"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>American Football</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/mma/"
                  data-sportsid="117"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>MMA</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/futsal/"
                  data-sportsid="29"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Futsal</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/eFootball/"
                  data-sportsid="137"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>eFootball</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/eBasketball/"
                  data-sportsid="153"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>eBasketball</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/eIceHockey/"
                  data-sportsid="195"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>eIce Hockey</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/boxing/"
                  data-sportsid="10"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Boxing</span></nuxt-link
                ><nuxt-link
                          to="/ng/sport/snooker/"
                  data-sportsid="19"
                  data-path="eventListDefault"
                  data-key="eventListDefault"
                  class="m-flex-item dropdown"
                  ><span>Snooker</span></nuxt-link
                >
              </div></span
            >
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sdsd",
  data(){
    return {
      more_active_sport: "More Sports",
      show_more_sports: false,
    }
  }
};
</script>

<style></style>
