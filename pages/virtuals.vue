<template>
    <div class="virtual-gr">
      <div class="center-body">
        <iframe src="https://virtual-games.virtustec.com/desktop-v4/default/?checkScroll=true&amp;containerId=xpressContainer&amp;language=en-GB&amp;hwId=24f6985e-b386-4aa8-9683-3632203fc361&amp;showLanguageSelector=false&amp;showOddFormatSelector=false&amp;showUserCredit=true&amp;showUserName=false&amp;showClock=true&amp;customLinks=" frameborder="0" scrolling="yes" allow="autoplay encrypted-media" style="display: block; height:100vh; width: 100%;"></iframe>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Virtual",
        layout:"virtuals",
        data() {
            return {

            }
        },
        methods: {

        },
    };
</script>

<style scoped>
    .virtual-gr{
      background-color: #353a45;
    }
    .center-body {
        width: 1000px;
        margin: 0 auto;
        height: 100%;
    }
</style>
