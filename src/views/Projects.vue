<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <div class="projects">
      <h1>Projects</h1>

      <section class="row">
        <v-col lg="3" md="6" xs="12" class="my-2">
          <v-card outlined height="400px" class="d-flex flex-column">
            <v-img
              height="200px"
              contain
              src="@/assets/images/indickeyboard.png"
            >
            </v-img>

            <v-card-title>Indic Keyboard</v-card-title>

            <v-card-text class="text--primary flex-grow-1">
              Award-winning Indian Language keyboard application for Android
              phones that supports 23 languages.
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col lg="3" md="6" xs="12" class="my-2">
          <v-card outlined height="400px" class="d-flex flex-column">
            <v-card-title>Varnam</v-card-title>

            <v-card-text class="text--primary flex-grow-1">
              Varnam is a cross platform predictive transliterator for Indic
              languages. Varnam aims at providing consistent input experience
              across different platforms in almost all indic languages.
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col lg="3" md="6" xs="12" class="my-2">
          <v-card outlined height="400px" class="d-flex flex-column">
            <v-card-title>Libindic</v-card-title>

            <v-card-text class="text--primary flex-grow-1">
              Libindic is a web platform to host Free Software language
              processing applications. It consists of a web framework and a set
              of applications for processing Indian languages. It is a platform
              for porting existing and upcoming language processing applications
              to the web.
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col lg="3" md="6" xs="12" class="my-2">
          <v-card outlined height="400px" class="d-flex flex-column">
            <v-card-title>Dhvani</v-card-title>

            <v-card-text class="text--primary flex-grow-1">
              Dhvani is a text to speech system designed for Indian Languages.
              It is helpful for the visually challenged users as a screenreader
              in their mother tongue. Currently dhvani is capable of generating
              intelligible speech for Bengali, Gujarati, Hindi, Kannada,
              Malayalam, Marathi, Oriya, Panjabi, Tamil, Telugu,
              Pashto(experimental)
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col lg="3" md="6" xs="12" class="my-2">
          <v-card outlined height="400px" class="d-flex flex-column">
            <v-card-title>ibus-sharada-braille</v-card-title>

            <v-card-text class="text--primary flex-grow-1">
              ibus-sharada-braille(ISB) is an ibus input engine based on six key
              approach of braille. It currently supports seven languages
              English, Malayalam, Hindi, Kannada, Tamil, French, and Spanish.
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col lg="3" md="6" xs="12" class="my-2">
          <v-card outlined height="400px" class="d-flex flex-column">
            <v-card-title>Grandham</v-card-title>

            <v-card-text class="text--primary flex-grow-1">
              Grandham.org is an effort to build crowdsourced bibliography
              datapool. It suppports all indian languages and have interfaces
              and apis fo library, publishers and general public. The
              Malayalagrandham dataset the biggest bibliography data set in
              malayalam and may be the largest malayalam Open data archive.
            </v-card-text>

            <v-card-actions>
              <v-btn color="primary" text>
                Details
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </section>
    </div>
  </v-container>
</template>
