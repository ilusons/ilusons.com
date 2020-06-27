<template>
  <div class="page-index">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <Hero/>
        </div>
        <div class="col-md-7">
          <Skills :skills="skills"/>
        </div>
      </div>
    </div>
    <p class="container">
      <span class="glyph" @click="scroll">↓</span>
    </p>
    <Portfolio :items="portfolio_items"/>
    <p class="container">
      <span class="container glyph" @click="scroll">↓</span>
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
    const portfolio_items = (await labs.metadatas())
      .filter(x => x && x.featured)
      .sort((x, y) => new Date(x.date) < new Date(y.date));
    const skills = await labs.skills();

    return {
      portfolio_items,
      skills
    };
  },

  methods: {
    scroll: function (event) {
      window.scrollBy(0, 700);
    }
  }
};
</script>

<style lang="scss">
.glyph {
  cursor: pointer;
}
</style>
