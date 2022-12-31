<template>
  <div class="s-page_live">
    <div class="header">
      <page-header>
        <live-list></live-list>
      </page-header>
    </div>
    <div class="m-main m-layout-main_live">
      <div class="m-table m-main-bottom">
        <nuxt/>
      </div>
    </div>
    <div class="footer">
      <page-footer></page-footer>
    </div>
  </div>
</template>

<script>
import PageFooter from '~/components/PageFooter'
import PageHeader from '~/components/PageHeader'
export default {
  components: { PageHeader, PageFooter },

}
</script>

<style>
.s-page_live{
  background: #1B1E25;
  min-height: 100vh;
}

.m-layout-main_live {
    width: 100%;
    height: 100%;
    min-height: 100%;
}

.s-page_live .m-layout-main_live {
    padding-top: 130px;
    background-image: url('~/assets/img/Live-banner.jpg');
    background-position: top center;
    background-repeat: no-repeat;
    position: relative;
}

.s-header .m-nav-bar .m-flex-item.nav-link.active {
    border-bottom: 3px solid rgba(204, 12, 26);
}
</style>
