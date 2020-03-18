<template>
  <v-container class="manjari col-lg-10 col-sm-12">
    <main>
      <h1 class="display" v-text="$i18n('manjari')"></h1>
      <p class="title-2">
        Designer: <a href="thottingal.in">Santhosh Thottingal</a>
      </p>
      <section id="intro" class="row">
        <p>
          Malayalam typeface featured with smooth curves and terminals.
          Available in three weights.
        </p>
      </section>
      <section id="header" class="row">
        <v-sheet class="col-12" color="grey">
          <tt>illustrations goes here</tt>
        </v-sheet>
      </section>
      <section id="download" class="row">
        <h2 v-text="$i18n('download')" class="col-lg-4 col-md-12"></h2>
        <v-sheet class="col-lg-8 col-md-12" color="transparent">
          <v-btn
            to="https://smc.org.in/downloads/fonts/manjari/manjari.zip"
            rounded
            large
            block
            color="success"
            class="col col-lg-4 col-sm-8 ma-1"
            v-text="$i18n('download-zip')"
          ></v-btn>
          <v-btn
            to="https://smc.org.in/downloads/fonts/manjari/Manjari-Regular.otf"
            rounded
            large
            color="primary"
            class="col col-lg-4 ma-1"
            v-text="$i18n('regular')"
          ></v-btn>
          <v-btn
            to="https://smc.org.in/downloads/fonts/manjari/Manjari-Bold.otf"
            rounded
            large
            color="primary"
            class="col col-lg-4 ma-1"
            v-text="$i18n('bold')"
          ></v-btn>
          <v-btn
            to="https://smc.org.in/downloads/fonts/manjari/Manjari-Thin.otf"
            rounded
            large
            color="primary"
            class="col col-lg-3 ma-1"
            v-text="$i18n('thin')"
          ></v-btn>
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
          <pre>
            @import url('https://smc.org.in/fonts/manjari.css');
            html {
              font-family: 'Manjari', sans-serif;
            }
          </pre>
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
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-4 col-md-12"></h2>
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
export default {
  data: () => ({}),
  methods: {}
};
</script>
<style lang="less" scoped>
.manjari section {
  margin: 3em 0;
}
</style>
