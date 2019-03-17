<template>
  <div class="blogSelected">
    <div class="intro">
      <div class="elevate-cover">
        <div class="elevate-cover__textOffset">
          <div class="elevate-cover__text">
            <span class="blogSelected-year">{{metadata.date}}</span>
            —
            <h1 class="elevate-cover__title">{{metadata.title}}</h1>
            <p class="elevate-cover__description">{{metadata.description}}</p>
          </div>
        </div>
        <ImageResponsive
          :src="`/labs/${metadata.name}/${metadata.image}`"
          width="100%"
          class="elevate-cover__img"
          :alt="'Blog picture'"
        />
      </div>
    </div>
    <div class="container small">
      <DynamicMarkdown
        :render-func="data.vue.render"
        :static-render-funcs="data.vue.staticRenderFns"
      />
    </div>
  </div>
</template>

<script lang="js">  
  import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"

  import labs from "~/static/labs";

  export default {
    components: { DynamicMarkdown },

    async asyncData ({params, store}) {
      const data = await labs.data(params.slug)

      return {
        data,
        metadata: data.attributes
      }
    } 
  }
</script>

<style lang="scss">
.overflowhidden {
  overflow: hidden;
}
.blogSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease 0.35s;
  opacity: 0;

  &[lazy="loading"] {
    filter: blur(15px);
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  &[lazy="loaded"] {
    opacity: 1;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  .intro {
    display: flex;
  }
}
.elevate-cover {
  display: flex;
  flex-direction: column;

  @media (min-width: $screen-md) {
    flex-direction: row;
  }

  &__img,
  &__textOffset {
    width: 100%;
  }

  &__text {
    max-width: 500px;
    width: 100%;
    padding: 2.4rem;

    @media (min-width: $screen-md) {
      margin-left: auto;
      padding: 2.4rem 4rem 2.4rem 2.4rem;
    }
  }

  &__textOffset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &__title {
    font-size: 3rem;
    font-family: "Tiempos Headline", Arial, sans-serif;
    color: $secondary;

    @media (min-width: $screen-sm) {
      font-size: 4rem;
    }
  }

  &__description {
    margin: 0;
  }
}
.dynamicMarkdown {
  padding: 3.2rem 0;
  font-size: 16px;
  line-height: 1.7;
  display: block;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  color: $secondary;

  @media (min-width: $screen-sm) {
    padding: 7.2rem 0;
    font-size: 19px;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    @media (max-width: $screen-sm) {
      font-size: 2rem;
    }
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    border-radius: 4px;
    background-color: #f6f8fa;
    overflow-x: scroll;
    display: block;
    margin-bottom: 5rem;

    code {
      background-color: #f6f8fa;
    }
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    display: inline;
    color: $secondary;
    font-size: 14px;
    padding: 0.2em 0.4em;

    @media (min-width: $screen-sm) {
      font-size: 16px;
    }
  }
}
</style>
