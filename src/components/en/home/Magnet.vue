<template>
  <div class="container">
    <div class="columns is-marginless is-centered">
      <div class="column is-half has-text-centered" style="padding-top:2rem">
        <h1 v-html="$static.homeEn.title" class="title is-size-6" style="margin-bottom: 0"></h1>
        <div v-html="$static.homeEn.content" class="is-size-6"></div>
      </div>
    </div>

    <!-- Begin Mailchimp Signup Form -->
    <div
      id="mc_embed_signup"
      class="columns is-centered"
      style="margin-top: -2.25em;padding-bottom:1rem"
    >
      <div class="column is-full">
        <form
          action="https://nancybilodeau.us20.list-manage.com/subscribe/post?u=23c00cdf65b51791bb6e5bda3&amp;id=16ac9ef9aa"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div class="field is-grouped is-grouped-centered">
              <div class="mc-field-group">
                <div class="field">
                  <div class="control">
                    <input
                      type="text"
                      value
                      name="FNAME"
                      class="input"
                      id="mce-FNAME"
                      placeholder="First Name"
                    />
                  </div>
                </div>
              </div>
              <div class="mc-field-group">
                <div class="field">
                  <div class="control">
                    <input
                      type="text"
                      value
                      name="LNAME"
                      class="input"
                      id="mce-LNAME"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
              </div>
              <div class="mc-field-group">
                <div class="field">
                  <div class="control">
                    <input
                      type="email"
                      value
                      name="EMAIL"
                      class="required email input"
                      id="mce-EMAIL"
                      placeholder="Email"
                    />
                  </div>
                </div>
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button"
                />
              </div>
            </div>

            <div class="mc-field-group input-group" hidden>
              <input
                type="checkbox"
                value="8"
                name="group[6174][8]"
                id="mce-group[6174]-6174-1"
                checked
              />
              <label for="mce-group[6174]-6174-1">Website_Lead_Gen_Corpo</label>
            </div>
            <div id="mce-responses" class="clear">
              <div class="response" id="mce-error-response" style="display:none"></div>
              <div class="response" id="mce-success-response" style="display:none"></div>
            </div>
            <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
            <div style="position: absolute; left: -5000px;" aria-hidden="true">
              <input type="text" name="b_23c00cdf65b51791bb6e5bda3_16ac9ef9aa" tabindex="-1" value />
            </div>
          </div>
        </form>
      </div>
    </div>
    <!--End mc_embed_signup-->
  </div>
</template>

<static-query>
query {
  homeEn(path: "/data-en/home/magnet") {
    title
    content
  }
}
</static-query>

<script>
export default {
  name: "Magnet"
};
</script>

<style lang="scss" scoped>
input:not(.button) {
  background-color: white;
}

::placeholder {
  opacity: 0.8;
  color: #363636;
}

.button {
  padding-top: 0.2em;
  //margin-top: 0.5em;
}
.control {
  margin-bottom: 0;
  margin-right: 0.25rem;
}
</style>
