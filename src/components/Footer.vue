<template>
  <footer class="footer">
    <div class="container is-fluid">
      <div class="columns">
        <div class="column is-narrow">
          <g-image src="~/assets/img/nancy-bilodeau-logo.svg" />
        </div>
        <div class="column is-half"></div>
        <div class="column is-one-third">
          <!-- Begin Mailchimp Signup Form -->
          <form
            action="https://nancybilodeau.us20.list-manage.com/subscribe/post?u=23c00cdf65b51791bb6e5bda3&amp;id=16ac9ef9aa"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div class="mc-field-group">
              <label for="EMAIL">S'inscrire à l'infolettre</label>
              <input
                type="email"
                value
                name="EMAIL"
                class="required email input"
                id="mce-EMAIL"
                placeholder="Adresse Courriel"
              />
              <input
                type="submit"
                value="Soumettre"
                name="subscribe"
                id="mc-embedded-subscribe"
                class="button"
              />
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_23c00cdf65b51791bb6e5bda3_16ac9ef9aa" tabindex="-1" value />
            </div>
          </form>
          <!--End mc_embed_signup-->
        </div>
      </div>
      <div class="columns">
        <div class="column is-one-quarter is-size-7">©Nancy Bilodeau 2019. Tous droits réservés.</div>
        <div class="column"></div>
        <!-- <div class="column is-narrow is-size-7">Termes & Conditions Confidentialité Cookies</div> -->
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
/* footer .columns:not(:last-child) {
  padding-bottom: 2rem;
} */

.icons {
  margin: 0 0.5rem;
}

#mc-embedded-subscribe-form {
  input {
    display: inline-block;
    max-width: 77%;
    margin-bottom: 1rem;
  }
  .button {
    margin: 0 0.4rem 0;
    padding: 0 10px;
    background: #d05208;
    color: white;
    border: none;
    &:hover {
      color: white;
      background: #3b3049;
    }
  }
}
</style>

