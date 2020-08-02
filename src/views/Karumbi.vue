<template>
  <v-container class="karumbi col-xl-8 col-sm-10 col-xs-12">
    <main id="karumbi">
      <font-title
        :name="$i18n('karumbi')"
        :version="fontdata.version"
        author="Designer: Kevin Siji"
        link="/downloads/fonts/karumbi/karumbi.zip"
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
                class="karumbi-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="text-h2 font-weight-thin py-2 my-4">കറുമ്പി</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="karumbi-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  The Karumbi opentype font, is a Malayalam traditional script
                  font desinged by Kevinsiji. The characters are literally
                  written directly into a computer by Kevinsiji using a tablet
                  pen. Karumbi follows a casual style, suitable for handwritten
                  type text. It has Individually designed glyphs for complex
                  conjuncts rather than using component glyphs.
                </p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="karumbi-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article class="">
                  <p>
                    തോറ്റകുട്ടി പുറത്തേക്കിറങ്ങി <br />
                    തോട്ടുവെള്ളത്തില്‍ പുസ്തകം വിട്ടു <br />
                    കാറ്റിലേക്കു കുടയും കൊടുത്തു. <br />
                    തുണ്ടുപെന്‍സിലെറിഞ്ഞു കളഞ്ഞു <br />
                    കണ്ട കാട്ടു വഴിയില്‍ നടന്നു... <br />
                    തൊട്ടു മെല്ലെ വിളിച്ചപോല്‍ തോന്നി <br />
                    തൊട്ടടുത്തു പിറകില്‍ വന്നാരോ <br />
                    തിത്തിരിപ്പക്ഷി മൂളിയതാകാം <br />
                    കൊച്ചുതുമ്പയോ മൈനയോ ആവാം <br />
                    കാട്ടുവള്ളിയില്‍ തൂങ്ങിക്കുതിച്ച് <br />
                    കാട്ടിലേക്കവന്‍ ചെന്നുപോല്‍ പിന്നെ <br />
                    പൂത്തമുല്ലതന്‍ സൗരഭം നീന്തും <br />
                    കാറ്റവനൊരു പാട്ടുപോല്‍ തോന്നി <br />
                    പൂക്കളൊക്കെയും വാക്കുകള്‍, പായും <br />
                    കാട്ടരുവി കളകള ഗാനം <br />
                    രാത്രി നക്ഷത്ര വിസ്തൃതാകാശം <br />
                    നീര്‍ത്തിവച്ചൊരു പുസ്തകമായി <br />
                    തോറ്റകുട്ടിയെ തോളത്തുവച്ചു. <br />
                    പൂത്തുനിന്നു മരതകക്കുന്ന് <br />
                    തോല്‍ക്കുകില്ല നീയെന്നേ പറഞ്ഞു <br />
                    കാത്തു നില്‍ക്കുന്നൊരമ്പിളിത്തെല്ല്...!
                  </p>
                  <p style="float: right;">തോറ്റകുട്ടി(റഫീക്ക് അഹമ്മദ്)</p>
                </article>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="karumbi-slide-2 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article class="">
                  <p>
                    My sweet love, I shall wait patiently till tomorrow before I
                    see you, and in the mean time, if there is any need of such
                    a thing, assure you by your Beauty, that whenever I have at
                    any time written on a certain unpleasant subject, it has
                    been with your welfare impress’d upon my mind. How hurt I
                    should have been had you ever acceded to what is,
                    notwithstanding, very reasonable! How much the more do I
                    love you from the general result! In my present state of
                    Health I feel too much separated from you and could almost
                    speak to you in the words of Lorenzo’s Ghost to Isabella
                  </p>
                  <p>
                    ‘Your Beauty grows upon me and I feel
                    <br />
                    A greater love through all my essence steal.’
                  </p>
                  <p>
                    My greatest torment since I have known you has been the fear
                    of you being a little inclined to the Cressid; but that
                    suspicion I dismiss utterly and remain happy in the surety
                    of your Love, which I assure you is as much a wonder to me
                    as a delight.
                  </p>
                  <p>Send me the words ‘Good night’ to put under my pillow.</p>
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
                href="/downloads/fonts/karumbi/Karumbi-Regular.ttf"
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
                href="/downloads/fonts/karumbi/Karumbi-Regular.woff2"
                color="primary"
                text
              >
                {{ $i18n("regular") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn
                href="/downloads/fonts/karumbi/karumbi.zip"
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
            To use Karumbi in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code style="word-break: break-all;">
            @import url('https://smc.org.in/fonts/karumbi.css'); html {
            font-family: 'Karumbi', sans-serif; }
          </code>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Karumbi is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Karumbi typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/karumbi">gitlab repository</a>
        </p>
      </section>
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs font="Karumbi" class="col-lg-12" :glyphs="fontdata.glyphs" />
      </section>
      <section id="playground" class="row">
        <h2 v-text="$i18n('try-font')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-12">
          <font-playground name="Karumbi" />
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
      <section id="faq" class="row">
        <h2 v-text="$i18n('faq')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <h4 id="contribute">Can I help with improving Karumbi?</h4>
          <p>
            Yes you can! Karumbi is an open-source project, meaning the source
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
import FontTitle from "../components/FontTitle";
import FontPlayground from "../components/FontPlayground";

export default {
  data: () => ({
    mdiDownload,
    fontdata: {},
  }),
  components: { Glyphs, FontTitle, FontPlayground },
  created() {
    return fetch("/downloads/fonts/karumbi/Karumbi.json")
      .then((response) => response.json())
      .then((data) => {
        this.fontdata = data;
      });
  },
};
</script>
<style lang="less">
#karumbi .text-h4,
#karumbi .text-h3,
#karumbi .text-h2,
#karumbi .text-h1,
#karumbi .display-5,
#karumbi .title,
#karumbi .text-h5 {
  font-family: "Karumbi" !important;
}

.karumbi section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
.karumbi-slide-0,
.karumbi-slide-1,
.karumbi-slide-2 {
  font-family: "Karumbi" !important;
}
.karumbi-slide-0 {
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}

.karumbi-slide-1,
.karumbi-slide-2 {
  background: -moz-radial-gradient(50% 50%, farthest-side, #ff9d46, #f5efc6);
  background: -webkit-gradient(
    radial,
    50% 50%,
    0,
    50% 50%,
    350,
    from(#ff9d46),
    to(#f5efc6)
  );
  width: 100%;
  article {
    width: 80%;
    margin: auto;
    columns: 2;
    p {
      text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.6);
      font-size: 1.5em;
      line-height: 1em;
      color: #252425;
      text-align: center;
    }
  }
  @media (max-width: 48em) {
    article {
      column-count: 1;
      overflow: auto;
    }
  }
}
code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
