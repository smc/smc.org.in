<template>
  <v-container class="manjari v-col-xl-8 v-col-sm-10 v-col-xs-12">
    <main id="manjari">
      <font-title
        :name="$i18n('manjari')"
        :version="fontdata.version"
        author="Designer: Santhosh Thottingal"
        link="/downloads/fonts/manjari/manjari.zip"
      />

      <section
        id="header"
        class="row"
      >
        <v-sheet class="v-col-12">
          <v-carousel
            hide-delimiters
            height="60vh"
            :show-arrows="true"
          >
            <v-carousel-item>
              <v-card
                class="manjari-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-4 font-weight-thin py-2 my-4">
                  മഞ്ജരി
                </h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="manjari-slide-1 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="text-h2 font-weight-thin py-1 my-2">
                  മഞ്ജരി
                </h1>
                <h1 class="text-h2 font-weight-regular py-1 my-2">
                  മഞ്ജരി
                </h1>
                <h1 class="text-h2 font-weight-bold py-1 my-2">
                  മഞ്ജരി
                </h1>
                <p>Available in bold, regular, thin style variants.</p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="manjari-slide-2 py-auto fill-height"
                height="100%"
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
      <section
        id="download"
        class="row"
      >
        <h2
          v-i18n="'download'"
          class="v-col-lg-4 v-col-md-12"
        />
        <div class="v-col-lg-8 v-col-md-12">
          <ul>
            <li class="my-4 font-weight-bold">
              OTF Format, recommended for all modern operating systems:
              <v-btn
                v-i18n="'regular'"
                href="/downloads/fonts/manjari/Manjari-Regular.otf"
              />
              <v-btn
                v-i18n="'thin'"
                href="/downloads/fonts/manjari/Manjari-Thin.otf"
              />
              <v-btn
                v-i18n="'bold'"
                href="/downloads/fonts/manjari/Manjari-Bold.otf"
              />
            </li>
            <li class="my-4 font-weight-bold">
              TTF Format, for old versions of operating systems:
              <v-btn
                v-i18n="'regular'"
                href="/downloads/fonts/manjari/Manjari-Regular.ttf"
              />
              <v-btn
                v-i18n="'thin'"
                href="/downloads/fonts/manjari/Manjari-Thin.ttf"
              />
              <v-btn
                v-i18n="'bold'"
                href="/downloads/fonts/manjari/Manjari-Bold.ttf"
              />
            </li>
            <li class="my-4 font-weight-bold">
              Webfonts in woff2 format for embedding in webpages. Also see
              <a href="#webfonts">how to use in webpages</a>:
              <v-btn
                v-i18n="'regular'"
                href="/downloads/fonts/manjari/Manjari-Regular.woff2"
              />
              <v-btn
                v-i18n="'thin'"
                href="/downloads/fonts/manjari/Manjari-Thin.woff2"
              />
              <v-btn
                v-i18n="'bold'"
                href="/downloads/fonts/manjari/Manjari-Bold.woff2"
              />
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn
                v-i18n="'zip'"
                href="/downloads/fonts/manjari/manjari.zip"
              />
            </li>
          </ul>
        </div>
      </section>
      <section
        id="design"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('design')"
        />
        <div class="v-col-lg-8 v-col-md-12">
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
            based on the PHD thesis by Raph Levien -
            <a href="http://levien.com/phd/thesis.pdf">
              "From Spiral to Spline: Optimal Techniques in Interactive Curve
              Design"
            </a>
            . The Inconsolata monospace humanist latin font known for its clean
            lines and elegant design by Levien himself is based on this theory.
          </p>
          <p>
            The curve strokes in Manjari were drawn in Inkscape using the spiral
            library written by Raph Levien himself and opentype feature
            compilation was done using
            <a href="https://github.com/googlefonts/fontmake">fontmake</a>.
          </p>
          <p>
            The design principles of Manjari can be read from this paper:
            <a
              href="https://thottingal.in/documents/Spiral-Splines-Manjari.pdf"
            >
              "Spiral splines in typeface design: A case study of Manjari
              Malayalam typeface"
            </a>
            by Santhosh Thottingal and Kavya Manohar
          </p>
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
            To use Manjari in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code style="word-break: break-all">
            @import url('https://smc.org.in/fonts/manjari.css'); html {
            font-family: 'Manjari', sans-serif; }
          </code>
          <h3
            class="webfonts my-2"
            v-text="$i18n('google-fonts-webfonts')"
          />
          <p>
            Manjari is also available in Google fonts. Using Manjari from Google
            webfonts may be faster than the above approach. Please refer
            <a href="https://fonts.google.com/specimen/Manjari">google fonts documentation for Manjari</a>:
          </p>
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
          Manjari is licensed under the
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
          Manjari typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/manjari">gitlab repository</a>
        </p>
      </section>
      <!--
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="v-col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="v-col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs font="Manjari" class="v-col-lg-12" :glyphs="fontdata.glyphs" />
      </section>
      -->
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
              Latin. The following languages are covered:
              <span
                v-for="lang in supportedLanguages"
                :key="lang"
                class="mr-2"
              >
                {{ lang }}
              </span>
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
        <div class="v-col-lg-8 v-col-md-12">
          <p>
            Manjari comes with many OpenType features that can be used to tailor
            functionality and aesthetics to your specific needs. Some of these
            features can be combined to form a great number of alternative
            variations.
          </p>
          <v-card class="ma-2">
            <v-card-title>Glyph alternatives</v-card-title>
            <v-card-text>
              <v-row><v-col>Disabled</v-col><v-col>Enabled</v-col></v-row>
              <v-row>
                <v-col
                  class="title font-manjari"
                  style="font-feature-settings: 'salt' 1"
                >
                  ച്ച
                </v-col><v-col
                  class="title font-manjari"
                  style="font-feature-settings: 'salt' 2"
                >
                  ച്ച
                </v-col>
              </v-row>
              <v-row>
                <v-col
                  class="title font-manjari"
                  style="font-feature-settings: 'salt' 1"
                >
                  ള്ള
                </v-col><v-col
                  class="title font-manjari"
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
                  href="https://thottingal.in/blog/2018/01/06/stylistic-alternates-manjari-chilanka/"
                >this article</a>
                to see how to use this with Inkscape, Browsers, Libreoffice and
                TeX.
              </p>
            </v-card-text>
          </v-card>
          <v-card class="ma-2">
            <v-card-title>Tabular numbers</v-card-title>
            <v-card-text>
              <p>
                Fixed-width numbers are useful for tabular data, where comparing
                columns across rows is desired.
              </p>
              <v-row><v-col>Disabled</v-col><v-col>Enabled</v-col></v-row>
              <v-row>
                <v-col class="font-manjari">
                  <ul>
                    <li>345678</li>
                    <li>111111</li>
                    <li>1234567890</li>
                    <li>0040900</li>
                  </ul>
                </v-col>
                <v-col
                  class="font-manjari"
                  style="font-feature-settings: 'tnum'"
                >
                  <ul>
                    <li>345678</li>
                    <li>111111</li>
                    <li>1234567890</li>
                    <li>0040900</li>
                  </ul>
                </v-col>
              </v-row>
              <p>
                To enable this alternatives use 'tnum` variant. In CSS this can
                be done by adding style
                <code>font-feature-settings: "tnum";</code>.
              </p>
            </v-card-text>
          </v-card>
          <v-card class="ma-2">
            <v-card-title>Slashed zero</v-card-title>
            <v-card-text>
              <v-row><v-col>Disabled</v-col><v-col>Enabled</v-col></v-row>
              <v-row>
                <v-col class="font-manjari">
                  4500
                </v-col>
                <v-col
                  class="font-manjari"
                  style="font-feature-settings: 'zero'"
                >
                  4500
                </v-col>
              </v-row>
              <p>
                To enable this alternatives use 'zero` variant. In CSS this can
                be done by adding style
                <code>font-feature-settings: "zero";</code>.
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
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('try-font')"
        />
        <div class="v-col-lg-12">
          <font-playground
            name="Manjari"
            weights="['Thin','Regular','Bold']"
          />
        </div>
      </section>
      <section
        id="credits"
        class="row"
      >
        <h2
          class="v-col-lg-4 v-col-md-12"
          v-text="$i18n('credits')"
        />
        <div class="v-col-lg-8 v-col-md-12">
          <p>
            Manjari belongs to the typefaces released by Swathanthra Malayalam
            Computing, a volunteer driven organization for developing and
            promoting free and opensource software for Malayalam computing. It
            shares the experience and expertise by the organization in its more
            than a decade effort in standardizing and improving opentype
            Malayalam typeface technology. Manjari was released on July 23,
            2016.
          </p>

          <p>
            Designer: Santhosh Thottingal, Opentype Engineering: Santhosh
            Thottingal and Kavya Manohar
          </p>

          <p>
            Manjari inherits the traditional orthography style opentype font
            development practices pioneered by Rachana by K H Hussain and
            Rachana Aksharavedi. This includes glyph naming conventions, the
            supported ligature collection, a significant parts of opentype
            rules.
          </p>
          <p>Acknowledgements(in alphabetical order)</p>
          <ul>
            <li>K H Hussain, Designer of Rachana font.</li>
            <li>Raph Levien, Author of Spiro library.</li>
            <li>Rajeesh K V, Opentype engineering.</li>
            <li>
              Swathanthra Malayalam computing and its volunteers for all help
              and support.
            </li>
          </ul>
        </div>
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
            Can I help with improving Manjari?
          </h4>
          <p>
            Yes you can! Manjari is an open-source project, meaning the source
            code—or "source design" if you will—that is used to build the font
            files are freely available to improve upon. Font making requires a
            fair bit of technical work and depending on what you'd like to do,
            some things might be more fun depending on your technical skills.
            Please start by reading and exploring the source code and design
            files provided.
          </p>
          <h4 id="gdoc">
            Can I use Manjari in google docs?
          </h4>
          <p>
            Yes you can. Please see the detailed instructions at
            <router-link to="/blog/manjari-gayathri-chilanka-in-google-fonts">
              SMC blog
            </router-link>
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
      "su",
    ],
  }),
};
</script>
<style lang="less">
#manjari {
  .text-h4,
  .text-h3,
  .text-h2,
  .text-h1,
  .display-5,
  .title,
  .text-h5 {
    font-family: "Manjari" !important;
  }
}
.manjari section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}

.manjari-slide-1,
.manjari-slide-0 {
  .text-h1,
  .text-h2,
  .display-5 {
    font-family: "Manjari" !important;
  }
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
  align-content: center;
}

.manjari-slide-2 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
    font-size: 1.2em;
  }
}
</style>
