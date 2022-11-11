// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// Plugins
import vuetify from "./plugins/vuetify";
import router from "./router";
import { createI18n } from "vue-banana-i18n";
import mlmessages from "./assets/i18n/ml.json";
import enmessages from "./assets/i18n/en.json";

const locale =
  localStorage.getItem("smc.org.in.locale") ||
  navigator.language.split("-")[0] ||
  "en";
const finalFallback = "en";
const messages = {};

try {
  messages[locale] = locale == "ml" ? mlmessages : enmessages;
} catch {
  messages[finalFallback] = enmessages;
}

const i18nPlugin = createI18n({
  locale,
  finalFallback,
  messages,
});

createApp(App).use(vuetify).use(i18nPlugin).use(router).mount("#app");
