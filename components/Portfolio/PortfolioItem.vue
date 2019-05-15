<template>
  <div class="effects-3dp-container portfolio-item-container">
    <div class="effects-3dp-inner portfolio-item">
      <a :href="`/labs/${item.name}/`" class="portfolio-thumb-inner">
        <div
          class="portfolio-thumb-hover"
          :style="`background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${this.item.color} 90%)`"
        >
          <div class="portfolio-item-bg"></div>
          <div class="portfolio-thumb-text">
            <h3 class="portfolio-thumb-title">
              {{ item.title }}
              <a
                :href="item.link ? item.link : `/labs/${item.name}/`"
                class="portfolio-item-title-arrow"
              >Visit ⟶</a>
            </h3>
            <h3 class="portfolio-thumb-description">{{ item.description }}</h3>
          </div>
        </div>
        <ImageResponsive
          :src="`/labs/${item.name}/${item.thumb}`"
          :classes="'thumb'"
          :width="'952'"
          :height="'509'"
          :alt="item.cardAlt"
        />
      </a>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    props: {
      item: {
        type: Object
      }
    },

    mounted() {      
      try {
        const containers = document.getElementsByClassName("effects-3dp-container");
        for (const continer of containers) {
          const inner = continer.getElementsByClassName("effects-3dp-inner")[0];

          this.$init3dp(continer, inner);
        }
      } catch (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="scss">
.thumb {
  object-fit: cover;
  object-position: center;
  max-height: 509px;
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy="loaded"] {
    opacity: 1;
  }
}

.portfolio-item {
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;
  margin: 12rem 0;
  box-shadow: 0 8px 48px 0 rgba(0, 0, 0, 0.35);

  @media (min-width: $screen-sm) {
    margin: 4rem 0;
  }
}

.portfolio {
  width: 100%;
  position: relative;

  &-item {
    padding-bottom: 2.4rem;

    &:last-child {
      padding-bottom: 0;
    }

    &-bg {
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.3) 0%,
        rgba(0, 0, 0, 0.6) 100%
      );
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;
    }

    &-title-arrow {
      font-size: 3rem;
      line-height: initial;
      text-align: left;
      color: white;
      text-shadow: 0 4px 2px rgba(0, 0, 0, 0.15);
      font-weight: bold;
      text-transform: none !important;
      font-style: italic !important;
      text-decoration: none;
      margin-left: 3rem;
      opacity: 0;
      transition: all 0.3s ease;
      -moz-transition: all 0.3s ease;
      -webkit-transition: all 0.3s ease;
      -o-transition: all 0.3s ease;

      &:hover {
        text-decoration: none;
      }

      @media (max-width: $screen-sm) {
        font-size: 1.8rem;
        color: $primary-light;
        font-weight: normal;
      }
    }

    &-container {
      &:nth-child(2n + 1) {
        transform: translateX(-1.5rem);
      }

      &:nth-child(2n) {
        transform: translateX(1.5rem);
      }
    }

    @media (min-width: $screen-sm) {
      padding-bottom: 4.8rem;
    }
  }

  &-thumb-inner {
    position: relative;
    font-size: 0;
    display: block;

    &:hover {
      .portfolio-item-bg {
        opacity: 1;
      }

      .portfolio-item-title-arrow {
        opacity: 1;
      }
    }
  }

  &-thumb-hover {
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;

    @media (max-width: $screen-sm) {
      position: relative;
    }
  }

  &-thumb-text {
    position: absolute;
    bottom: 3rem;
    left: 4rem;
    padding-right: 4rem;

    @media (max-width: $screen-sm) {
      position: absolute;
      bottom: 0;
      left: 0;
      padding-right: 0;
    }
  }

  &-thumb-title {
    font-size: 4rem;
    line-height: initial;
    text-align: left;
    color: white;
    text-shadow: 0 4px 2px rgba(0, 0, 0, 0.15);
    font-weight: bold;
    text-transform: none !important;
    font-style: normal !important;

    @media (max-width: $screen-sm) {
      font-size: 1.8rem;
      color: $primary-light;
      font-weight: normal;
    }
  }
  &-thumb-description {
    font-size: 1.9rem;
    text-align: left;
    color: white;
    text-shadow: 0 4px 2px rgba(0, 0, 0, 0.15);
    text-transform: none !important;
    font-style: normal !important;

    @media (max-width: $screen-sm) {
      display: none;
    }
  }
}
</style>
