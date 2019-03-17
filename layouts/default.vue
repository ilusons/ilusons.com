<template>
  <div>
    <Header/>
    <nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Header from "~/components/Sections/Header";
import Footer from "~/components/Sections/Footer";

export default {
  components: {
    Header,
    Footer
  }
};
</script>
