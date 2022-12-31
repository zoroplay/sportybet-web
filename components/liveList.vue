<template>
  <div class="m-nav-bar">
    <div class="m-nav">
      <div class="m-header-item">
        <nav
          id="header"
          class="m-flex"
          style="flex-shrink: 0"
        >
        <div class="nav" id="live-tab" role="tablist">
          <a
            class="m-flex-item nav-link active"
            id="nav-multi-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-multi"
            type="button"
            role="tab"
            aria-controls="nav-multi"
            aria-selected="true"
            ><span
              >Multi View</span
            ></a
          ><a
            class="m-flex-item nav-link"
            id="nav-single-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-single"
            type="button"
            role="tab"
            aria-controls="nav-single"
            aria-selected="false"
            ><span
              >Single View</span
            ></a
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
