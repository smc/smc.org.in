<template>
  <v-container class="uroob col-xl-8 col-sm-10 col-xs-12">
    <main id="uroob">
      <font-title
        :name="$i18n('uroob')"
        :version="fontdata.version"
        author="Designer: Hussain K H"
        link="/downloads/fonts/uroob/uroob.zip"
      />
      <v-banner lines="three" icon="$warning" color="warning" class="my-4">
        <v-banner-text>
          This font is no longer actively maintained by SMC Project. Here you
          can find the last released version.
        </v-banner-text>
      </v-banner>
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
                class="uroob-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="text-h2 font-weight-thin py-2 my-4">ഉറൂബ്</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="uroob-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  Uroob is Malayalam heading style font designed by Hussain K H.
                  This bold weight font was released in 2015 and Latin glyphs
                  were added in 2016. Uroob is a thick ornamental font. Its
                  basic orthography is rectangular but carries rounded corners
                  of Malayalam characters. Though it is an even thickness font,
                  joining of round and straight stems normally forms a thin
                  part. It is a vertical tall font giving more space in x-height
                  so that parts over x-height seem squeezed. Uroob is best
                  suited for headings, titles, book covers, posters and
                  signboards. The font is named after famous Malayalam writer P.
                  C. Kuttikrishnan, pen named 'Uroob'.
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
            To use Uroob in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code style="word-break: break-all">
            @import url('https://smc.org.in/fonts/uroob.css'); html {
            font-family: 'Uroob', sans-serif; }
          </code>
          <h3 class="webfonts" v-text="$i18n('google-fonts-webfonts')"></h3>
          <p>
            Uroob is also available in Google fonts. Using Uroob from Google
            webfonts may be faster than the above approach. Please refer
            <a href="https://fonts.google.com/specimen/Uroob"
              >google fonts documentation for Uroob</a
            >:
          </p>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Uroob is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Uroob typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/uroob">gitlab repository</a>
        </p>
      </section>
      <section id="playground" class="row">
        <h2 v-text="$i18n('try-font')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-12">
          <font-playground name="Uroob" />
        </div>
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
          <h4 id="contribute">Can I help with improving Uroob?</h4>
          <p>
            Yes you can! Uroob is an open-source project, meaning the source
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
import FontTitle from "../components/FontTitle";
import FontPlayground from "../components/FontPlayground";

export default {
  data: () => ({
    mdiDownload,
    fontdata: {},
  }),
  components: { FontTitle, FontPlayground },
};
</script>
<style lang="less">
#uroob .text-h4,
#uroob .text-h3,
#uroob .text-h2,
#uroob .text-h1,
#uroob .display-5,
#uroob .title,
#uroob .text-h5 {
  font-family: "Uroob" !important;
}

.uroob section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
.uroob-slide-0 {
  .text-h2,
  .display-5 {
    font-family: "Uroob" !important;
  }
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.uroob-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}
</style>
