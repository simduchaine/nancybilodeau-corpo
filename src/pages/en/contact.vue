<template>
  <English-Layout>
    <section class="offset-bg-blue section">
      <div class="container">
        <h1 class="title">Contact</h1>
        <iframe
          width="1350"
          height="450"
          frameborder="0"
          style="border:0; height:450px; margin-bottom: 1.5rem;"
          src="https://www.google.com/maps/embed/v1/view?zoom=15&center=46.7329311%2C-71.2630347&key=AIzaSyBi6IpWLQlVCG16Y7KtdCdfCBrBFTR9UkM"
          allowfullscreen
        ></iframe>
        <div class="columns">
          <div class="column">
            <h2 class="title is-5">Send a message</h2>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div class="field">
                <label class="label">Name</label>
                <div class="control">
                  <input class="input" type="text" name="nom" />
                </div>
              </div>

              <div class="field">
                <label class="label">Email</label>
                <div class="control">
                  <input class="input" type="email" name="email" />
                </div>
              </div>

              <div class="field">
                <label class="label">Message</label>
                <div class="control">
                  <textarea class="textarea" name="message"></textarea>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <button type="submit" class="button submit-btn full-btn">Submit</button>
                </div>
              </div>
            </form>
          </div>
          <div id="contact-info" class="column is-one-third">
            <h2 class="title is-5">Coordinates</h2>
            <div>Located close to Avril in St-Romuald.</div>
            <div>
              <font-awesome :icon="['fa', 'phone']" class="contact-icon" />
              <a href="tel:418-955-9602">418-955-9602</a>
            </div>
            <div>
              <font-awesome :icon="['fa', 'envelope']" class="contact-icon" />
              <a href="mailto:nancy@nancybilodeau.com">nancy@nancybilodeau.com</a>
            </div>
            <div>
              <a
                href="https://www.gorendezvous.com/homepage/111690"
                class="button full-btn"
                style="border-width:1px"
              >Make an appointment</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </English-Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Contact",
    htmlAttrs: {
      lang: "en"
    }
  }
};
</script>


