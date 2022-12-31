<template>
  <div class="s-page">
    <div class="header">
      <page-header>
        <sports-list></sports-list>
      </page-header>
    </div>
    <div class="m-main m-layout-main">
      <nuxt/>
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

</style>
