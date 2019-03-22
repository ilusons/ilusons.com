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
          <em>Software Developer</em>.
          <br>I make softwares
          <em>
            <span class="sm">for money</span>
          </em>
          <br>and they actually work.
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
    color: $primary-lighter;
    background-color: $background-primary;

    em {
      color: $primary;
      font-style: normal;

      .sm {
        font-size: 1rem;
        position: absolute;
        margin-top: -0.1rem;
      }
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

