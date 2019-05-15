<template>
  <div class="container">
    <section class="feature">
      <h3>Skills</h3>
      <wordcloud
        class="cloud"
        :data="words"
        nameKey="name"
        valueKey="value"
        :showTooltip="false"
        :margin="{top: 3, right: 3, bottom: 3, left: 3}"
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
    }
  },

  data() {
    return {
      words: []
    };
  },

  mounted() {
    this.words = this.towordcloud(this.skills);
    setTimeout(() => {
      this.words = this.towordcloud(this.skills);
    }, 763);
  }
};
</script>

<style lang="scss">
.cloud {
  width: 100% !important;
  height: 40rem !important;
}
</style>
