<template>
  <div class="page-index">
    <Hero/>
    <p class="container">
      <span class="glyph">↓</span>
    </p>
    <Portfolio :items="portfolio_items"/>
    <p class="container">
      <span class="container glyph">↓</span>
    </p>
    <Contact/>
  </div>
</template>

<script>
import Hero from "~/components/Sections/Hero";
import Contact from "~/components/Sections/Contact";
import Portfolio from "~/components/Portfolio/Portfolio.vue";

import labs from "~/static/labs";

export default {
  components: { Hero, Contact, Portfolio },

  async asyncData({ store }) {
    labs.skills.then(res => {
      console.log(res);
    });

    return labs.metadatas.then(res => {
      return {
        portfolio_items: res
          .filter(x => x && x.featured)
          .sort((x, y) => new Date(x.date) < new Date(y.date))
      };
    });
  }
};
</script>
