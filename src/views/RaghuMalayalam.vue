<template>
  <v-container class="raghumalayalamsans col-lg-8 col-sm-12">
    <main>
      <h1 class="display-3" v-text="$i18n('raghumalayalamsans')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Prof. R. K. Joshi (TypeFont Design Director, Visiting Design
          Specialist at C-DAC Mumbai) in association with Mr. Rajith Kumar K. M.
          (TypeFont Designer), assisted by Mr. Nirmal Biswas, Ms. Jui Mhatre and
          Ms. Supriya Kharkar at C-DAC Mumbai (formerly NCST). |
          {{ fontdata.version }}
        </p>
        <v-btn
          to="/downloads/fonts/raghumalayalamsans/raghumalayalamsans.zip"
          rounded
          large
          color="success"
          class="col col-lg-3 ma-1"
        >
          <v-icon>{{ mdiDownload }}</v-icon
          >{{ $i18n("download") }}</v-btn
        >
      </div>
      <section id="header" class="row">
        <v-sheet class="col-12">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            :show-arrows="false"
          >
            <v-carousel-item>
              <v-card
                class="raghumalayalamsans-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-3 font-weight-thin py-2 my-4">രഘു മലയാളം</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="raghumalayalamsans-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  RaghuMalayalam is the name of a digital font - a typeface in
                  Malayalam Script to be used for composing text in Malayalam
                  language. It has been originally designed in Open Type Format
                  with Unicode standards and reordering as well as combining
                  characters according to the visual syllable standard of IndiX
                  Compugraphy. This first Version called RaghuMalayalam font
                  Original Version 1.00 (2005) is a non-hinted text face, to be
                  used for continuous text in Malayalm language. And is
                  recommended to be used in minimum 14pt. size on screen and
                  10pt. size on paper (see the README file). The designed
                  letterforms of RaghuMalayalam font in Malayalam script, have
                  elegant structures of thick and thin strokes. Vertical strokes
                  contain a slight curvature and scooped ends. RaghuMalayalam
                  font Original Version 1.00 (2005) has been designed and
                  developed, by Prof. R. K. Joshi (TypeFont Design Director,
                  Visiting Design Specialist at C-DAC Mumbai) in association
                  with Mr. Rajith Kumar K. M. (TypeFont Designer), assisted by
                  Mr. Nirmal Biswas, Ms. Jui Mhatre and Ms. Supriya Kharkar at
                  C-DAC Mumbai (formerly NCST). In 2008, developers from
                  swathanthra Malayalam Computing started maintaining the font
                  as a tribute to him. Suresh P modified opentype tables and
                  added more glyphs to make it compatible with modern rendering
                  systems.
                </p>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </section>
      <section id="webfonts" class="row">
        <h2 v-text="$i18n('webfonts')" class="webfonts col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            To use RaghuMalayalamSans in web pages, webfonts can be used. You
            may copy the following css and add to your website:
          </p>
          <code style="sword-break: break-all;">
            @import url('https://smc.org.in/fonts/raghumalayalamsans.css'); html
            { font-family: 'RaghuMalayalamSans', sans-serif; }
          </code>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          RaghuMalayalamSans is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          RaghuMalayalamSans typefaces's source code, including svg drawings,
          build scripts are available at
          <a href="https://gitlab.com/smc/fonts/raghumalayalamsans"
            >gitlab repository</a
          >
        </p>
      </section>
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs
          font="RaghuMalayalamSans"
          class="col-lg-12"
          :glyphs="fontdata.glyphs"
        />
      </section>
      <section id="languages" class="row">
        <h2
          v-text="$i18n('Supported languages')"
          class="col-lg-4 col-md-12"
        ></h2>
        <div class="col-lg-8 col-md-12">
          <ul>
            <li>Malayalam</li>
            <li>
              Latin.
            </li>
          </ul>
        </div>
      </section>
      <section id="style-variants" class="row">
        <h2 v-text="$i18n('Style variants')" class="col-lg-4 col-md-12"></h2>
      </section>
      <section id="faq" class="row">
        <h2 v-text="$i18n('faq')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <h4 id="contribute">Can I help with improving RaghuMalayalamSans?</h4>
          <p>
            Yes you can! RaghuMalayalamSans is an open-source project, meaning
            the source code—or "source design" if you will—that is used to build
            the font files are freely available to improve upon. Font making
            requires a fair bit of technical work and depending on what you'd
            like to do, some things might be more fun depending on your
            technical skills. Please start by reading and exploring the source
            code and design files provided.
          </p>
        </div>
      </section>
    </main>
  </v-container>
</template>

<script>
import { mdiDownload } from "@mdi/js";
import Glyphs from "../components/Glyphs";

export default {
  data: () => ({
    mdiDownload,
    fontdata: {}
  }),
  components: { Glyphs },
  created() {
    return fetch("/downloads/fonts/raghumalayalamsans/RaghuMalayalamSans.json")
      .then(response => response.json())
      .then(data => {
        this.fontdata = data;
      });
  }
};
</script>
<style lang="less">
.raghumalayalamsans section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
.raghumalayalamsans-slide-0 {
  .display-3,
  .display-5 {
    font-family: "RaghuMalayalam" !important;
  }
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.raghumalayalamsans-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}
</style>
