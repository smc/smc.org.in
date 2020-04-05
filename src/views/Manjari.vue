<template>
  <v-container class="manjari col-lg-8 col-sm-12">
    <main>
      <h1 class="display-3" v-text="$i18n('manjari')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Designer:
          <a href="https://thottingal.in">Santhosh Thottingal</a> |
          {{ fontdata.version }}
        </p>
        <v-btn
          to="/downloads/fonts/manjari/manjari.zip"
          rounded
          large
          color="success"
          class="col col-lg-3 ma-1"
        >
          <v-icon>{{ mdiDownload }}</v-icon>
          {{ $i18n("download") }}
        </v-btn>
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
                class="manjari-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-3 font-weight-thin py-2 my-4">മഞ്ജരി</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
                <p>Available in bold, regular, thin style variants.</p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="manjari-slide-1 py-auto fill-height"
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
            Manjari means pearl. It is also the name of a poetic metre in
            Malayalam. This is the second font after Chilanka handwriting font
            by Santhosh Thottingal. This is a multipurpose font suitable for
            body and titles. This font is available in regular, bold, thin style
            variants.
          </p>
          <p>
            Malayalam script is known for its curly characters with beautiful
            loops. Encoded in unicode around 2001, it is relatively new to the
            digital age. The script has been evolving from rectangle shaped to
            oval shaped types of varying proportions. The popular culture is
            more of oval/ellipse shaped curves, mainly because writing methods
            using stensils or pens demanded less sharp corners. The character or
            ligature shapes has also been changing gradually towards the shapes
            that are easy with pens. The Manjari font takes that to another
            level by smoothening all curves to its maximum.
          </p>
          <p>
            The curves are constructed along the spiral segments. The resulting
            shapes are extra smooth. The curve perfection resulted in
            whitespaces that aquired beautiful leaf and drop shapes between the
            bowls and loops of the script. The spiral smoothness of curves were
            complemented by rounded terminals which gives very soft feeling for
            the eyes. The design of the curves in Manjari are theoretically
            based on the PHD thesis by Raph Levien - "From Spiral to Spline:
            Optimal Techniques in Interactive Curve Design" . The Inconsolata
            monospace humanist latin font known for its clean lines and elegant
            design by Levien himself is based on this theory.
          </p>
          <p>
            The curve strokes in Manjari were drawn in Inkscape using the spiral
            library written by Raph Levien himself and opentype feature
            compilation was done using FontForge.
          </p>
        </div>
      </section>
      <section id="webfonts" class="row">
        <h2 v-text="$i18n('webfonts')" class="webfonts col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            To use Manjari in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code>
            @import url('https://smc.org.in/fonts/manjari.css'); html {
            font-family: 'Manjari', sans-serif; }
          </code>
          <h3 class="webfonts" v-text="$i18n('google-fonts-webfonts')"></h3>
          <p>
            Manjari is also available in Google fonts. Using Manjari from Google
            webfonts may be faster than the above approach. Please refer
            <a href="https://fonts.google.com/specimen/Manjari"
              >google fonts documentation for Manjari</a
            >:
          </p>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Manjari is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Manjari typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/manjari">gitlab repository</a>
        </p>
      </section>
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs font="Manjari" class="col-lg-12" :glyphs="fontdata.glyphs" />
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
          <h4 id="contribute">Can I help with improving Manjari?</h4>
          <p>
            Yes you can! Manjari is an open-source project, meaning the source
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
import Glyphs from "../components/Glyphs";
export default {
  data: () => ({
    mdiDownload,
    fontdata: {}
  }),
  components: { Glyphs },
  created() {
    return fetch("/downloads/fonts/manjari/Manjari.json")
      .then(response => response.json())
      .then(data => {
        this.fontdata = data;
      });
  }
};
</script>
<style lang="less">
.manjari section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
.manjari-slide-0 {
  .display-3,
  .display-5 {
    font-family: "Manjari" !important;
  }
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.manjari-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}
</style>
