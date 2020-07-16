<template>
  <div>
    <custom-header />

    <transition name="fade" appear>
      <div style="margin-top: 3rem;">
        <slot />
      </div>
    </transition>

    <custom-footer />
  </div>
</template>

<script>
import customFooter from "~/components/Footer.vue";
import customHeader from "~/components/Header.vue";

export default {
  components: {
    customFooter,
    customHeader
  }
};
</script>

<style>
footer {
  margin-top: -0.4rem;
}

p,
ul {
  padding-bottom: 1.5rem;
}

li {
  padding-bottom: 0.2rem;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-enter {
  opacity: 0;
}

/* .input {
  border-top: 0;
  border-left: 0;
  border-right: 0;
} */

/* ul {
    list-style: disc;
    list-style-position: inside;
    padding-bottom: 1.5rem;

    li {
      padding-bottom: 0.2rem;
    }
  } */
</style>
