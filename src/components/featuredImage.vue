<template>
  <section class="hero is-dark is-medium has-background">
    <g-image class="hero-background is-transparent" :src="image" />
    <div class="hero-body">
      <div class="container">
        <h1 class="title is-family-primary">{{ title }}</h1>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "featuredImage",
  props: ["title", "image"]
};
</script>

<style scoped lang="scss">
.hero {
  margin-top: -3em;
  &.has-background {
    position: relative;
    overflow: hidden;
  }

  &-background {
    position: absolute;
    object-fit: cover;
    object-position: center top;
    width: 100%;
    height: 100%;

    &.is-transparent {
      opacity: 0.85;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 10rem;
      padding-top: 10rem;
    }
  }

  .title {
    font-size: 3rem;
    text-align: center;
  }
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>

