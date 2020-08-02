import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg",
  },
  theme: {
    themes: {
      light: {
        primary: "#00A7D0",
      },
      dark: {
        primary: "#00A7D0",
      },
    },
    dark:
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches,
  },
});
