<template>
  <v-container class="keraleeyam col-lg-8 col-sm-12">
    <main>
      <h1 class="display-3" v-text="$i18n('keraleeyam')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Designer: Hussain K H | {{ fontdata.version }}
        </p>
        <v-btn
          to="/downloads/fonts/keraleeyam/keraleeyam.zip"
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
                class="keraleeyam-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-3 font-weight-thin py-2 my-4">കേരളീയം</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="keraleeyam-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  Keraleeyam is a Malayalam font designed by Hussain K. H.
                  Keraleeyam is a thick ornamental font. It is basically a
                  san-serif font but it takes a thin and thick design especially
                  at the joins of straight and curved paths. Bigger and thicker,
                  it is condensed compared to Meera and Rachana. Its geometry
                  follows a vertical oval shape rather than circular. Keraleeyam
                  is best suited to titles. Many book covers have been designed
                  using this font. When Keraleeyam is used for signboards its
                  Roman glyphs may find a suitable space. Keraleeyam font was
                  originally designed in 2005. The current version of the font
                  is based on comprehensive character set of traditional
                  Malayalam script with many unique conjuncts. Latin glyphs were
                  designed and added to match the malayalam sript style in 2015.
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
            To use Keraleeyam in web pages, webfonts can be used. You may copy
            the following css and add to your website:
          </p>
          <code style="word-break: break-all;">
            @import url('https://smc.org.in/fonts/keraleeyam.css'); html {
            font-family: 'Keraleeyam', sans-serif; }
          </code>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Keraleeyam is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Keraleeyam typefaces's source code, including svg drawings, build
          scripts are available at
          <a href="https://gitlab.com/smc/fonts/keraleeyam"
            >gitlab repository</a
          >
        </p>
      </section>
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs font="Keraleeyam" class="col-lg-12" :glyphs="fontdata.glyphs" />
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
              Latin. The following languages are covered: aa, ay, bi, br, ch,
              da, de, en, es, et, eu, fi, fj, fo, fur, fy, gd, gl, gv, ho, ia,
              id, ie, io, is, it, ki, lb, mg, nb, nds, nl, nn, no, nr, nso, ny,
              oc, om, pt, rm, sma, smj, so, sq, ss, st, sv, sw, tk, tl, tn, ts,
              uz, vo, vot, wa, xh, yap, zu, an, fil, ht, jv, kj, ku-tr, kwm, li,
              ms, na, ng, pap-an, pap-aw, rn, rw, sc, sg, sn, su, and za(s)
            </li>
          </ul>
        </div>
      </section>
      <section id="style-variants" class="row">
        <h2 v-text="$i18n('Style variants')" class="col-lg-4 col-md-12"></h2>
      </section>
      <section id="history" class="row">
        <h2 v-text="$i18n('history')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">Released on July 23, 2016.</p>
      </section>
      <section id="faq" class="row">
        <h2 v-text="$i18n('faq')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <h4 id="contribute">Can I help with improving Keraleeyam?</h4>
          <p>
            Yes you can! Keraleeyam is an open-source project, meaning the
            source code—or "source design" if you will—that is used to build the
            font files are freely available to improve upon. Font making
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
    return fetch("/downloads/fonts/keraleeyam/Keraleeyam.json")
      .then(response => response.json())
      .then(data => {
        this.fontdata = data;
      });
  }
};
</script>
<style lang="less">
.keraleeyam section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
.keraleeyam-slide-0 {
  .display-3,
  .display-5 {
    font-family: "Keraleeyam" !important;
  }
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.keraleeyam-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}
</style>
