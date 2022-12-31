<template>
  <div>
    <div class="tabs__header">
      <ul class="nav tabs__list">
        <li
          class="nav-item sport-item me-2 tab"
          v-for="(tab,index) in tabs"
          :key="index"
          :class='{"tabs__selected": (index == selectedIndex)}'
          @click="selectTab(index)"
        >
          <a>{{ tab.title }}</a>
        </li>
      </ul>
    </div>
    <div class="tab__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'tabs',
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },

  methods: {
    selectTab(i) {
        this.selectedIndex = i
        // loop over all the tabs
        this.tabs.forEach((tab, index) => {
            tab.isActive = (index === i)
        })
    }
  },

  mounted () {
      this.selectTab(0)
  },

  created () {
      this.tabs = this.$children
  }
};
</script>

<style></style>
