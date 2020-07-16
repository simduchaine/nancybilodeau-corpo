<template>
  <footer class="footer">
    <div class="container is-fluid">
      <!-- <div class="columns">
        <div class="column is-narrow">
          <g-image src="~/assets/img/nancy-bilodeau-logo-white.svg" />
        </div>
        <div class="column"></div>
      </div>-->
      <div class="columns">
        <div
          class="column is-size-7"
        >©Nancy Bilodeau {{ new Date().getFullYear() }}. All rights reserved.</div>
        <div class="column">
          <a href="http://eepurl.com/gpZ2jv" class="button">Subscribe to our newsletter</a>
        </div>
        <div class="column is-narrow brands">
          <a href="https://www.facebook.com/NancyBilodeauCoaching/">
            <font-awesome class="icons" :icon="['fab', 'facebook-f']" size="xs" />
          </a>
          <a href="https://www.youtube.com/channel/UCel4Y254TeW2NpNyw37RTcA">
            <font-awesome class="icons" :icon="['fab', 'youtube']" size="xs" />
          </a>
          <a href="https://ca.linkedin.com/in/nancybilodeau">
            <font-awesome class="icons" :icon="['fab', 'linkedin-in']" size="xs" />
          </a>
          <a href="https://www.pinterest.ca/nbilode/">
            <font-awesome class="icons" :icon="['fab', 'pinterest']" size="xs" />
          </a>
          <a href="https://www.instagram.com/nancybilodeauinsta/">
            <font-awesome class="icons" :icon="['fab', 'instagram']" size="xs" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>


