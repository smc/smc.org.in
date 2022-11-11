<template>
  <v-container class="chilanka col-xl-8 col-sm-10 col-xs-12">
    <main id="chilanka">
      <font-title
        :name="$i18n('chilanka')"
        :version="fontdata.version"
        author="Designer: Santhosh Thottingal"
        link="/downloads/fonts/chilanka/chilanka.zip"
      />

      <section
        id="header"
        class="row"
      >
        <v-sheet class="col-12">
          <v-carousel
            cycle
            height="400"
            hide-delimiter-background
            :show-arrows="false"
          >
            <v-carousel-item>
              <v-card
                class="chilanka-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="text-h2 font-weight-thin py-2 my-4">
                  ചിലങ്ക
                </h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="chilanka-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  Chilanka is Malayalam handwriting style font designed by
                  Santhosh Thottingal. Chilanka follows the common style one can
                  see in everyday handwriting of Malayalam. It has a
                  comprehensive Malayalam glyph set that contains most of the
                  unique Malayalam conjuncts. The glyph strokes are of uniform
                  width with round ends giving the impression of written with
                  either a thin felt-tip pen, or a ball-point pen. Sharp corners
                  are completely avoided and gives the fine touch of beautiful
                  curves of Malayalam script. The style is not the handwriting
                  style of designer, but is based on many handwriting samples he
                  observed. A uniform set was selected from them for the font.
                  Even though the style is handwriting, the glyphs follow the
                  horizontal baseline and can be used for body text too. The
                  font was released in 2014 and nowadays used widely in comic
                  strips, inviitation letters etc. In 2016, latin glyphs were
                  added matching the style of Malayalam glyphs. This is one of
                  the popular fonts released by Swathanthra Malayam Computing
                  project. Chilanka is developed using Inkscape and Fontforge.
                  The souce code including the SVG drawings can be found at
                  https://gitlab.com/smc/chilanka
                </p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="chilanka-slide-2 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <p>
                    തോറ്റകുട്ടി പുറത്തേക്കിറങ്ങി <br>
                    തോട്ടുവെള്ളത്തില്‍ പുസ്തകം വിട്ടു <br>
                    കാറ്റിലേക്കു കുടയും കൊടുത്തു. <br>
                    തുണ്ടുപെന്‍സിലെറിഞ്ഞു കളഞ്ഞു <br>
                    കണ്ട കാട്ടു വഴിയില്‍ നടന്നു... <br>
                    തൊട്ടു മെല്ലെ വിളിച്ചപോല്‍ തോന്നി <br>
                    തൊട്ടടുത്തു പിറകില്‍ വന്നാരോ <br>
                    തിത്തിരിപ്പക്ഷി മൂളിയതാകാം <br>
                    കൊച്ചുതുമ്പയോ മൈനയോ ആവാം <br>
                    കാട്ടുവള്ളിയില്‍ തൂങ്ങിക്കുതിച്ച് <br>
                    കാട്ടിലേക്കവന്‍ ചെന്നുപോല്‍ പിന്നെ <br>
                    പൂത്തമുല്ലതന്‍ സൗരഭം നീന്തും <br>
                    കാറ്റവനൊരു പാട്ടുപോല്‍ തോന്നി <br>
                    പൂക്കളൊക്കെയും വാക്കുകള്‍, പായും <br>
                    കാട്ടരുവി കളകള ഗാനം <br>
                    രാത്രി നക്ഷത്ര വിസ്തൃതാകാശം <br>
                    നീര്‍ത്തിവച്ചൊരു പുസ്തകമായി <br>
                    തോറ്റകുട്ടിയെ തോളത്തുവച്ചു. <br>
                    പൂത്തുനിന്നു മരതകക്കുന്ന് chil<br>
                    തോല്‍ക്കുകില്ല നീയെന്നേ പറഞ്ഞു <br>
                    കാത്തു നില്‍ക്കുന്നൊരമ്പിളിത്തെല്ല്...!
                    <br>
                    <br>
                    തോറ്റകുട്ടി(റഫീക്ക് അഹമ്മദ്)
                  </p>
                </article>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="chilanka-slide-3 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <article>
                  <p>
                    Mary had a little lamb, <br>
                    His fleece was white as snow, <br>
                    And everywhere that Mary went, <br>
                    The lamb was sure to go.
                    <br>
                    <br>
                    He followed her to school one day, <br>
                    Which was against the rule, <br>
                    It made the children laugh and play <br>
                    To see a lamb at school.
                    <br>
                    <br>
                    And so the teacher turned it out, <br>
                    But still it lingered near, <br>
                    And waited patiently about, <br>
                    Till Mary did appear.
                    <br>
                    <br>
                    "Why does the lamb love Mary so?" <br>
                    The eager children cry. <br>
                    "Why, Mary loves the lamb, you know," <br>
                    The teacher did reply.
                  </p>
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
          class="col-lg-4 col-md-12"
          v-text="$i18n('download')"
        />
        <div class="col-lg-8 col-md-12">
          <ul>
            <li class="my-4 font-weight-bold">
              TTF Format:
              <v-btn href="/downloads/fonts/chilanka/Chilanka-Regular.ttf">
                {{ $i18n("regular") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              Webfonts in woff2 format for embedding in webpages. Also see
              <a href="#webfonts">how to use in webpages</a>:
              <v-btn href="/downloads/fonts/chilanka/Chilanka-Regular.woff2">
                {{ $i18n("regular") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn href="/downloads/fonts/chilanka/chilanka.zip">
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
          class="webfonts col-lg-4 col-md-12"
          v-text="$i18n('webfonts')"
        />
        <div class="col-lg-8 col-md-12">
          <p>
            To use Chilanka in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code style="word-break: break-all">
            @import url('https://smc.org.in/fonts/chilanka.css'); html {
            font-family: 'Chilanka', sans-serif; }
          </code>
          <h3
            class="webfonts"
            v-text="$i18n('google-fonts-webfonts')"
          />
          <p>
            Chilanka is also available in Google fonts. Using Chilanka from
            Google webfonts may be faster than the above approach. Please refer
            <a href="https://fonts.google.com/specimen/Chilanka">google fonts documentation for Chilanka</a>:
          </p>
        </div>
      </section>
      <section
        id="license"
        class="row"
      >
        <h2
          class="col-lg-4 col-md-12"
          v-text="$i18n('license')"
        />
        <p class="col-lg-8 col-md-12">
          Chilanka is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section
        id="sourcecode"
        class="row"
      >
        <h2
          class="col-lg-4 col-md-12"
          v-text="$i18n('sourcecode')"
        />
        <p class="col-lg-8 col-md-12">
          Chilanka typefaces's source code, including svg drawings, build
          scripts are available at
          <a href="https://gitlab.com/smc/fonts/chilanka">gitlab repository</a>
        </p>
      </section>
      <section
        id="glyphs"
        class="row"
      >
        <h2
          class="col-lg-12"
          v-text="$i18n('Available glyphs')"
        />
        <h4
          v-if="fontdata && fontdata.summary"
          class="col-lg-12"
        >
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs
          font="Chilanka"
          class="col-lg-12"
          :glyphs="fontdata.glyphs"
        />
      </section>
      <section
        id="languages"
        class="row"
      >
        <h2
          class="col-lg-4 col-md-12"
          v-text="$i18n('Supported languages')"
        />
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
      <section
        id="style-variants"
        class="row"
      >
        <h2
          class="col-lg-4 col-md-12"
          v-text="$i18n('Style variants')"
        />
        <div class="col-lg-8 col-md-12">
          <p>
            Chilanka comes with many OpenType features that can be used to
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
                  class="font-chilanka"
                  style="font-feature-settings: 'salt' 1"
                >
                  ച്ച
                </v-col>
                <v-col
                  class="font-chilanka"
                  style="font-feature-settings: 'salt' 2"
                >
                  ച്ച
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  class="font-chilanka"
                  style="font-feature-settings: 'salt' 1"
                >
                  ള്ള
                </v-col>
                <v-col
                  class="font-chilanka"
                  style="font-feature-settings: 'salt' 2"
                >
                  ള്ള
                </v-col>
              </v-row>
              <p>
                To enable this alternatives use 'salt 2` variant. In CSS this
                can be done by adding style
                <code>font-feature-settings: "salt" 2;</code>. To disable, use
                <code>font-feature-settings: "salt" 1;</code>. Depending on the
                text editor application you are using, picking one of these
                variants is usually allowed. Please read
                <a
                  href="https://thottingal.in/blog/2018/01/06/stylistic-alternates-chilanka-chilanka/"
                >this article</a>
                to see how to use this with Inkscape, Browsers, Libreoffice and
                TeX.
              </p>
            </v-card-text>
          </v-card>
        </div>
      </section>
      <section
        id="playground"
        class="row"
      >
        <h2
          class="col-lg-4 col-md-12"
          v-text="$i18n('try-font')"
        />
        <div class="col-lg-12">
          <font-playground name="Chilanka" />
        </div>
      </section>
      <section
        id="history"
        class="row"
      >
        <h2
          class="col-lg-4 col-md-12"
          v-text="$i18n('history')"
        />
        <p class="col-lg-8 col-md-12">
          Released on October 27, 2014.
          <router-link
            to="/blog/new-handwriting-style-font-for-malayalam-chilanka"
          >
            Announcement
          </router-link>
        </p>
      </section>
      <section
        id="faq"
        class="row"
      >
        <h2
          class="col-lg-4 col-md-12"
          v-text="$i18n('faq')"
        />
        <div class="col-lg-8 col-md-12">
          <h4 id="contribute">
            Can I help with improving Chilanka?
          </h4>
          <p>
            Yes you can! Chilanka is an open-source project, meaning the source
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
#chilanka .text-h4,
#chilanka .text-h2,
#chilanka .display-5,
#chilanka .text-h3,
#chilanka .title,
#chilanka .text-h5 {
  font-family: "Chilanka" !important;
}

.chilanka section {
  margin: 3em 0;
  .v-card {
    padding: 2em;
  }
}
.chilanka-slide-0,
.chilanka-slide-1,
.chilanka-slide-2,
.chilanka-slide-3 {
  font-family: "Chilanka" !important;
}
.chilanka-slide-0 {
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.chilanka-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}
.chilanka-slide-2,
.chilanka-slide-3 {
  background: linear-gradient(30deg, #9ef8f4 35%, #2dff62ec);
  width: 100%;
  align-items: center;
  article {
    columns: 2;
    width: 80%;
    margin: auto;
    background-size: 100% 40px;
    p {
      font-size: 1em;
      line-height: 1.5em;
      color: #252425;
      text-align: justify;
    }
  }
  @media (max-width: 48em) {
    article {
      columns: 1;
    }
  }
}
.chilanka-slide-3 {
  background: linear-gradient(30deg, #61eee7 35%, #23a2ecec);
}
code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
