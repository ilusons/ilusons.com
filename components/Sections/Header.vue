<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/" class="logo-link link">
        <img src="~/assets/images/logo.svg" alt="Logo" class="logo">
      </nuxt-link>
      <SideNavToggle @toggle="$emit('sidenavToggle')"/>
      <nav>
        <NavItems/>
      </nav>
    </div>
  </header>
</template>

<script>
import NavItems from "~/components/Navigation/NavItems";
import SideNavToggle from "~/components/Navigation/SideNavToggle";

export default {
  components: {
    NavItems,
    SideNavToggle
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 8.5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 100;

  .logo {
    width: 70%;
    height: 70%;
    opacity: 0.6;
    margin-top: 2rem;
    margin-left: -2rem;
    transition: opacity 0.25s cubic-bezier(0.694, 0.048, 0.335, 1) 0.15s;
  }

  .logo:hover {
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    display: none;
  }
  @media (min-width: $screen-sm) {
    nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
}
</style>
