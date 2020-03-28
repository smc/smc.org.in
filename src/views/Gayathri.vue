<template>
  <v-container class="gayathri col-lg-10 col-sm-12">
    <main>
      <h1 class="display-3" v-text="$i18n('gayathri')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Designer: <a href="https://thottingal.in">Binoy Dominic</a>
        </p>
        <v-btn
          to="https://smc.org.in/downloads/fonts/gayathri/gayathri.zip"
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
                class="gayathri-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-3 font-weight-thin py-2 my-4">ഗായത്രി</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
                <p>Available in bold, regular, thin style variants.</p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="gayathri-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  മഞ്ജ­രി എന്നാൽ മു­ത്തു് എന്നർത്ഥം. മല­യാ­ള­ത്തി­ലെ ഒരു
                  വൃ­ത്ത­ത്തി­ന്റെ പേ­രു­മാ­ണ­തു്. ചി­ലങ്ക കൈ­യെ­ഴു­ത്തു­ശൈ­ലി
                  ഫോ­ണ്ടി­നു ശേഷം സന്തോ­ഷ് തോ­ട്ടി­ങ്ങൽ രൂ­പ­ക­ല്പന ചെയ്ത
                  മഞ്ജ­രി ഫോ­ണ്ട് ഒരു വി­വി­ധോ­ദ്ദേ­ശ്യ ഫോ­ണ്ടാ­ണു്. സാ­ധാ­രണ
                  കട്ടി­യി­ലും, കൂ­ടി­യ­തും കു­റ­ഞ്ഞ­തു­മായ കട്ടി­ക­ളി­ലും
                  മു­ന്ന് തര­ത്തിൽ ഈ ഫോ­ണ്ട് ലഭ്യ­മാ­ണു്. അക്ഷ­ര­ങ്ങ­ളു­ടെ
                  വടി­വി­നു് സ്പൈരൽ ശൈലി ഉപ­യോ­ഗി­ക്കു­ന്നു എന്ന­താ­ണു് ഈ
                  ഫോ­ണ്ടി­ന്റെ പ്ര­ത്യേ­കത. വര­ക­ളു­ടെ അറ്റ­ങ്ങൾ ഉരു­ണ്ട, ഒരേ
                  കട്ടി­യി­ലു­ള്ള വര­ക­ളാ­ണു് ഉപ­യോ­ഗി­ച്ചി­രി­ക്കു­ന്ന­തു്.
                  കൂ­ട്ട­ക്ഷ­ര­ങ്ങൾ പര­മാ­വ­ധി ഉൾപ്പെ­ടു­ത്തി­ക്കൊ­ണ്ടു­ള്ള ഒരു
                  ലി­പി­സ­ഞ്ച­യ­മാ­ണു് ഈ ഫോ­ണ്ടി­ലു­ള്ള­തു്. മല­യാ­ള­ത്തി­നു
                  പു­റേ­മേ ഇം­ഗ്ലീ­ഷ്/ലാ­റ്റിൻ അക്ഷ­ര­ങ്ങ­ളും ഈ ഫോ­ണ്ടി­ലു­ണ്ട്.
                </p>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </section>
      <section id="design" class="row">
        <h2 v-text="$i18n('design')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            Gayathri
          </p>
        </div>
      </section>
      <section id="webfonts" class="row">
        <h2 v-text="$i18n('webfonts')" class="webfonts col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            To use Gayathri in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code>
            @import url('https://smc.org.in/fonts/gayathri.css'); html {
            font-family: 'Gayathri', sans-serif; }
          </code>
          <h3 class="webfonts" v-text="$i18n('google-fonts-webfonts')"></h3>
          <p>
            Gayathri is also available in Google fonts. Using Gayathri from
            Google webfonts may be faster than the above approach. Please refer
            <a href="https://fonts.google.com/specimen/Gayathri"
              >google fonts documentation for Gayathri</a
            >:
          </p>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Gayathri is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Gayathri typefaces's source code, including svg drawings, build
          scripts are available at
          <a href="https://gitlab.com/smc/fonts/gayathri">gitlab repository</a>
        </p>
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
          <h4 id="contribute">Can I help with improving Gayathri?</h4>
          <p>
            Yes you can! Gayathri is an open-source project, meaning the source
            code—or "source design" if you will—that is used to build the font
            files are freely available to improve upon. Font making requires a
            fair bit of technical work and depending on what you'd like to do,
            some things might be more fun depending on your technical skills.
            Please start by reading and exploring the source code and design
            files provided.
          </p>
        </div>
      </section>
    </main>
  </v-container>
</template>

<script>
import { mdiDownload } from "@mdi/js";
export default {
  data: () => ({
    mdiDownload
  }),
  methods: {}
};
</script>
<style lang="less">
.gayathri section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
</style>
