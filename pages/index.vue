<template>
  <div class="m-main m-layout-main">
    <div class="m-main-top">
      <div class="home-top">
        <div class="first-part-wrap">
          <div class="first-part">
            <div class="img img1"><img src="https://s.sporty.net/global/main/modules/main/desktop/common/components/imgBanner/left.f044cb3797.jpg"></div>
            <div class="top-main">
              <div class="popular">
                <div class="popular-text" data-cms-key="popular">Popular</div>
                <div class="popular-list">
                  <div v-if="!loading" class="">
                    <nuxt-link
                    :to="{name: 'sport-name-period', params:{name:'Soccer',period: 'today'}}"
                    class="top-link"
                    ><span class="top-link-item">Today's Football</span
                    ><span class="arrow">
                      <i class="fa fa-chevron-right text-success"></i>
                    </span></nuxt-link
                  ><nuxt-link
                    :to="{name: 'sport-name-period', params:{name:'Soccer',period: 'upcoming'}}"
                    class="top-link"
                    ><span class="top-link-item">Upcoming Games</span
                    ><span class="arrow">
                      <i class="fa fa-chevron-right text-success"></i>
                    </span></nuxt-link
                  >
                  <nuxt-link
                    :to="{name: 'sport-name-tournament', params:{name: 'Soccer', tournament: 'sbe:tr:'+t.tournament_id}}"
                    class="top-link"
                    v-for="(t, index) in menu"
                    :key="index"
                    ><span class="top-link-item">{{ t.tournament.name }}</span
                    ><span class="arrow">
                      <i class="fa fa-chevron-right text-success"></i>
                    </span></nuxt-link
                  >
                  </div>
                </div>
              </div>
              <div id="carousel" class="main-banner">
                <div data-ride="carousel" class="carousel slide">
                  <div role="listbox" class="carousel-inner">
                    <div class="item active">
                      <nuxt-link
                        to="" href="https:help?nav=others"
                        ><img
                          src="https://s.sporty.net/common/main/res/6ae3311052fd04b9da73c8b4b5e09ab2.png"
                          loading="eager"
                      /></nuxt-link>
                    </div>
                  </div>
                  <ol class="carousel-indicators">
                    <li class="active"></li>
                  </ol>
                  <span role="button" class="left carousel-control">&lt;</span>
                  <span role="button" class="right carousel-control">&gt;</span>
                </div>
              </div>
              <div class="m-instant-reg m-instant-black">
                <div class="m-title">
                  <span
                    >Instant Registration</span
                  >
                </div>
                <p class="m-pro-tips">Make a Deposit and Start Betting!</p>
                <div
                  tabindex="6"
                  class="m-input-wrapper m-input-group m-input-group--prepend"
                >
                  <div class="input-group mb-3">
                    <span class="input-group-text bg-white rounded-0" id="basic-addon2">+234</span>
                    <input type="text" class="form-control form-control-lg rounded-0" placeholder="Mobile Number" aria-describedby="basic-addon2">
                  </div>
                </div>
                <div class="m-btn-wrapper">
                  <button class="af-button af-button--primary">
                    <span
                      ><span
                        >Register</span
                      ></span
                    >
                  </button>
                </div>
              </div>
            </div>
            <div class="img img2">
              <img src="https://s.sporty.net/ng/main/modules/main/desktop/common/components/imgBanner/right.a9a17f66b1.jpg"
              />
            </div>
          </div>
        </div>
        <!---->
      </div>
    </div>
    <div class="m-table m-main-bottom">
      <div class="second-banner mb-3">
        <nuxt-link
          to=""
          href="https:virtual/"
          class="m-image-wrapper"
          ><img
            src="https://s.sporty.net/common/main/res/88f6574e7e631b9c7280b5a4f57399d1.png"
            alt=""
        /></nuxt-link>
      </div>
      <div class="row m-table-row">
        <div class="col-9 m-table-cell">
          <Highlights/>
          <Live />
        </div>
        <div class="col-3 m-table-cell">
          <betslip></betslip>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Betslip from '~/components/Betslip.vue';
import Highlights from '~/components/Highlights.vue'
import Live from '~/components/Live.vue';
export default {
  name: "IndexPage",
  layout: "default",
  components: {Highlights, Betslip, Live},
  data(){
    return {
      loading: false,
    }
  },
  computed:{
    menu(){
      return this.$store.state.sports;
    }
  }
};
</script>

