<template>
  <div class="page-index">
    <div id="particles"></div>
    <HeroSection/>
    <div class="container">
      <PortfolioItem v-for="item in items" :key="item.name" :item="item"/>
    </div>
  </div>
</template>

<script>
import HeroSection from "~/components/Sections/HeroSection";
import PortfolioItem from "~/components/Portfolio/PortfolioItem.vue";

import labs from "~/static/labs";

export default {
  components: { HeroSection, PortfolioItem },

  async asyncData({ store }) {
    return labs.metadatas.then(res => {
      return {
        items: res
          .filter(x => x && x.featured)
          .sort((x, y) => !(new Date(x.date) < new Date(y.date)))
      };
    });
  }
};
</script>

<style lang="scss">
#particles {
  position: absolute !important;
  display: inline-block;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 420px;
  height: 100%;
  z-index: -1;
}
</style>

