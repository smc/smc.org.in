<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <div class="projects">
      <h1 class="display-3 my-10" v-i18n="'menu-projects'"></h1>

      <section class="row">
        <v-col
          cols="12"
          xl="3"
          lg="4"
          md="6"
          class="my-2"
          v-for="project in projects"
          :key="project.title"
        >
          <v-card outlined class="d-flex flex-column" hover>
            <v-img
              v-if="project.logo"
              height="200px"
              contain
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

        <v-col lg="3" md="6" xs="12" class="my-2">
          <v-card outlined class="d-flex flex-column" hover>
            <v-card-title>Grandham</v-card-title>

            <v-card-text class="text--primary flex-grow-1"> </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text href="https://grandham.in/">
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </section>
    </div>
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
}
</style>

<script>
export default {
  data: () => ({
    projects: [
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
      },
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
  })
};
</script>
