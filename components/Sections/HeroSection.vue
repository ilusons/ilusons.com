<template>
  <div class="container">
    <section class="hero" id="hero">
      <p>
        <mark>
          Hi,
          <br>I'm
          <em>Neeraj</em>
          <br>a
          <em>Software Developer</em>.
        </mark>
        <br>
        <span class="arrow">↓</span>
      </p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.hero {
  width: 100%;
  text-align: center;
  position: relative;
  margin: 6rem 0;

  p {
    text-align: left;
    padding: 8rem 0;
  }

  mark {
    font-size: 3.5rem;
    font-weight: 700;
    color: $primary-lighter;
    background-color: $background-primary;

    em {
      color: $primary;
      font-style: normal;
    }
  }

  .arrow {
    font-size: 7rem;
    font-weight: 700;
    color: $primary-lighter;
  }
}
</style>

