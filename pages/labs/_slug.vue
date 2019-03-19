<template>
  <section>
    <article>
      <div class="intro">
        <div class="elevate-cover">
          <div class="elevate-cover-textOffset">
            <div class="elevate-cover-text">
              <span>{{metadata.date}}</span>
              —
              <h1 class="elevate-cover-title">{{metadata.title}}</h1>
              <p class="elevate-cover-description">{{metadata.description}}</p>
            </div>
          </div>
          <ImageResponsive
            :src="`/labs/${metadata.name}/${metadata.image}`"
            width="100%"
            class="elevate-cover-img"
            :alt="'Image'"
          />
        </div>
      </div>
      <div class="container small">
        <DynamicMarkdown
          :render-func="data.vue.render"
          :static-render-funcs="data.vue.staticRenderFns"
        />
      </div>
    </article>
  </section>
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

.elevate-cover {
  display: flex;
  flex-direction: column;

  @media (min-width: $screen-md) {
    flex-direction: row;
  }

  &-img,
  &-textOffset {
    width: 100%;
  }

  &-text {
    max-width: 500px;
    width: 100%;
    padding: 2.4rem;

    @media (min-width: $screen-md) {
      margin-left: auto;
      padding: 2.4rem 4rem 2.4rem 2.4rem;
    }
  }

  &-textOffset {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  &-title {
    font-size: 3rem;
    color: $secondary;

    @media (min-width: $screen-sm) {
      font-size: 4rem;
    }
  }

  &-description {
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
    list-style-type: none;
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
