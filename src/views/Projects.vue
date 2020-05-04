<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <article class="projects">
      <h1 class="display-3 my-10" v-i18n="'menu-projects'"></h1>

      <section v-for="section in projects" :key="section.heading">
        <h2>{{ section.heading }}</h2>

        <section class="row">
          <v-col
            cols="12"
            xl="3"
            lg="4"
            md="6"
            class="my-2"
            v-for="project in section.list"
            :key="project.title"
          >
            <v-card outlined class="d-flex flex-column">
              <v-img
                v-if="project.logo"
                :contain="!project.logo_style_cover"
                :cover="project.logo_style_cover"
                :src="project.logo"
              />
              <v-card-title>{{ project.title }}</v-card-title>
              <v-card-text class="text--primary flex-grow-1">
                {{ project.description }}
              </v-card-text>

              <v-card-actions>
                <v-btn
                  color="primary"
                  text
                  v-for="link in project.links"
                  :key="link.text"
                  :href="link.url"
                >
                  {{ link.text }}
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </section>
      </section>
    </article>
  </v-container>
</template>

<style lang="scss">
@import "~vuetify/src/styles/settings/_variables";

.projects {
  .v-card {
    overflow: hidden;
    height: 100%;

    @media #{map-get($display-breakpoints, 'md-and-up')} {
      height: 400px;
    }
  }

  .v-image {
    height: 200px;
    max-height: 200px;
  }
}
</style>

<script>
export default {
  data: () => ({
    projects: [
      {
        heading: "Input Tools",
        list: [
          {
            logo: require("@/assets/images/indickeyboard.png"),
            title: "Indic Keyboard",
            description: `
              Award-winning Indian Language keyboard application for Android
              phones that supports 23 languages.
            `,
            links: [
              {
                text: "Details",
                url: "https://indic.app"
              }
            ]
          },
          {
            title: "Varnam",
            description: `
              Varnam is a cross platform predictive transliterator for Indic
              languages. Varnam aims at providing consistent input experience
              across different platforms in almost all indic languages.
            `,
            links: [
              {
                text: "Details",
                url: "https://www.varnamproject.com/"
              }
            ]
          }
        ]
      },
      {
        heading: "Accessibility",
        list: [
          {
            title: "Dhvani",
            description: `
              Dhvani is a text to speech system designed for Indian Languages.
              It is helpful for the visually challenged users as a screenreader
              in their mother tongue. Currently dhvani is capable of generating
              intelligible speech for Bengali, Gujarati, Hindi, Kannada,
              Malayalam, Marathi, Oriya, Panjabi, Tamil, Telugu,
              Pashto(experimental)
            `,
            links: [
              {
                text: "Details",
                url: "http://dhvani.sourceforge.net/"
              }
            ]
          },
          {
            title: "ibus-sharada-braille",
            description: `
              ibus-sharada-braille(ISB) is an ibus input engine based on six key
              approach of braille. It currently supports seven languages
              English, Malayalam, Hindi, Kannada, Tamil, French, and Spanish.
            `,
            links: [
              {
                text: "Details",
                url: "https://github.com/Nalin-x-Linux/ibus-sharada-braille"
              }
            ]
          }
        ]
      },
      {
        heading: "Web",
        list: [
          {
            title: "Libindic",
            description: `
              Libindic is a web platform to host Free Software language
              processing applications. It consists of a web framework and a set
              of applications for processing Indian languages. It is a platform
              for porting existing and upcoming language processing applications
              to the web.
            `,
            links: [
              {
                text: "Details",
                url: "https://libindic.org/"
              }
            ]
          },
          {
            title: "Grandham",
            description: `
              Grandham.org is an effort to build crowdsourced bibliography
              datapool. It suppports all indian languages and have interfaces
              and apis fo library, publishers and general public. The
              Malayalagrandham dataset the biggest bibliography data set in
              malayalam and may be the largest malayalam Open data archive.
            `,
            links: [
              {
                text: "Details",
                url: "https://grandham.in/"
              }
            ]
          }
        ]
      },
      {
        heading: "Web Extensions",
        list: [
          {
            title: "Malayalam Fonts",
            logo:
              "https://addons.cdn.mozilla.net/user-media/previews/full/202/202178.png",
            logo_style_cover: true,
            description: `
              This addon will help you to choose Unicode Malayalam fonts for the websites you visit,
              without installing anything on your phone or computer.
            `,
            links: [
              {
                text: "Firefox",
                url:
                  "https://addons.mozilla.org/en-US/firefox/addon/malayalam-fonts/"
              },
              {
                text: "Chrome",
                url:
                  "https://chrome.google.com/webstore/detail/malayalam-font/jgdfkpocgoliiikomkacimfdkedjdgfo"
              }
            ]
          }
        ]
      },
      {
        heading: "Mobile",
        list: [
          {
            title: "Magisk Malayalam Fonts",
            logo:
              "https://blog.smc.org.in/content/images/2019/03/magisk-app1.jpg",
            logo_style_cover: true,
            description: `
              Set the default Malayalam font for rooted Android devices.
            `,
            links: [
              {
                text: "Download",
                url: "https://j15h.nu/downloads/magisk-malayalam-fonts-v2.0.zip"
              },
              {
                text: "Source",
                url: "https://gitlab.com/smc/magisk-malayalam-fonts"
              },
              {
                text: "How-To",
                url:
                  "https://blog.smc.org.in/installing-smc-fonts-on-android-devices/"
              }
            ]
          },
          {
            title: "Akshara Mazha",
            logo:
              "https://lh3.googleusercontent.com/wakTTNJjIbcs8j-en4pEkvoiRas7eiF1nEgSgIrHtQuAuMjqjgT2wH3bqFP-aMwvlZ0=w1440-h620",
            logo_style_cover: true,
            description: `
              Open source live wallpaper with Malayalam letters streaming down the screen like you have seen in the popular movie Matrix.
            `,
            links: [
              {
                text: "Download",
                url:
                  "https://play.google.com/store/apps/details?id=in.androidtweak.rain"
              },
              {
                text: "Source",
                url: "https://gitlab.com/jishnu7/Akshara-Mazha"
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>
