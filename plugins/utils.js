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
          hoverVisible: false
        },
        {
          name: "Tennis",
          id: 5,
          hoverVisible: false
        },
        {
          name: "Basketball",
          id: 2,
          hoverVisible: false
        },
        {
          name: "Handball",
          id: 6,
          hoverVisible: false
        },
        {
          name: "Rugby",
          id: 9,
          hoverVisible: false
        },
        {
          name: "Volleyball",
          id: 18,
          hoverVisible: false
        },
        {
          name: "Ice Hockey",
          id: 4,
          hoverVisible: false
        },
        {
          name: "Bandy",
          id: 24,
          hoverVisible: false
        },
        {
          name: "Boxing",
          id: 8,
          hoverVisible: false
        },
        {
          name: "Cricket",
          id: 16,
          hoverVisible: false
        },
        {
          name: "Darts",
          id: 17,
          hoverVisible: false
        },
        {
          name: "Football",
          id: 28,
          hoverVisible: false
        },
        {
          name: "Futsal",
          id: 25,
          hoverVisible: false
        },
        {
          name: "MMA",
          id: 21,
          hoverVisible: false
        },
        {
          name: "Snooker",
          id: 14,
          hoverVisible: false
        },
        {
          name: "Floorball",
          id: 50,
          hoverVisible: false
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
    },
    betslip(){
      return this.$store.state.coupon.betslip;
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
    formatNumber(number) {
      const n = number ? number : 0;
      return parseFloat(n).toLocaleString();
    },
    formatDate(date) {
      return this.$moment(date).format("DD/MM dddd");
    },
    matchStatus(status) {
      switch (status) {
        case 'not_started':
            return 'Not Started';
        case '1p':
            return 'H1';
        case '2p':
            return 'H2';
        case '1set':
            return '1st Set';
        case '2set':
            return '2nd Set';
        case '3set':
            return '3rd Set';
        case '4set':
            return '4th Set';
        case '5set':
            return '5th Set';
        case '6set':
            return '6th Set';
        case '7set':
            return '7th Set';
        case '1q':
            return '1st Quarter';
        case '2q':
            return '2nd Quarter';
        case '3q':
            return '3rd Quarter';
        case '4q':
            return '4th Quarter';
        case 'ot':
            return 'Overtime';
        case '2p_ot':
            return '2nd Period Overtime';
        case 'in_progress':
            return 'In Progress';
        case 'lunch_break':
            return 'Lunch Break';
        case 'injury_break':
            return 'Injury Break';
        case '1g':
            return '1st Game';
        case '2g':
            return '2nd Game';
        case '3g':
            return '3rd Game';
        case '4g':
            return '4th Game';
        case '5g':
            return '5th Game';
        case 'paused':
            return 'HT';
        case 'ended':
            return 'Ended';
        default:
            break;
      }
    },
    matchTime(time){
      return time+":00"
    },
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
    groupLiveSports(data){
      let ArrKeyHolder = [];
      let Arr = [];
      data.forEach(function(item){
          ArrKeyHolder[item.sport_tournament_id] = ArrKeyHolder[item.sport_tournament_id]||{};
          let obj = ArrKeyHolder[item.sport_tournament_id];

          if(Object.keys(obj).length === 0)
              Arr.push(obj);

          obj.sport_id = item.sport_id;
          obj.sport_name = item.sport_name;
          obj.category = item.sport_category_name;
          obj.Id = item.sport_tournament_id;
          obj.Name = item.sport_tournament_name;
          obj.Events  = obj.Events || [];

          obj.Events.push(item);
      });
      return Arr;
    },
    formatOdd(odd){
      if (odd > 0 && odd % 1 === 0) {
          return odd + ".00";
      } else {
          return odd;
      }
    }


  },
  mounted() {
    // this.getSportsMenu()
  },

  //gameplay
});
