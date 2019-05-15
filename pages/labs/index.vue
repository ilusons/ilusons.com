<template>
  <div class="container">
    <PortfolioItem v-for="item in portfolio_items" :key="item.name" :item="item"/>
  </div>
</template>

<script>
import PortfolioItem from "~/components/Portfolio/PortfolioItem.vue";

import labs from "~/static/labs";

export default {
  components: { PortfolioItem },

  async asyncData({ store }) {
    const portfolio_items = (await labs.metadatas()).sort(
      (x, y) => new Date(x.date) < new Date(y.date)
    );

    return {
      portfolio_items
    };
  }
};
</script>

<style lang="scss">
@media (min-width: $screen-sm) {
  .container {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: stretch;
    align-items: stretch;
    align-content: center;
  }

  .container div {
    flex: 0 0 auto;

    .thumb {
      width: 47rem;
      max-height: 26.44rem;
    }

    .portfolio {
      &-item {
        &-title-arrow {
          font-size: 1.8rem;
          margin-left: 1.8rem;
        }
      }

      &-thumb-text {
        position: absolute;
        bottom: 1.8rem;
        left: 2rem;
        padding-right: 2rem;

        @media (max-width: $screen-sm) {
          position: absolute;
          bottom: 0;
          left: 0;
          padding-right: 0;
        }
      }

      &-thumb-title {
        font-size: 2.3rem;

        @media (max-width: $screen-sm) {
          font-size: 1.7rem;
        }
      }
      &-thumb-description {
        font-size: 1.3rem;
      }
    }
  }
}
</style>
