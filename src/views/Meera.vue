<template>
  <v-container class="meera col-lg-8 col-sm-12">
    <main id="meera">
      <h1 class="display-3" v-text="$i18n('meera')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Designer: Hussain K H | {{ fontdata.version }}
        </p>
        <v-btn
          to="/downloads/fonts/meera/meera.zip"
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
                class="meera-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-3 font-weight-thin py-2 my-4">മീര</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="meera-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  Meera is a Malayalam font designed by Hussain K. H.
                </p>
              </v-card>
            </v-carousel-item>

            <v-carousel-item>
              <v-card
                class="meera-slide-2 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <h2 class="section-heading">കുഞ്ഞേടത്തി</h2>
                  <h3 class="section-heading">ഒ.എന്‍.വി. കുറുപ്പ്</h3>
                  <p>
                    കുഞ്ഞേടത്തിയെ തന്നെയല്ലോ
                    <br />
                    ഉണ്ണിയ്ക്കെന്നെന്നുംമേറെയിഷ്ടം <br />
                    പൊന്നേ പോലത്തെ നെറ്റിയിലുണ്ടല്ലോ <br />
                    മഞ്ഞൾ വരക്കുറി ചാന്ദുപൊട്ടും <br />
                    ഈറൻമുടിയിലെള്ളണ്ണ മണം <br />
                    ചിലനേരമാ തുമ്പത്തൊരു പൂവും <br />
                    കയ്യിലൊരറ്റ കുപ്പിവള <br />
                    മുഖം കണ്ടാൽ കാവിലെ ദേവി തന്നെ <br />
                    മടിയിലുരുത്തീട്ട് മാറോട് ചേത്തിട്ടു <br />
                    മണി മണി പോലെ കഥപറയും <br />
                    ആനേടെ, മയിലിന്റെ, ഒട്ടകത്തിന്റെയും <br />
                    ആരും കേൾക്കാത്ത കഥപറയും
                    <br />
                  </p>
                  <p>
                    കുഞ്ഞേടത്തിയെ തന്നെയല്ലോ
                    <br />
                    ഉണ്ണിയ്ക്കെന്നെന്നുംമേറെയിഷ്ടം <br />
                    ഉണ്ണിയ്ക്കെന്തിനുമേതിന്നും <br />
                    കുഞ്ഞേടത്തിയെ കൂട്ടുള്ളൂ <br />
                    കണ്ണിൽ കണ്ടതും കത്തിരിക്കായുമി- <br />
                    തെന്താണെന്നുണ്ണീ ചോദിയ്ക്കും <br />
                    കുഞ്ഞേടത്തി പറഞ്ഞു കൊടുക്കുമ്പോൾ <br />
                    ഉണ്ണിയ്ക്കത്ഭുതമാഹ്ലാദം..!
                    <br />
                  </p>
                </article>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="meera-slide-3 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p>
                  ഇലഞ്ഞിപ്പൂമണമൊഴുകിവരുന്നു<br />
                  ഇന്ദ്രിയങ്ങളിലതു പടരുന്നു<br />
                  പകല്‍ക്കിനാവിന്‍ പനിനീര്‍മഴയില്‍<br />
                  പണ്ടുനിന്മുഖം പകര്‍ന്നകന്നു
                </p>
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
                href="/downloads/fonts/meera/Meera-Regular.ttf"
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
                href="/downloads/fonts/meera/Meera-Regular.woff2"
                color="primary"
                text
              >
                {{ $i18n("regular") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn
                href="/downloads/fonts/meera/meera.zip"
                color="primary"
                text
              >
                {{ $i18n("zip") }}
              </v-btn>
            </li>
          </ul>
        </div>
      </section>
      <section id="webfonts" class="row">
        <h2 v-text="$i18n('webfonts')" class="webfonts col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            To use Meera in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code style="word-break: break-all;">
            @import url('https://smc.org.in/fonts/meera.css'); html {
            font-family: 'Meera', sans-serif; }
          </code>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Meera is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Meera typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/meera">gitlab repository</a>
        </p>
      </section>
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs font="Meera" class="col-lg-12" :glyphs="fontdata.glyphs" />
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
        <p class="col-lg-8 col-md-12">Released on September 21, 2007.</p>
      </section>
      <section id="faq" class="row">
        <h2 v-text="$i18n('faq')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <h4 id="contribute">Can I help with improving Meera?</h4>
          <p>
            Yes you can! Meera is an open-source project, meaning the source
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
    return fetch("/downloads/fonts/meera/Meera.json")
      .then(response => response.json())
      .then(data => {
        this.fontdata = data;
      });
  }
};
</script>
<style lang="less">
#meera .display-1,
#meera .display-2,
#meera .display-3,
#meera .display-4,
#meera .display-5,
#meera .title,
#meera .headline {
  font-family: "Meera" !important;
}

.meera section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
.meera-slide-0,
.meera-slide-1,
.meera-slide-2,
.meera-slide-3 {
  font-family: "Meera" !important;
}
.meera-slide-0 {
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.meera-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}

.meera-slide-2 {
  background: #74cbd6;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #9abeee, #74cbd6);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #9abeee, #74cbd6);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  h2 {
    font-size: 3em;
    color: #cfa7a2;
    font-weight: normal;
  }
  width: 100%;
  text-align: left;
  article {
    width: 95%;
    // margin: 10% auto;
    -webkit-columns: 2 200px;
    -moz-columns: 2 200px;
    columns: 2 200px;
    -webkit-column-gap: 1em;
    -moz-column-gap: 1em;
    column-gap: 1em;
    p {
      font-size: 1em;
      line-height: 1.1em;
      color: #3b302e;
      text-align: justify;
    }
  }
  @media (max-width: 48em) {
    article {
      -webkit-column-count: 1;
      -moz-column-count: 1;
      column-count: 1;
    }
    p {
      font-size: 3em;
    }
  }
}

.meera-slide-3 {
  background: #9fe4b0;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #da9a5f, #b8f14e);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #fd7f09, #afff1c);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  width: 100%;
  p {
    color: #ffffff;
    text-shadow: 0 2px 3px #555;
    font-size: 2em;
    text-align: center;
    line-height: 1.5em;
  }
}
code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
