<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <h1 class="display-3 my-10" v-i18n="'menu-research'"></h1>

    <article>
      <section id="papers" class="my-4">
        <h2>Published papers</h2>
        <section class="row">
          <v-col cols="12" lg="6">
            <v-card outlined hover>
              <v-card-title>
                Finite State Transducer based Morphology analysis for Malayalam
                Language
              </v-card-title>
              <v-card-subtitle>Santhosh Thottingal</v-card-subtitle>
              <v-card-text>
                Proceedings of the 2nd Workshop on Technologies for MT of Low
                Resource Languages, European Association for Machine
                Translation, August 20, Dublin, Ireland.
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn text href="https://www.aclweb.org/anthology/W19-6801/"
                  >Read the paper</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card outlined hover>
              <v-card-title>
                Malayalam Orthographic Reforms:Impact on Language and Popular
                Culture
              </v-card-title>
              <v-card-subtitle
                >Santhosh Thottingal, Kavya Manohar</v-card-subtitle
              >
              <v-card-text>
                Proceedings of
                <a href="http://conferences.telecom-bretagne.eu/grafematik/"
                  >grafematik</a
                >: Graphemics in the 21st century—From graphemes to knowledge,
                Pôle numérique Brest Iroise at Brest, France, on June 14-15,
                2018.
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  href="https://thottingal.in/documents/Malayalam%20Orthographic%20Reforms_%20Impact%20on%20Language%20and%20Popular%20Culture.pdf"
                  >Read the paper</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card outlined hover>
              <v-card-title>
                Spiral splines in typeface design: A case study of Manjari
                Malayalam typeface
              </v-card-title>
              <v-card-subtitle
                >Santhosh Thottingal, Kavya Manohar</v-card-subtitle
              >
              <v-card-text>
                Proceedings of
                <a href="http://www.typoday.in/">Typoday 2018</a>, University of
                Mumbai. March 2018.
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  href="https://thottingal.in/documents/Spiral-Splines-Manjari.pdf"
                  >Read the paper</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </section>
      </section>
      <section id="studies" class="my-4">
        <h2>Malayalam computational linguistics</h2>
        <section class="row">
          <v-col cols="12" lg="6">
            <v-card outlined hover>
              <v-card-title>
                Phonetic description of Malayalam consonants</v-card-title
              >
              <v-card-subtitle>Kavya Manohar</v-card-subtitle>
              <v-card-text>
                A study of phonetic description of Malayalam consonants based on
                existing methods and IPA. Published on January 18, 2020
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  href="https://kavyamanohar.com/post/malayalam-ipa-consonants/"
                  >Read the study</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card outlined hover>
              <v-card-title> Information, Entropy and Malayalam</v-card-title>
              <v-card-subtitle>Kavya Manohar</v-card-subtitle>
              <v-card-text>
                What is the information Entropy of Malayalam language? How to
                calculate it? Published on July 18, 2019
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  href="https://kavyamanohar.com/post/malayalam-ipa-consonants/"
                  >Read</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
          <v-col cols="12" lg="6">
            <v-card outlined hover>
              <v-card-title
                >A finite state Transducer based approach for Malayalam
                phonetics analysis</v-card-title
              >
              <v-card-subtitle>Kavya Manohar</v-card-subtitle>
              <v-card-text>
                A system to analyse the phonology of Malayalam. Published on
                October 2, 2018
              </v-card-text>
              <v-card-actions class="justify-end">
                <v-btn
                  text
                  href="https://kavyamanohar.com/post/malayalam-phonetic-analyser/"
                  >Read</v-btn
                >
                <v-btn text href="https://phon.smc.org.in"
                  >Malayalam Phonetic Analyser</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-col>
        </section>
      </section>
    </article>
  </v-container>
</template>
