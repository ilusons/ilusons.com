<template>
  <div class="sidenav-container">
    <div v-if="show" class="sidenav-backdrop" @click="$emit('close')"></div>
    <transition name="slide-side">
      <nav v-if="show" class="sidenav">
        <NavItems @click="$emit('close')"/>
      </nav>
    </transition>
  </div>
</template>

<script>
import NavItems from "~/components/Navigation/NavItems";

export default {
  components: {
    NavItems
  },
  props: {
    show: {
      type: Boolean,
      default: false
    }
  }
};
</script>


<style lang="scss">
.sidenav-container {
  height: 100%;
  width: 100%;
}

.sidenav-backdrop {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.65);
  z-index: 1000;
  position: fixed;
  top: 0;
  left: 0;
}

.sidenav {
  height: auto;
  width: 100%;
  background-color: $background-primary;
  z-index: 10000;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 30px;
}

.slide-side-enter-active,
.slide-side-leave-active {
  transition: all 0.3s ease-out;
}
.slide-side-enter,
.slide-side-leave-to {
  transform: translateY(-100%);
}

.sidenav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  flex-direction: column;

  @media (min-width: $screen-sm) {
    flex-direction: row;
  }
}
</style>
