<template>
  <section class="hero is-primary is-medium has-background">
    <g-image class="hero-background is-transparent" src="../../assets/img/hero-corpo.jpg" />
    <div class="hero-body">
      <div class="container">
        <vue-typed-js
          :strings="['résultats', 'rétention', 'performance', 'valeur', 'engagement', 'loyauté', 'temps', 'satisfaction', 'dynamisme', 'harmonie']"
          :loop="true"
          :typeSpeed="150"
          :startDelay="1000"
          :backDelay="2000"
        >
          <h1 class="title is-1 has-text-right">
            <span>+</span> de
            <br />
            <span class="typing"></span>
          </h1>
        </vue-typed-js>
        <div>
          <g-image src="../../assets/img/smile2.svg" style="margin: 0.5rem; " />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style lang="scss">
.hero {
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
      opacity: 0.5;
    }
  }

  &.is-medium {
    .hero-body {
      padding-bottom: 4rem;
      padding-top: 4rem;
    }
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .title {
    font-size: 5rem;
  }
}

.typing {
  color: #3b3049;
}
</style>

