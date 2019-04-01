<template>
  <footer class="footer">
    <nav>
      <NavItems/>

      <a href="#top" class="logo-link">
        <img src="~/assets/images/logo.svg" alt="Logo" class="logo">
      </a>

      <p class="copyright">© {{year}} ilusons.</p>
    </nav>
  </footer>
</template>
<script>
import NavItems from "~/components/Navigation/NavItems";

export default {
  components: {
    NavItems
  },

  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style lang="scss">
.footer {
  text-align: center;
  padding: 1rem 2rem;
  padding-top: 5rem;

  .logo-link {
    margin: 2rem 0;
  }

  .logo {
    width: 4.5rem;
    height: 4.5rem;
    margin-top: 1.2rem;
  }

  .copyright {
    padding-top: 1.2rem;
  }
}
</style>
