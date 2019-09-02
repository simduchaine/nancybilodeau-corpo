// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import "~/assets/sass/styles.scss";
import VueTypedJs from "vue-typed-js";

import DefaultLayout from "~/layouts/Default.vue";
import HomeLayout from "~/layouts/Home.vue";
import EnhomeLayout from "~/layouts/HomeEn.vue";
import EnglishLayout from "~/layouts/DefaultEn.vue";

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.component("HomeLayout", HomeLayout);
  Vue.component("Enhome", EnhomeLayout);
  Vue.component("EnglishLayout", EnglishLayout);
  Vue.use(VueTypedJs);
  // Add atributes to BODY tag
  head.bodyAttrs = { class: "has-navbar-fixed-top" };
  // Add attributes to HTML tag
  head.htmlAttrs = { lang: "fr_CA" };
}
