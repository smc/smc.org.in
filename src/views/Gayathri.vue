<template>
  <v-container class="gayathri col-xl-8 col-sm-10 col-xs-12">
    <main>
      <h1 class="display-3" v-text="$i18n('gayathri')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Designer:
          <a href="https://thottingal.in">Binoy Dominic</a>
          {{ fontdata.version }}
        </p>
        <v-btn
          to="/downloads/fonts/gayathri/gayathri.zip"
          color="primary"
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
            height="50vh"
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
                <h1 class="display-4 font-weight-thin py-2 my-4">ഗായത്രി</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="gayathri-slide-1 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-3 font-weight-thin py-1 my-2">ഗായത്രി</h1>
                <h1 class="display-3 font-weight-regular py-1 my-2">ഗായത്രി</h1>
                <h1 class="display-3 font-weight-bold py-1 my-2">ഗായത്രി</h1>
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
                  A gentle and modern Malayalam display typeface. Available in
                  three weights, Gayathri is best suited for headlines, posters,
                  titles and captions. Unicode compliant and libre licensed.
                </p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="gayathri-slide-2 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <div class="bold">ഗായത്രി</div>
                  <div class="regular">ഗായത്രി</div>
                  <div class="thin">ഗായത്രി</div>
                </article>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="gayathri-slide-3 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <h1>തിരമൊഴി</h1>
                  <span class="author">പി പി രാമചന്ദ്രൻ</span>
                  <div class="blurb">
                    <p>
                      രേഖീയമായ തുടര്‍ച്ചയല്ല, അരേഖീയ­മായ പടര്‍ച്ച­യാണ്‌
                      തിര­മൊഴിയുടെ ഘടന. വല­ക്കണ്ണി‌ക­ളെപ്പോലെ
                      പര­സ്‌പര­ബന്ധിത­മായ പാഠ­ങ്ങളേ തിര­മൊഴി­യിലുള്ളൂ.
                      പിന്തുടര്‍ച്ചാ‌­സംസ്‌കൃതി‌­യില്‍നിന്ന്‌ (hierarchical
                      culture) ശൃംഖലാ­സംസ്‌കൃതി­യിലേക്കുള്ള (networked culture)
                      സാമൂ­ഹിക­പരി­ണാമ­ത്തിന്റെ സൂച­കം കൂടിയാണ്‌ തിര­മൊഴി.
                    </p>
                  </div>
                  <div class="main">
                    <p>
                      ഭാഷ‌യ്‌ക്ക്‌ വാമൊഴി‌­യെന്നും വരമൊഴി‌­യെന്നും രണ്ടു
                      വക­ഭേദ‌ങ്ങള്‍ എന്നാണ്‌ ഭാഷാ­വിദ്യാര്‍ത്ഥികളുടെ
                      ആദ്യപാഠ­ങ്ങളിലൊന്ന്‌. വാ­കൊണ്ടു മൊഴി­യുന്നത്‌ വാമൊഴി.
                      വരച്ചു­കാട്ടുന്നത്‌ വരമൊഴി. കംപ്യൂട്ടറിന്റെ സഹായ‌­ത്തോടെ
                      ഭാഷ­യ്‌ക്കു ലഭിക്കുന്ന അധിക‌‌­മാന­ത്തെ­യാണ്‌ ഇവിടെ
                      തിര­മൊഴി എന്ന പദംകൊണ്ട്‌ വിവ­ക്ഷിക്കുന്നത്‌. തിര­യില്‍
                      കാണാ­വുന്നതും എഴുത‌ാ­വു‌ന്നതും വായിക്കാ­വുന്നതുമായ മൊഴി
                      എന്നോ തിര­പോലെ അസ്ഥിരവും രൂപാ­ന്തര­‌സാധ്യത­കളു‌ള്ളതു­മായ
                      മൊഴി എന്നോ തിര­‌യാവുന്ന മൊഴി എന്നോ ഒക്കെ ഈ പദ­ത്തിന്‌
                      നിഷ്‌പത്തി പറയാം. ഇംഗ്ലീഷില്‍ Hypertext എന്ന പദം കൊണ്ട്‌
                      അര്‍ത്ഥ‌മ‌ാ­ക്കുന്നത്‌ മല­യാള­‌ത്തില്‍ തിര­മൊഴി എന്ന
                      പദം‌കൊണ്ടും ഏറെ­ക്കുറെ സാധി­ക്കാ­മെന്നു വിചാരി­ക്കുന്നു.
                      ഭാഷ­യുടെ പരിണാമ­ചരിത്രം സാങ്കേ­തിക­വിദ്യയുടെ
                      പരി­ണാമ­ചരിത്രം­കൂടിയാണ്‌. വാ­മൊഴി­യില്‍ നിന്ന്‌
                      വര­മൊഴി­യി­ലേക്കും പിന്നീട്‌ തിര­മൊഴി­യിലേക്കും അതു
                      പരി­ണ­മിക്കുന്നു. വിവര­സാങ്കേ­തിക­വിദ്യയുടെ സൃഷ്ടിയാണ്‌
                      തിര­മൊഴി. സമസ്‌ത­വിവരങ്ങളും ഡിജിറ്റല്‍ ആയി
                      രേഖ­പ്പെടുത്താനും സൂക്ഷി­ക്കാനും വിതരണംചെയ്യാനും കഴിയുന്ന
                      കാലത്തെ ഭാഷാ­സവിശേഷ­തയാണ്‌.
                    </p>
                  </div>
                </article>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="gayathri-slide-4 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <h1>The North Wind &amp; The Sun</h1>
                  <p>
                    A dispute arose between the North Wind and the Sun, each
                    claiming that he was stronger than the other. At last they
                    agreed to try their powers upon a traveller, to see which
                    could soonest strip him of his cloak. The North Wind had the
                    first try; and, gathering up all his force for the attack,
                    he came whirling furiously down upon the man, and caught up
                    his cloak as though he would wrest it from him by one single
                    effort: but the harder he blew, the more closely the man
                    wrapped it round himself. Then came the turn of the Sun. At
                    first he beamed gently upon the traveller, who soon
                    unclasped his cloak and walked on with it hanging loosely
                    about his shoulders: then he shone forth in his full
                    strength, and the man, before he had gone many steps, was
                    glad to throw his cloak right off and complete his journey
                    more lightly clad.
                  </p>
                  <p class="lesson">Persuasion is better than force</p>
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
              OTF Format, recommended for all modern operating systems:
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Regular.otf"
                color="primary"
                text
                >{{ $i18n("regular") }}</v-btn
              >
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Thin.otf"
                color="primary"
                text
                >{{ $i18n("thin") }}</v-btn
              >
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Bold.otf"
                color="primary"
                text
                >{{ $i18n("bold") }}</v-btn
              >
            </li>
            <li class="my-4 font-weight-bold">
              TTF Format, for old versions of operating systems:
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Regular.ttf"
                color="primary"
                text
                >{{ $i18n("regular") }}</v-btn
              >
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Thin.ttf"
                color="primary"
                text
                >{{ $i18n("thin") }}</v-btn
              >
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Bold.ttf"
                color="primary"
                text
                >{{ $i18n("bold") }}</v-btn
              >
            </li>
            <li class="my-4 font-weight-bold">
              Webfonts in woff2 format for embedding in webpages. Also see
              <a href="#webfonts">how to use in webpages</a>:
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Regular.woff2"
                color="primary"
                text
                >{{ $i18n("regular") }}</v-btn
              >
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Thin.woff2"
                color="primary"
                text
                >{{ $i18n("thin") }}</v-btn
              >
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Bold.woff2"
                color="primary"
                text
                >{{ $i18n("bold") }}</v-btn
              >
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn
                href="/downloads/fonts/gayathri/gayathri.zip"
                color="primary"
                text
                >{{ $i18n("zip") }}</v-btn
              >
            </li>
          </ul>
        </div>
      </section>
      <section id="design" class="row">
        <h2 v-text="$i18n('design')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>Gayathri</p>
        </div>
      </section>
      <section id="webfonts" class="row">
        <h2 v-text="$i18n('webfonts')" class="webfonts col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            To use Gayathri in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code style="word-break: break-all;">
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
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs font="Gayathri" class="col-lg-12" :glyphs="fontdata.glyphs" />
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
              Latin. The following languages are covered:
              <span class="mr-2" :key="lang" v-for="lang in supportedLanguages">
                {{
                  Intl.DisplayNames
                    ? new Intl.DisplayNames("en").of(lang)
                    : lang
                }}
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section id="style-variants" class="row">
        <h2 v-text="$i18n('Style variants')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <p>
            Gayathri comes with many OpenType features that can be used to
            tailor functionality and aesthetics to your specific needs. Some of
            these features can be combined to form a great number of alternative
            variations.
          </p>
          <v-card class="ma-2">
            <v-card-title>Glyph alternatives</v-card-title>
            <v-card-text>
              <v-row>
                <v-col>Disabled</v-col>
                <v-col>Enabled</v-col>
              </v-row>
              <v-row>
                <v-col
                  class="font-gayathri"
                  style="font-feature-settings: 'salt' 1;"
                  >ച്ച</v-col
                >
                <v-col
                  class="font-gayathri"
                  style="font-feature-settings: 'salt' 2;"
                  >ച്ച</v-col
                >
              </v-row>
              <v-row>
                <v-col
                  class="font-gayathri"
                  style="font-feature-settings: 'salt' 1;"
                  >ള്ള</v-col
                >
                <v-col
                  class="font-gayathri"
                  style="font-feature-settings: 'salt' 2;"
                  >ള്ള</v-col
                >
              </v-row>
              <p>
                To enable this alternatives use 'salt 2` variant. In CSS this
                can be done by adding style
                <code>font-feature-settings: "salt" 2;</code>. To disable, use
                <code>font-feature-settings: "salt" 1;</code>. Depending on the
                text editor application you are using, picking one of these
                variants is usually allowed. Please read
                <a
                  href="https://thottingal.in/blog/2018/01/06/stylistic-alternates-gayathri-chilanka/"
                  >this article</a
                >
                to see how to use this with Inkscape, Browsers, Libreoffice and
                TeX.
              </p>
            </v-card-text>
          </v-card>
        </div>
      </section>
      <section id="history" class="row">
        <h2 v-text="$i18n('history')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">Released on Feb 21, 2019zzzzzzzzs.</p>
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
import Glyphs from "../components/Glyphs";

