<template>
  <div class="container">
    <div id="particles"></div>
    <section id="hero" class="hero feature">
      <p>
        <mark>
          Hi,
          <br>I'm
          <em>Neeraj</em>,
          <br>a
          <em>Full-stack Engineer</em>.
          <br>
        </mark>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  mounted() {
    try {
      let options = {
        color: "#c1c1c1",
        interactive: false,
        speed: "slow",
        density: "high"
      };
      let particleCanvas = new this.$particles(
        document.getElementById("particles"),
        options
      );
    } catch (e) {
      console.log(e);
    }
  }
};
</script>

<style lang="scss">
.hero {
  pointer-events: visible;

  mark {
    font-size: 2.9rem;
    color: $primary-lighter;
    background-color: $background-primary;

    em {
      color: $primary;
      font-style: normal;
    }
  }
}

#particles {
  position: absolute !important;
  display: inline-block;
  left: 0;
  top: 0;
  width: 100%;
  min-height: 420px;
  height: 100%;
  z-index: -1;
}
</style>

