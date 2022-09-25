<template>
  <v-container class="anjalioldlipi col-xl-8 col-sm-10 col-xs-12">
    <main id="anjali">
      <font-title
        :name="$i18n('anjalioldlipi')"
        :version="fontdata.version"
        author="Designer: Kevin Siji"
        link="/downloads/fonts/anjalioldlipi/anjalioldlipi.zip"
      />

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
                class="anjalioldlipi-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="text-h2 font-weight-thin py-2 my-4">അഞ്ജലി</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="anjalioldlipi-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  AnjaliOldLipi is a sans serif Malayalam language typeface
                  designed by Kevin &amp; Siji and maintained by Swathanthra
                  Malayalam Computing project. This is a comprehensive font with
                  glyphs for all common Malayalam ligatures and the Latin
                  character set. AnjaliOldLipi is intended for body text and has
                  excellent legibility characteristics in its letterforms for
                  onscreen reading as well as print.
                </p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="anjalioldlipi-slide-2 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <h2 class="section-heading">പൂതപ്പാട്ട്</h2>
                  <h3 class="section-heading">ഇടശ്ശേരി ഗോവിന്ദൻ നായർ</h3>
                  <p>
                    ആറ്റിന്‍ വക്കത്തെ മാളിക വീട്ടിലന്നാ
                    <br />
                    റ്റുനോറ്റിട്ടൊരൊണ്ണി പിറന്നു.. <br />
                    ഉണ്ണിക്കരയില് കിങ്ങിണി പൊന്നുകൊണ്ടു <br />
                    ണ്ണിക്കു കാതില്‍ കുടക്കടുക്കന്‍ <br />
                    പാപ്പ കൊടുക്കുന്നു പാലു കൊടുക്കുന്നു <br />
                    പാവ കൊടുക്കുന്നു നങ്ങേലി <br />
                    കാച്ചിയ മോരൊഴിച്ചൊപ്പി വടിച്ചിട്ടു <br />
                    കാക്കേ പൂച്ചേ പാട്ടുകള്‍ പാടീട്ടു <br />
                    മാനത്തമ്പിളി മാമനെ കാട്ടീട്ടു <br />
                    മാമുകൊടുക്കുന്നു നങ്ങേലീ.. <br />
                    മാമുകൊടുക്കുന്നു നങ്ങേലീ <br />
                    താഴേ വച്ചാല്‍ ഉറുമ്പരിച്ചാലോ <br />
                    തലയില്‍ വച്ചാല്‍ പേനരിച്ചാലോ <br />
                    തങ്കക്കുടത്തിനെ താലോലം പാടീട്ടു <br />
                    തങ്കകട്ടിലില്‍ പട്ടുവിരിച്ചിട്ടു <br />
                    തണുതണെ പൂന്തുട തട്ടിയുറക്കീട്ടു <br />
                    ചാ‍ഞ്ഞുമയങ്ങുന്നു നങ്ങേലി.
                  </p>
                </article>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </section>
      <section id="download" class="row">
        <h2 v-text="$i18n('download')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <ul>
            <li class="my-4 font-weight-bold">
              TTF Format:
              <v-btn
                href="/downloads/fonts/anjalioldlipi/AnjaliOldLipi-Regular.ttf"
                color="primary"
                text
              >
                {{ $i18n("regular") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              Webfonts in woff2 format for embedding in webpages. Also see
              <a href="#webfonts">how to use in webpages</a>:
              <v-btn
                href="/downloads/fonts/anjalioldlipi/AnjaliOldLipi-Regular.woff2"
                color="primary"
                text
                v-i18n="'regular'"
              >
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn
                href="/downloads/fonts/anjalioldlipi/anjalioldlipi.zip"
                color="primary"
                text
                v-i18n="'zip'"
              >
              </v-btn>
            </li>
          </ul>
        </div>
      </section>
      <section id="webfonts" class="row">
        <h2 v-i18n="'webfonts'" class="webfonts col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            To use AnjaliOldLipi in web pages, webfonts can be used. You may
            copy the following css and add to your website:
          </p>
          <code style="word-break: break-all">
            @import url('https://smc.org.in/fonts/anjalioldlipi.css'); html {
            font-family: 'AnjaliOldLipi', sans-serif; }
          </code>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-i18n="'license'" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          AnjaliOldLipi is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-i18n="'sourcecode'" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          AnjaliOldLipi typefaces's source code, including svg drawings, build
          scripts are available at
          <a href="https://gitlab.com/smc/fonts/anjalioldlipi"
            >gitlab repository</a
          >
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
      <section id="playground" class="row">
        <h2 v-text="$i18n('try-font')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-12">
          <font-playground name="AnjaliOldLipi" />
        </div>
      </section>
      <section id="style-variants" class="row">
        <h2 v-text="$i18n('Style variants')" class="col-lg-4 col-md-12"></h2>
      </section>
      <section id="faq" class="row">
        <h2 v-text="$i18n('faq')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <h4 id="contribute">Can I help with improving AnjaliOldLipi?</h4>
          <p>
            Yes you can! AnjaliOldLipi is an open-source project, meaning the
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
#anjali .text-h4,
#anjali .text-h3,
#anjali .text-h2,
#anjali .text-h1,
#anjali .display-5,
#anjali .title,
#anjali .text-h5 {
  font-family: "AnjaliOldLipi" !important;
}

.anjalioldlipi section {
  margin: 3em 0;
  .v-card {
    padding: 2em;
  }
}
.anjalioldlipi-slide-0,
.anjalioldlipi-slide-1,
.anjalioldlipi-slide-2 {
  font-family: "AnjaliOldLipi" !important;
}
.anjalioldlipi-slide-0 {
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.anjalioldlipi-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}

.anjalioldlipi-slide-2 {
  background: linear-gradient(to left, #2980b9, #2c3e50);
  min-height: 90vh;
  width: 100%;
  h2 {
    font-size: 2em;
    color: #ffffff;
    font-weight: normal;
    text-align: left;
  }
  h3 {
    font-size: 1.4em;
    color: #999999;
    font-weight: normal;
    text-align: left;
  }
  article {
    columns: 2;
    column-gap: 4em;
    p {
      color: #ffffff;
      font-size: 1.2em;
      line-height: 1.5em;
      text-align: left;
    }
  }
  @media (max-width: 48em) {
    article {
      column-count: 1;
    }
  }
}
</style>
