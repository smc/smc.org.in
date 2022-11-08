
// Styles
import 'vuetify/styles'
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

// Composables
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    }
  },
  theme: {
    defaultTheme: 'smctheme',
    themes: {
      smctheme: {
        dark:   window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches,
        colors: {
          primary: "#00A7D0",
        }
      },
    },
  },
});

