<template>
  <div class="container">
    <section class="feature">
      <!--<h3>Skills <input type="text" @keyup="searchSkills($event);" placeholder="Search" class="search" /></h3>-->
      <wordcloud
        class="cloud"
        :data="words"
        nameKey="name"
        valueKey="value"
        :showTooltip="false"
        :margin="{top: 1, right: 1, bottom: 1, left: 1}"
        :rotate="{from: -1, to: 1, numOfOrientation: 30}"
        :font="'Lora'"
        :color="['#767676', '#929292']"
        :wordPadding="10"
      ></wordcloud>
    </section>
  </div>
</template>

<script>
import wordcloud from "vue-wordcloud";

export default {
  components: {
    wordcloud
  },

  props: {
    skills: {
      type: Object
    }
  },

  methods: {
    towordcloud(m) {
      const r = [];
      for (const key of Object.keys(m)) {
        r.push({
          name: key,
          value: m[key]
        });
      }
      return r;
    },

    searchSkills($event) {
      const query = $event.target.value.trim().toLowerCase();

      const new_words = this.towordcloud(this.skills);

      if(!query || query.length < 2) {
        this.words = new_words;        
        return;
      }

      const search_skills = new_words.filter(x => x.name.toLowerCase().indexOf(query) > -1 || x.name.indexOf('..') > -1);

      this.words = search_skills;
    }
  },

  data() {
    return {
      words: []
    };
  },

  mounted() {
    this.words = this.towordcloud(this.skills);
    setInterval(() => {
      this.words = this.towordcloud(this.skills);
    }, 3763);
  }
};
</script>

<style lang="scss">
.cloud {
  width: 100% !important;
  height: 36rem !important;
}

.search {
  margin-left: 2rem;
  border: 1px solid #cbcbcb;
  font-style: italic;
  font-size: smaller;
  padding: 0.4rem;
}
</style>
