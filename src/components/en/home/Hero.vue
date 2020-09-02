<template>
  <section class="hero is-primary is-medium has-background">
    <g-image class="hero-background is-transparent" :src="$static.HeroImg.hero_image" />
    <div class="hero-body">
      <div class="container">
        <vue-typed-js
          :strings="['results', 'retention', 'performance', 'value', 'commitment', 'loyalty', 'time', 'satisfaction', 'dynamism', 'harmony']"
          :loop="true"
          :typeSpeed="150"
          :startDelay="1000"
          :backDelay="2000"
        >
          <h1 class="title is-1 has-text-right">
            <span>+</span> of
            <br />
            <span class="typing"></span>
          </h1>
        </vue-typed-js>
        <div>
          <g-image src="../../../assets/img/smile2.svg" style="margin: 0.5rem; " />
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query HeroImg {
  HeroImg: settings(path: "/data/site") {
    hero_image (width: 1920, height: 1080)
  }
}
</static-query>

<script>
export default {
  name: "Hero",
};
</script>

<style lang="scss">
/* .hero {
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
  color: #c4e0ec; //#3b3049
} */
</style>

