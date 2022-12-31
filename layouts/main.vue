<template>
  <div class="body">
    <div id="j_page_header" class="s-header">
      <div class="m-top-wrapper">
        <div class="m-nav-wrapper">
          <div class="m-logo-bar">
            <div class="m-left">
              <nuxt-link to="/" class="m-logo-wrapper">
                <div class="m-image-wrapper">
                  <img src="~/assets/img/logo.png" alt="Sportybet" class="m-img m-img--logo" />
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="main">
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  name:'main_layout'
};
</script>

<style></style>
