<template>
  <v-container class="suruma v-col-xl-8 v-col-sm-10 v-col-xs-12">
    <main id="suruma">
      <font-title
        :name="$i18n('suruma')"
        :version="fontdata.version"
        author="Designer: Suresh P"
        link="/downloads/fonts/suruma/suruma.zip"
      />
      <v-banner
        lines="three"
        icon="$warning"
        color="warning"
        class="my-4"
      >
        <v-banner-text>
          This font is no longer actively maintained by SMC Project. Here you
          can find the last released version.
        </v-banner-text>
      </v-banner>
      <section
        id="header"
        class="row"
      >
        <v-sheet class="v-col-12">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            :show-arrows="false"
          >
            <v-carousel-item>
              <v-card
                class="suruma-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="text-h2 font-weight-thin py-2 my-4">
                  സുറുമ
                </h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="suruma-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  The Suruma opentype font, is a Malayalam traditional script
                  font desinged by Kevinsiji. The characters are literally
                  written directly into a computer by Kevinsiji using a tablet
                  pen. Suruma follows a casual style, suitable for handwritten
                  type text. It has Individually designed glyphs for complex
                  conjuncts rather than using component glyphs.
                </p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="suruma-slide-2 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <p>
                    സുറുമയെഴുതിയ മിഴികളേ <br>
                    പ്രണയമധുരത്തേന്‍ തുളുമ്പും <br>
                    സൂര്യകാന്തിപ്പൂക്കളേ
                    <br>
                    <br>
                    ജാലകത്തിരശ്ശീല നീക്കി <br>
                    ജാലമെറിയുവതെന്തിനോ <br>
                    തേന്‍പുരട്ടിയ മുള്ളുകള്‍ നീ <br>
                    കരളിലെറിയുവതെന്തിനോ
                    <br>
                    <br>
                    ഒരു കിനാവിന്‍ ചിറകിലേറി <br>
                    ഓമലാളേ നീ വരു <br>
                    നീലമിഴിയിലെ രാഗലഹരി <br>
                    നീ പകര്‍ന്നു തരൂ തരൂ
                  </p>
                  <p>യൂസഫലി കേച്ചേരി</p>
                </article>
              </v-card>
            </v-carousel-item>
          </v-carousel>
        </v-sheet>
      </section>
      <section
        id="download"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('download')"
        />
        <div class="v-col-lg-8 v-col-md-12">
          <ul>
            <li class="my-4 font-weight-bold">
              TTF Format:
              <v-btn href="/downloads/fonts/suruma/Suruma.ttf">
                {{ $i18n("regular") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              Webfonts in woff2 format for embedding in webpages. Also see
              <a href="#webfonts">how to use in webpages</a>:
              <v-btn href="/downloads/fonts/suruma/Suruma.woff2">
                {{ $i18n("regular") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn href="/downloads/fonts/suruma/suruma.zip">
                {{ $i18n("zip") }}
              </v-btn>
            </li>
          </ul>
        </div>
      </section>
      <section
        id="webfonts"
        class="row"
      >
        <h2
          class="webfonts v-col-lg-4 v-col-md-12"
          v-text="$i18n('webfonts')"
        />
        <div class="v-col-lg-8 v-col-md-12">
          <p>
            To use Suruma in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code style="word-break: break-all">
            @import url('https://smc.org.in/fonts/suruma.css'); html {
            font-family: 'Suruma', sans-serif; }
          </code>
        </div>
      </section>
      <section
        id="license"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('license')"
        />
        <p class="v-col-lg-8 v-col-md-12">
          Suruma is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section
        id="sourcecode"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('sourcecode')"
        />
        <p class="v-col-lg-8 v-col-md-12">
          Suruma typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/suruma">gitlab repository</a>
        </p>
      </section>
      <section
        id="playground"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('try-font')"
        />
        <div class="v-col-lg-12">
          <font-playground name="Suruma" />
        </div>
      </section>

      <section
        id="languages"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('Supported languages')"
        />
        <div class="v-col-lg-8 v-col-md-12">
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
      <section
        id="style-variants"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('Style variants')"
        />
      </section>
      <section
        id="history"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('history')"
        />
        <p class="v-col-lg-8 v-col-md-12">
          Released on July 23, 2016.
        </p>
      </section>
      <section
        id="faq"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('faq')"
        />
        <div class="v-col-lg-8 v-col-md-12">
          <h4 id="contribute">
            Can I help with improving Suruma?
          </h4>
          <p>
            Yes you can! Suruma is an open-source project, meaning the source
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
  components: { FontTitle, FontPlayground },
  data: () => ({
    mdiDownload,
    fontdata: {},
  }),
};
</script>
<style lang="less">
#suruma .text-h4,
#suruma .text-h3,
#suruma .text-h2,
#suruma .text-h1,
#suruma .display-5,
#suruma .title,
#suruma .text-h5 {
  font-family: "Suruma" !important;
}

.suruma section {
  margin: 3em 0;
  .v-card {
    padding: 2em;
  }
}
.suruma-slide-0,
.suruma-slide-1,
.suruma-slide-2 {
  font-family: "Suruma" !important;
}
.suruma-slide-0 {
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.suruma-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}
.suruma-slide-2 {
  article {
    p {
      padding-top: 2em;
      color: #ffffff;
      margin: auto;
      text-align: center;
      font-size: 1.2em;
      line-height: 1em;
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
