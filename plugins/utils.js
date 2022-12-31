import Vue from "vue";
import { mapActions } from 'vuex'

// import store from '../store/index'

Vue.mixin({
  data() {
    return {
      sport_list_menu: [
        {
          name: "Soccer",
          id: 1,
        },
        {
          name: "Tennis",
          id: 5,
        },
        {
          name: "Basketball",
          id: 2,
        },
        {
          name: "Handball",
          id: 6,
        },
        {
          name: "Rugby",
          id: 9,
        },
        {
          name: "Volleyball",
          id: 18,
        },
        {
          name: "Ice Hockey",
          id: 4,
        },
        {
          name: "Bandy",
          id: 24,
        },
        {
          name: "Boxing",
          id: 8,
        },
        {
          name: "Cricket",
          id: 16,
        },
        {
          name: "Darts",
          id: 17,
        },
        {
          name: "Football",
          id: 28,
        },
        {
          name: "Futsal",
          id: 25,
        },
        {
          name: "MMA",
          id: 21,
        },
        {
          name: "Snooker",
          id: 14,
        },
        {
          name: "Floorball",
          id: 50,
        },
      ],
      sport_list_menu_2: [
        {
          name: "Ice Hockey",
          id: 4,
        },
        {
          name: "Bandy",
          id: 24,
        },
        {
          name: "Boxing",
          id: 8,
        },
        {
          name: "Cricket",
          id: 16,
        },
        {
          name: "Darts",
          id: 17,
        },
        {
          name: "Football",
          id: 28,
        },
        {
          name: "Futsal",
          id: 25,
        },
        {
          name: "MMA",
          id: 21,
        },
        {
          name: "Snooker",
          id: 14,
        },
        {
          name: "Floorball",
          id: 50,
        },
      ],
    };
  },
  computed: {
    user() {
      return this.$store.state.auth.user;
    },
    start_date(){
      let today = new Date();
      return today.getFullYear() + "-" + (today.getMonth()+1)   + "-"  + today.getDate();
    },
    end_date(){
      let future = new Date();
      future.setDate(future.getDate() + 7)
      return future.getFullYear() + "-" + (future.getMonth()+1)   + "-"  + future.getDate();
    }
  },
  methods: {
    ...mapActions(['coupon/addToCoupon']),
    liveScore(score, team) {
      if (score) {
        const scoreArray = score.split(":");
        if (team === "home") {
          return scoreArray[0];
        } else {
          return scoreArray[1];
        }
      }
    },
    formatDate(date) {
      return this.$moment(date).format("DD/MM dddd");
    },
    matchStatus() {},
    sort: function (arr) {
      // let odds = arr.live_data.markets;
      return arr.slice().sort(function (a, b) {
        return a.id - b.id;
      });
    },
    sortFixture(fixture, start, end) {
      // let fixtures = []
      // return this.fixtures.filter((x) => x.sport_id == sport_id);
      return this.sort(fixture.live_data.markets).slice(start, end);
    },
    getActiveMarkets(arr) {
      return arr.filter((x) => x.active == "1");
    },
    getSportsMenu() {
      this.$axios
        .get("sports/get-menu?period=all&start=null&end=null")
        .then((res) => {
          this.$store.dispatch("setCommitMenu", res.data.menu);
        });
    },
    groupBy(arr, key) {
      return _.groupBy(arr, key);
    },
    getSportbyName(name){
      switch (name) {
        case 'Soccer':
          return 1;
        case 'Soccer':
          return 1;
        case "Basketball":
          return 2;
        case "Baseball":
          return 3;
        case "Ice Hockey":
          return 4;
        default:
          break;
      }
    },
    isSelected(ele_id, coupon) {
      let isExist = false;

      if (coupon.selections.length > 0) {
        let count = coupon.selections.find(
          selection => selection.element_id === ele_id
        );
        if (count) {
          isExist = true;
        }
      }
      return isExist;
    },
    createID(event_id, market_id, odd_name, odd_id) {
      let oddname = String(odd_name).replace(/[^a-zA-Z0-9]/g, "_");
      return event_id + "_" + market_id + "_" + oddname + "_" + odd_id;
    },
    toURL(name) {
      if (name === undefined) {
        return "-";
      }
      return name.replace(/[^a-z0-9+]+/gi, "-");
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
        fixture_type: this.details.fixture_type
      };
      this.$store.dispatch("coupon/addToCoupon", data);
    },
  },
  mounted() {
    // this.getSportsMenu()
  },

  //gameplay
});
