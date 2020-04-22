import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import i18n from "vue-banana-i18n";

Vue.config.productionTip = false;

const locale = localStorage.getItem(
  "smc.org.in.locale",
  navigator.language.split("-")[0] || "en"
);
const finalFallback = "en";
const messages = {};

try {
  messages[finalFallback] = require(`@/assets/i18n/${finalFallback}.json`);
  messages[locale] = require(`@/assets/i18n/${locale}.json`);
} catch {
  // Not localized at all.
}

Vue.use(i18n, {
  locale,
  finalFallback,
  messages
});

new Vue({
  el: "#app",
  router,
  vuetify,
  render: h => h(App),
  created() {
    if (sessionStorage.redirect) {
      const redirect = sessionStorage.redirect;
      delete sessionStorage.redirect;
      this.$router.push(redirect);
    }
  }
});
