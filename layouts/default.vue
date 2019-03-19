<template>
  <div>
    <Header @sidenavToggle="displaySidenav = !displaySidenav"/>
    <SideNav :show="displaySidenav" @close="displaySidenav = false"/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Sections/Header";
import Footer from "~/components/Sections/Footer";
import SideNav from "~/components/Navigation/SideNav";

export default {
  components: {
    Header,
    Footer,
    SideNav
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>
