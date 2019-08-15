import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faFacebookF,
  faYoutube,
  faLinkedinIn
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

library.add(faFacebookF, faYoutube, faLinkedinIn, faPhone, faEnvelope);

export default function(Vue) {
  Vue.component("font-awesome", FontAwesomeIcon);
}