<style>
.m-main .m-main-top .home-top .first-part-wrap {
    background-color: #1B1E25;
}
.m-main .m-main-top .home-top .first-part {
    background-color: #1B1E25;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0 auto;
    min-width: 1000px;
    padding: 5px 0;
    position: relative;
    width: 1000px;
}

.m-main .m-main-top .home-top .top-main {
    min-width: 1000px;
    overflow: hidden;
    width: 1000px;
}

.m-main .m-main-top .home-top .first-part .popular {
    color: #fff;
    display: inline-block;
    height: 260px;
    text-align: left;
    vertical-align: top;
    width: 238px;
}

.m-main .m-main-top .home-top .first-part .popular .popular-text {
    font-size: 20px;
    font-weight: bold;
    height: 40px;
    line-height: 40px;
}

.m-main .m-main-top .home-top .first-part .popular .popular-list {
    height: 199px;
    width: 200px;
}

.m-main .m-main-top .home-top .first-part .popular .popular-list .top-link .top-link-item {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    flex: 1;
    font-size: 14px;
    line-height: 18px;
    max-width: calc(100% - 20px);
    min-width: 1%;
    text-align: left;
}

.m-main .m-main-top .home-top .first-part .popular .popular-list .top-link:first-child {
    border-top: 1px solid rgba(234, 236, 239, 0.3);
}
/* <style> */
.m-main .m-main-top .home-top .first-part .popular .popular-list .top-link, .m-main .m-main-top .home-top .first-part .popular .popular-list .top-link:hover, .m-main .m-main-top .home-top .first-part .popular .popular-list .top-linkvisited {
    color: #fff;
    text-decoration: none;
}
/* <style> */
.m-main .m-main-top .home-top .first-part .popular .popular-list .top-link {
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    border-bottom: 1px solid rgba(234, 236, 239, 0.3);
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #fff;
    display: table;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
    overflow: hidden;
    padding: 9px 0;
    width: 100%;
}

.m-main .m-main-top .home-top .first-part .main-banner {
    display: inline-block;
    height: 260px;
    margin-left: 19px;
    vertical-align: top;
    width: 490px;
}

.m-main .m-main-top .home-top .first-part .main-banner .carousel {
    height: 260px;
}

.m-main .m-main-top .home-top .m-instant-reg {
    display: inline-block;
    float: right;
    vertical-align: top;
    width: 235px;
}
/* <style> */
.m-instant-black {
    background: #1B1E25;
}
/* <style> */
.m-instant-reg {
    border-radius: 2px;
    width: 100%;
    overflow: hidden;
    padding: 7px 19px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-instant-dark .m-title, .m-instant-black .m-title {
    color: #fff;
}

/* <style> */
.m-instant-reg .m-title {
    padding: 12px 0 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: bold;
}

.m-main .m-main-top .home-top .m-instant-reg .m-pro-tips {
    border-left: 5px solid #33EA6A;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    color: #33EA6A;
    padding-left: 8px;
}
/* <style> */
.m-instant-reg .m-pro-tips {
    font-size: 12px;
    font-weight: 600;
    line-height: 1.17;
    color: #0D9737;
    margin-bottom: 10px;
}




.m-instant-reg .m-input-wrapper {
    height: 38px;
    margin: 6px 0;
    overflow: hidden;
}

/* <style> */
.m-instant-reg .m-input-wrapper {
    width: 100%;
}
/* <style> */
.m-input-group {
    border-collapse: separate;
    display: inline-table;
    line-height: normal;
    width: 100%;
}
/* <style> */
.m-input-wrapper {
    display: inline-block;
    font-size: 14px;
    line-height: normal;
    outline: none;
    position: relative;
}

.m-instant-dark .m-input-wrapper .m-input-prepend, .m-instant-black .m-input-wrapper .m-input-prepend {
    border: none !important;
}
/* <style> */
.m-instant-reg .m-input-group--prepend .m-input-prepend {
    border-color: #B4B4B4;
    border-radius: 2px 0 0 2px;
    padding-left: 18px;
}

.m-instant-reg .m-input-wrapper .m-input {
    height: 38px;
    padding: 10px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    font-size: 12px;
}

.m-instant-reg .m-btn-wrapper {
    padding: 6px 0;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
}

.m-instant-reg .m-btn-wrapper .af-button--primary {
    background: #0D9737 !important;
    color: #fff !important;
}

.m-instant-reg .m-btn-wrapper .af-button {
    padding-left: 0;
    padding-right: 0;
    text-align: center;
    border: none !important;
    font-size: 16px;
}

.m-instant-reg .m-btn-wrapper .af-button {
    width: 100%;
    height: 38px;
    border-radius: 2px;
}
</style>
