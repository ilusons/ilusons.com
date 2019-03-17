<template>
  <div class="container">
    <PortfolioItem v-for="item in items" :key="item.name" :item="item"/>
  </div>
</template>

<script>
import PortfolioItem from "~/components/Portfolio/PortfolioItem.vue";

import labs from "~/static/labs";

export default {
  components: { PortfolioItem },

  async asyncData({ store }) {
    return labs.metadatas.then(res => {
      return {
        items: res.sort((x, y) => (new Date(x.date) < new Date(y.date)))
      };
    });
  }
};
</script>
