<template>
  <v-container class="v-col-xl-8 v-col-sm-10 v-col-xs-12">
    <h1
      v-i18n="'menu-research'"
      class="text-h2 my-10"
    />

    <article>
      <section
        v-for="section in research"
        :id="section.id"
        :key="section.id"
        class="mb-10"
      >
        <h2>{{ section.heading }}</h2>
        <section class="row my-2">
          <v-col
            v-for="entry in section.list"
            :key="entry.title"
            cols="12"
          >
            <v-card outlined>
              <v-card-title v-text="entry.title" />
              <v-card-subtitle v-text="entry.author" />
              <v-card-text v-html="entry.description" />
              <v-card-actions class="justify-end">
                <v-btn
                  v-for="link in entry.links"
                  :key="link.text"
                  text
                  :href="link.url"
                  v-text="link.text"
                />
              </v-card-actions>
            </v-card>
          </v-col>
        </section>
      </section>
    </article>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    research: [
      {
        id: "papers",
        heading: "Published Papers",
        list: [
          {
            title: `
              Quantitative Analysis of Morphological Complexity of Malayalam Language`,
            author: "Kavya Manohar, A. R. Jayan, Rajeev Rajan",
            description: `
              Proceedings of the 23rd International Conference on Text, Speech and Dialogue
              September 8-11, 2020, Brno, Czech Republic.
            `,
            links: [
              {
                text: "Read the paper",
                url: "https://kavyamanohar.com/documents/tsd_morph_complexity_ml.pdf",
              },
            ],
          },
          {
            title: `
              Finite State Transducer based Morphology analysis for Malayalam
              Language
            `,
            author: "Santhosh Thottingal",
            description: `
              Proceedings of the 2nd Workshop on Technologies for MT of Low
              Resource Languages, European Association for Machine
              Translation, August 20, Dublin, Ireland.
            `,
            links: [
              {
                text: "Read the paper",
                url: "https://www.aclweb.org/anthology/W19-6801/",
              },
            ],
          },
          {
            title: `
              Malayalam Orthographic Reforms: Impact on Language and Popular
              Culture
            `,
            author: "Santhosh Thottingal, Kavya Manohar",
            description: `
              Proceedings of
              <a href="http://conferences.telecom-bretagne.eu/grafematik/">grafematik</a>
              : Graphemics in the 21st century—From graphemes to knowledge,
              Pôle numérique Brest Iroise at Brest, France, on June 14-15,
              2018.
            `,
            links: [
              {
                text: "Read the paper",
                url: "https://thottingal.in/documents/Malayalam%20Orthographic%20Reforms_%20Impact%20on%20Language%20and%20Popular%20Culture.pdf",
              },
            ],
          },
          {
            title: `
                Spiral splines in typeface design: A case study of Manjari
                Malayalam typeface
            `,
            author: "Santhosh Thottingal, Kavya Manohar",
            description: `
              Proceedings of
              <a href="http://www.typoday.in/">Typoday 2018</a>,
              University of Mumbai. March 2018.
            `,
            links: [
              {
                text: "Read the paper",
                url: "https://thottingal.in/documents/Spiral-Splines-Manjari.pdf",
              },
            ],
          },
          {
            title:
              "A quantitative analysis of the morphological complexity of Malayalam",
            author: "Kavya Manohar",
            description: `
                By measuring the morphological complexity and comparing it against the same measurements for Dravidian languages and European languages, this paper show that Malayalam is morphologically more complex than them. Published at the 23rd International Conference on Text, Speech and Dialogu on September 8-10, 2020, Brno, Czech Republic.
            `,
            links: [
              {
                text: "Read blog post",
                url: "https://kavyamanohar.com/post/malayalam-morphological-complexity/",
              },
              {
                text: "Read paper",
                url: "https://rdcu.be/b6RVa",
              },
              {
                text: "Code",
                url: "https://gitlab.com/kavyamanohar/malayalam-ttr",
              },
            ],
          },
          {
            title:
              "Mlphon: A Multifunctional Grapheme-Phoneme Conversion Tool Using Finite State Transducers",
            author: "Kavya Manohar, A. R. Jayan, Rajeev Rajan",
            description: `
                Mlphon computationally models linguistic rules using finite state transducers and performs multiple functions including grapheme to phoneme (g2p) and phoneme to grapheme (p2g) conversions, syllabification, phonetic feature analysis and script grammar check.`,
            links: [
              {
                text: "Mlphon",
                url: "https://phon.smc.org.in",
              },
              {
                text: "Read the paper",
                url: "https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9877808",
              },
            ],
          },
        ],
      },
      {
        id: "studies",
        heading: "Malayalam Computational Linguistics",
        list: [
          {
            title: "Phonetic description of Malayalam consonants",
            author: "Kavya Manohar",
            description: `
              A study of phonetic description of Malayalam consonants based on
              existing methods and IPA. Published on January 18, 2020
            `,
            links: [
              {
                text: "Read the study",
                url: "https://kavyamanohar.com/post/malayalam-ipa-consonants/",
              },
            ],
          },
          {
            title: "Information, Entropy and Malayalam",
            author: "Kavya Manohar",
            description: `
              What is the information Entropy of Malayalam language? How to
              calculate it? Published on July 18, 2019
            `,
            links: [
              {
                text: "Read",
                url: "https://kavyamanohar.com/post/malayalam-ipa-consonants/",
              },
            ],
          },
          {
            title:
              "A finite state Transducer based approach for Malayalam phonetics analysis",
            author: "Kavya Manohar",
            description: `
                A system to analyse the phonology of Malayalam. Published on
                October 2, 2018
            `,
            links: [
              {
                text: "Read",
                url: "https://kavyamanohar.com/post/malayalam-phonetic-analyser/",
              },
              {
                text: "Malayalam Phonetic Analyser",
                url: "https://phon.smc.org.in",
              },
            ],
          },
        ],
      },
    ],
  }),
};
</script>
