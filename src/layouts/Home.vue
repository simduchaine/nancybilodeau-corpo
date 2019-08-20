<template>
  <div>
    <custom-header />

    <hero />

    <slot />

    <custom-footer />
  </div>
</template>

<script>
import customFooter from "~/components/Footer.vue";
import customHeader from "~/components/Header.vue";
import Hero from "~/components/home/Hero.vue";

export default {
  components: {
    customFooter,
    customHeader,
    Hero
  }
};
</script>