<template>
  <footer class="footer">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-narrow">
          <g-image src="~/assets/img/nancy-bilodeau-logo-white.svg" />
        </div>
        <div class="column"></div>
      </div>
      <div class="columns">
        <div class="column is-size-7">©Nancy Bilodeau 2019. All rights reserved.</div>
        <div class="column">
          <a href="http://eepurl.com/gpZ2jv" class="button">Subscribe to our newsletter</a>
        </div>
        <div class="column is-narrow brands">
          <a href="https://www.facebook.com/NancyBilodeauCoaching/">
            <font-awesome class="icons" :icon="['fab', 'facebook-f']" size="md" />
          </a>
          <a href="https://www.youtube.com/channel/UCel4Y254TeW2NpNyw37RTcA">
            <font-awesome class="icons" :icon="['fab', 'youtube']" size="md" />
          </a>
          <a href="https://ca.linkedin.com/in/nancybilodeau">
            <font-awesome class="icons" :icon="['fab', 'linkedin-in']" size="md" />
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

<style lang="scss">
footer {
  color: white;
  .brands {
    a {
      color: white;
      &:hover {
        color: #d05208;
      }
    }
  }
  .button {
    margin: 0 0.4rem 0;
    padding: 0 10px;
    background: #d05208;
    color: white;
    border: none;
    &:hover {
      color: #3b3049;
      background: white;
    }
  }
  .column {
    align-self: flex-end;
  }
  .icons {
    margin: 0 0.5rem;
  }
}
</style>

