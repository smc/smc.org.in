<template>
  <v-container class="gayathri col-lg-8 col-sm-12">
    <main>
      <h1 class="display-3" v-text="$i18n('gayathri')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Designer: <a href="https://thottingal.in">Binoy Dominic</a>
          {{ fontdata.version }}
        </p>
        <v-btn
          to="/downloads/fonts/gayathri/gayathri.zip"
          color="primary"
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
          </v-carousel>
        </v-sheet>
      </section>
      <section id="download" class="row">
        <h2 v-text="$i18n('download')" class="col-lg-4 col-md-12"></h2>
        <div class="col-lg-8 col-md-12">
          <ul>
            <li class="my-4 font-weight-bold ">
              OTF Format, recommended for all modern operating systems:
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Regular.otf"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("regular") }}
              </v-btn>
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Thin.otf"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("thin") }} </v-btn
              ><v-btn
                href="/downloads/fonts/gayathri/Gayathri-Bold.otf"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("bold") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold ">
              TTF Format, for old versions of operating systems:
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Regular.ttf"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("regular") }}
              </v-btn>
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Thin.ttf"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("thin") }} </v-btn
              ><v-btn
                href="/downloads/fonts/gayathri/Gayathri-Bold.ttf"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("bold") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold ">
              Webfonts in woff2 format for embedding in webpages. Also see
              <a href="#webfonts">how to use in webpages</a>:
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Regular.woff2"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("regular") }}
              </v-btn>
              <v-btn
                href="/downloads/fonts/gayathri/Gayathri-Thin.woff2"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("thin") }} </v-btn
              ><v-btn
                href="/downloads/fonts/gayathri/Gayathri-Bold.woff2"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("bold") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold ">
              All files in compressed zip file:
              <v-btn
                href="/downloads/fonts/gayathri/gayathri.zip"
                color="primary"
                text
              >
                <v-icon>{{ mdiDownload }}</v-icon>
                {{ $i18n("zip") }}
              </v-btn>
            </li>
          </ul>
        </div>
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
      </section>
      <section id="history" class="row">
        <h2 v-text="$i18n('history')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">Released on Feb 21, 2019.</p>
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

  .v-card {
    padding: 2em;
  }
}

.gayathri-slide-1,
.gayathri-slide-0 {
  .display-4,
  .display-3,
  .display-5 {
    font-family: "Gayathri" !important;
  }
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
  align-content: center;
}
</style>
