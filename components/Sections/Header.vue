<template>
  <header class="header">
    <div class="container">
      <nuxt-link to="/" class="logo-link link">
        <img src="~/assets/images/logo.svg" alt="Logo" class="logo">
      </nuxt-link>

      <nav>
        <NavItems/>
      </nav>
    </div>
  </header>
</template>

<script>
import NavItems from "~/components/Navigation/NavItems";

export default {
  components: {
    NavItems
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
  -webkit-box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
  font-weight: bold;

  .logo {
    width: 70%;
    height: 70%;
    opacity: 0.6;
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
}

.spacer {
  flex: 1;
}
</style>