export default {
  data: () => ({
    mdiDownload,
    fontdata: {},
    supportedLanguages: [
      "aa",
      "ay",
      "bi",
      "br",
      "ch",
      "da",
      "de",
      "en",
      "es",
      "et",
      "eu",
      "fi",
      "fj",
      "fo",
      "fur",
      "fy",
      "gd",
      "gl",
      "gv",
      "ho",
      "ia",
      "id",
      "ie",
      "io",
      "is",
      "it",
      "ki",
      "lb",
      "mg",
      "nb",
      "nds",
      "nl",
      "nn",
      "no",
      "nr",
      "nso",
      "ny",
      "oc",
      "om",
      "pt",
      "rm",
      "sma",
      "smj",
      "so",
      "sq",
      "ss",
      "st",
      "sv",
      "sw",
      "tk",
      "tl",
      "tn",
      "ts",
      "uz",
      "vo",
      "vot",
      "wa",
      "xh",
      "yap",
      "zu",
      "an",
      "fil",
      "ht",
      "jv",
      "kj",
      "ku-tr",
      "kwm",
      "li",
      "ms",
      "na",
      "ng",
      "pap-an",
      "pap-aw",
      "rn",
      "rw",
      "sc",
      "sg",
      "sn",
      "su"
    ]
  }),
  components: { Glyphs },
  created() {
    return fetch("/downloads/fonts/gayathri/Gayathri.json")
      .then(response => response.json())
      .then(data => {
        this.fontdata = data;
      });
  }
};
</script>
<style lang="less">
.gayathri section {
  margin: 3em 0;

  // .v-card {

  // }
}
.gayathri-slide-1,
.gayathri-slide-0,
.gayathri-slide-2 {
  padding: 4em;
}
.gayathri-slide-0,
.gayathri-slide-1,
.gayathri-slide-2,
.gayathri-slide-3,
.gayathri-slide-4 {
  font-family: "Gayathri" !important;
}
.gayathri-slide-1,
.gayathri-slide-0 {
  padding: 4em;
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
  align-content: center;
}
.gayathri-slide-2 {
  background: linear-gradient(135deg, #74276c 0%, #c53364 100%);
  overflow: hidden;
  article {
    width: 80%;
    padding: 20px 10px;
    text-rendering: optimizeLegibility;
    border-top: 1px solid #f08a7e;
    border-bottom: 1px solid #f08a7e;
    font-size: 4em;
    text-align: center;
    .thin {
      font-weight: 100;
    }
    .bold {
      font-weight: 700;
    }
    .regular {
      font-weight: 400;
    }
  }
}
.gayathri-slide-3 {
  background: linear-gradient(to left, #ece9e6, #ffffff);
  h1 {
    color: #252425;
    font-size: 1.5em;
    font-weight: 700;
  }
  h2 {
    font-size: 1.2em;
    font-weight: 400;
  }
  article {
    width: 100%;
    height: 90%;
    margin: auto;
    padding-top: 20px;
    text-rendering: optimizeLegibility;
    .author {
      color: #555;
      font-size: 1em;
      padding: 0 30px;
    }
    .blurb {
      background-color: #bdc3c7;
      border-left: 10px solid #7f8c8d;
      p {
        font-size: 0.8em;
        font-weight: 100;
        padding: 20px;
        line-height: 1em;
        text-align: justify;
        color: #252425;
      }
    }
    .main {
      p {
        font-size: 1em;
        font-weight: 100;
        padding: 10px;
        text-align: left;
        line-height: 1.2em;
        color: #252425;
        column-count: 3;
        column-gap: 1em;
      }
      @media (max-width: 48em) {
        visibility: hidden;
      }
    }
  }
}
.gayathri-slide-4 {
  background: #16222a;
  background: linear-gradient(to left, #16222a, #3a6073);
  article {
    width: 90%;
    margin: auto;
    text-rendering: optimizeLegibility;
    color: #ffffff;
    h1 {
      font-size: 1.5em;
      font-weight: 100;
      padding: 10px 20px 0;
      margin: 10px 20px 0 0;
    }
    p {
      font-size: 1em;
      font-weight: 400;
      padding: 20px;
      text-align: justify;
      line-height: 1.2em;
      color: #ffffff;
    }
    .lesson {
      font-size: 1.2em;
      font-weight: 800;
      text-align: center;
      color: #ffffff;
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
