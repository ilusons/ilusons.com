<template>
  <div class="container">
    <section class="feature">
      <h3>Skills</h3>
      <wordcloud
        class="cloud"
        :data="towordcloud(skills)"
        nameKey="name"
        valueKey="value"
        :showTooltip="false"
        :margin="{top: 0, right: 0, bottom: 0, left: 0 }"
        :rotate="{from: -5, to: 5, numOfOrientation: 15 }"
        :font="'Lora'"
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
      type: Array
    }
  },

  methods: {
    towordcloud: function(m) {
      const r = [];

      for (const key of Object.keys(m)) {
        r.push({
          name: key,
          value: m[key]
        });
      }

      return r;
    }
  }
};
</script>

<style lang="scss">
.cloud {
  width: 100% !important;
  height: 40rem !important;
}
</style>

