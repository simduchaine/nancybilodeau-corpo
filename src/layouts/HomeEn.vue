<template>
  <div>
    <custom-header />

    <!-- <hero /> -->

    <slot />

    <custom-footer />
  </div>
</template>

<script>
import customFooter from "~/components/en/Footer.vue";
import customHeader from "~/components/en/Header.vue";
import Hero from "~/components/en/home/Hero.vue";

export default {
  components: {
    customFooter,
    customHeader,
    Hero,
  },
};
</script>