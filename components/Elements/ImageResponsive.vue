<template lang="html">
  <div v-lazy-container="{ selector: 'img' }" class="placeholder">
    <img :data-src="src" :data-loading="src + '.placeholder'" :width="width" :height="height" :class="classes" :alt="alt" />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    },
    classes: {
      type: String
    },
    alt: {
      type: String
    },
    radius: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped lang="scss">
.placeholder {
  overflow: hidden;
  line-height: 0;
}

img {
  transition: all ease 0.3s;
  opacity: 0;

  &[lazy="loading"] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
