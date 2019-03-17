<template>
  <div class="effects-3dp-container">
    <div class="effects-3dp-inner portfolio-item">
      <a :href="`/labs/${item.name}`" class="portfolio-thumb-inner">
        <div
          class="portfolio-thumb-hover"
          :style="`background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, ${this.item.color} 70%)`"
        >
          <div class="portfolio-thumb-text">
            <h3 class="portfolio-thumb-description">{{ item.title }}</h3>
            <h3 class="portfolio-thumb-client">{{ item.description }}</h3>
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
      <div class="portfolio-description">{{ item.title }}</div>
      <div class="portfolio-client">{{ item.description }}</div>
    </div>
  </div>
</template>

<script lang="js">
  export default {
    props: {
      item: {
        type: Object
      }
    }
  }
</script>

<style lang="scss">
.thumb {
  object-fit: cover;
  object-position: center;
  max-height: 420px;
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
  margin: 6rem 0;
  box-shadow: 0 8px 48px 0 rgba(0, 0, 0, 0.35);
}

.portfolio {
  width: 100%;
  position: relative;

  &-item {
    padding-bottom: 2.4rem;

    &:last-child {
      padding-bottom: 0;
    }

    @media (min-width: $screen-sm) {
      padding-bottom: 4.8rem;
    }
  }

  &-title {
    &--coming {
      color: $secondary-lighter;
    }
  }

  &-content {
    vertical-align: middle;
    padding-left: 0;
    padding-right: 0;
  }
  &-client {
    @media (min-width: $screen-sm) {
      display: none;
    }
  }
  &-description {
    color: $secondary;
    padding-top: 1rem;
    @media (min-width: $screen-sm) {
      display: none;
    }
  }
  &-thumb-inner {
    position: relative;
    font-size: 0;
    display: block;

    &:hover {
      .portfolio-thumb-hover {
        opacity: 1;
      }
    }
  }

  &-thumb-hover {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    -webkit-transition: all 0.3s ease;
    -o-transition: all 0.3s ease;
    @media (max-width: $screen-sm) {
      display: none;
    }
  }

  &-thumb-text {
    position: absolute;
    bottom: 3rem;
    left: 4rem;
    padding-right: 4rem;
  }

  &-thumb-description {
    line-height: initial;
    text-align: left;
    color: white;
    &--dark {
      @extend .portfolio-thumb-description;
      color: $secondary;
    }
  }
  &-thumb-client {
    text-align: left;
    color: white;
    font-weight: 200;
    &--dark {
      @extend .portfolio-thumb-client;
      color: $secondary;
    }
  }
}
</style>
