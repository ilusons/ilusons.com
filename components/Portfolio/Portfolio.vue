<template>
  <div class="container">
    <section class="feature">
      <h3>Recent Works</h3>
      <PortfolioItem v-for="item in items" :key="item.name" :item="item"/>
    </section>
  </div>
</template>

<script>
import PortfolioItem from "~/components/Portfolio/PortfolioItem.vue";

export default {
  props: {
    items: {
      type: Object
    }
  },

  components: { PortfolioItem }
};
</script>
