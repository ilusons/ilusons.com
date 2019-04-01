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
    <Skills :skills="skills"/>
    <p class="container">
      <span class="container glyph">↓</span>
    </p>
    <Contact/>
  </div>
</template>

<script>
import Hero from "~/components/Sections/Hero";
import Contact from "~/components/Sections/Contact";
import Portfolio from "~/components/Portfolio/Portfolio";
import Skills from "~/components/Sections/Skills";

import labs from "~/static/labs";

export default {
  components: {
    Hero,
    Contact,
    Portfolio,
    Skills
  },

  async asyncData({ store }) {
    const skills = await labs.skills();

    return labs.metadatas.then(res => {
      return {
        skills,

        portfolio_items: res
          .filter(x => x && x.featured)
          .sort((x, y) => new Date(x.date) < new Date(y.date))
      };
    });
  }
};
</script>
