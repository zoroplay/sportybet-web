<template>
  <div class="s-page_virtuals">
    <div class="header">
      <page-header></page-header>
    </div>
    <div class="m-main m-layout-main">
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
.s-page_virtuals{
  background-color: #353a45;
  min-height: 100vh;
}

.m-layout-main_live {
    width: 100%;
    height: 100%;
    min-height: 100%;
}

.s-header .m-nav-bar .m-flex-item.nav-link.active {
    border-bottom: 3px solid rgba(204, 12, 26);
}
</style>
