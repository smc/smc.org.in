<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <article class="projects">
      <h1 class="display-3 my-10" v-i18n="'menu-projects'"></h1>

      <section v-for="section in projects" :key="section.heading" class="mb-10">
        <h2>{{ section.heading }}</h2>

        <section class="row my-2">
          <v-col
            cols="12"
            xl="3"
            lg="4"
            md="6"
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
              <v-card-subtitle v-if="project.subtitle">
                {{ project.subtitle }}
              </v-card-subtitle>
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
      min-height: 400px;
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
              Indic Keyboard is a MOSS Award winning, privacy aware versatile keyboard for Android users who wish to use Indic and Indian languages to type messages, compose emails and generally prefer to use them in addition to English on their phone. You can use this application to type anywhere in your phone that you would normally type in English. It currently supports 23 languages and 57 layouts.
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
                url: "https://gitlab.com/smc/magisk-malayalam-fonts/-/releases"
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
      },
      {
        heading: "Programming Libraries",
        list: [
          {
            title: "Indic Trans",
            description: `
              The project aims on adding a state-of-the-art transliteration module for cross transliterations among all Indian languages including English and Urdu.
              The module currently supports the following languages:
              Hindi, Bengali, Gujarati, Punjabi, Malayalam, Kannada, Tamil, Telugu, Oriya, Marathi, Assamese, Konkani, Bodo, Nepali, Urdu and English
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/indic-trans"
              },
              {
                text: "Documentation",
                url: "https://indic-trans.readthedocs.io/en/latest/"
              }
            ]
          },
          {
            title: "Inexact Search",
            subtitle: "Approximate String Search",
            description: `
              By mixing both written like(edit distance) and sounds like(soundex), we achieve an efficient aproximate string searching.
              This application is capable of cross language string search too.
              That means, you can search Hindi words in Malayalam text.
              If there is any Malayalam word, which is approximate transliteration of hindi word, or sounds alike the hindi words, it will be returned as an approximate match.
              The "written like" algorithm used here is a bigram average algorithm.
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/inexactsearch"
              },
              {
                text: "Web",
                url: "https://libindic.org/ApproxSearch"
              }
            ]
          },
          {
            title: "Shingling",
            subtitle: "Indic W-shingling Library",
            description: `
               A w-shingling is a set of unique "shingles"—contiguous subsequences of tokens in a document—that can be used to gauge the similarity of two documents. The w denotes the number of tokens in each shingle in the set.
            This library supports English, Hindi, Malayalam, Kannada and Bengali.
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/shingling"
              },
              {
                text: "Web",
                url: "https://libindic.org/Shingling"
              }
            ]
          },
          {
            title: "Text Similarity",
            description: `
               This module will compare two texts for their similarity. Based on the similarity it will give a number between 0 and 1. 1 means both text are similary. 0 means texts are completely different. A value in between 0 and 1 indicates how much they are similar.

                The algorithm uses an n-grams model and cosine similarity.
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/text-similarity"
              },
              {
                text: "Web",
                url: "https://libindic.org/Similar%20Texts"
              }
            ]
          },
          {
            title: "Hyphenation",
            subtitle: "Hyphenate Text",
            description: `
             Hyphenation is the process inserting hyphens in between the syllables of a word so that when the text is justified, maximum space is utilized.
              Supported Languages: English, Hindi, Malayalam, Tamil, Telugu, Kannada, Oriya, Bengali, Gujarati, Panjabi, Marathi, Sanskrit, Assamese, Kashmeeri, Afrikaans, German, French, Croatian, Hungarian, Italian, Zulu
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/hyphenation"
              },
              {
                text: "Web",
                url: "https://libindic.org/Hyphenate"
              }
            ]
          },
          {
            title: "ucasort",
            subtitle: "Module to sort words basded on linguistics",
            description: `
             Unicode Collation Algorithm(UCA) based sorting for all languages defined in Unicode. The collation weights used in this application is a modified version of Default Unicode Collation Element Table (DUCET). It use the default weights defined by Unicode. Malayalam and Tamil sorting is compatible with GNU C library collation definition.
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/ucasort"
              },
              {
                text: "Web",
                url: "https://libindic.org/UCA%20Sort"
              }
            ]
          },
          {
            title: "Fortune",
            subtitle: "Fortune Cookies",
            description: `
              random quotes from chanakya, thirukkural and malayalam proverbs
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/indicfortune"
              },
              {
                text: "Web",
                url: "https://libindic.org/Fortune"
              }
            ]
          },
          {
            title: "Spellchecker",
            description: `
             LibIndic's spellchecker module may be used to detect spelling mistakes in a word. If a spelling mistake is found, it generates valid root words as suggestions that have a higher probability being the word user actually intended to use.
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/spellchecker"
              },
              {
                text: "Web",
                url: "https://libindic.org/SpellCheck"
              }
            ]
          },
          {
            title: "Syllabifier",
            description: `
             LibIndic's syllabifier module may be used to split words into their constituent syllables. It currently works for Malayalam, Kannada, Bengali, Tamil, Hindi and English.
            `,
            links: [
              {
                text: "Source",
                url: "https://github.com/libindic/syllabalizer"
              },
              {
                text: "Web",
                url: "https://libindic.org/Syllabalizer"
              }
            ]
          },
          {
            title: "",
            description: `
            `,
            links: [
              {
                text: "Source",
                url: ""
              },
              {
                text: "Web",
                url: ""
              }
            ]
          },
          {
            title: "",
            description: `
            `,
            links: [
              {
                text: "Source",
                url: ""
              },
              {
                text: "Web",
                url: ""
              }
            ]
          }
        ]
      }
    ]
  })
};
</script>
