<template>
  <div class="container">
    <PortfolioItem v-for="item in portfolio_items" :key="item.name" :item="item"/>
  </div>
</template>

<script>
import PortfolioItem from "~/components/Portfolio/PortfolioItem.vue";

import labs from "~/static/labs";

export default {
  components: { PortfolioItem },

  async asyncData({ store }) {
    const portfolio_items = (await labs.metadatas())
      .sort((x, y) => new Date(x.date) < new Date(y.date));

    return {
      portfolio_items
    };
  }
};
</script>
