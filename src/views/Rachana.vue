<template>
  <v-container class="rachana col-xl-8 col-sm-10 col-xs-12">
    <main>
      <h1 class="display-3" v-text="$i18n('rachana')"></h1>
      <div id="intro" class="row">
        <p class="title-2 col-lg-6">
          Designer: Hussain K H | {{ fontdata.version }}
        </p>
        <v-btn
          to="/downloads/fonts/rachana/rachana.zip"
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
                class="rachana-slide-0 py-auto"
                height="100%"
                align="center"
                color="tranparent"
              >
                <h1 class="display-3 font-weight-thin py-2 my-4">രചന</h1>
                <h2 class="display-5 font-weight-thin py-2 my-4">
                  യുണിക്കോഡ് അക്ഷരരൂപം
                </h2>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="rachana-slide-1 py-auto fill-height"
                height="100%"
                align="center"
                color="tranparent"
              >
                <p class="pa-4 ma-4">
                  Rachana is a Malayalam font designed by Hussain K. H.
                </p>
              </v-card>
            </v-carousel-item>
            <v-carousel-item>
              <v-card
                class="rachana rachana-slide-2 py-auto"
                height="100%"
                color="tranparent"
              >
                <article>
                  <h2>
                    നാടൊന്നാകെ നാടകത്തെ ഏറ്റെടുക്കുമ്പോള്‍
                  </h2>
                  <p>
                    ഖസാക്കിന്റെ ഇതിഹാസം നാടകം മലയാള­നാടക­ചരിത്രത്തിലെ ഒരു
                    സംഭവ­മാണ്–ഒരു ഗ്രാമം ഒത്തുചേര്‍ന്ന് നാടകം സൃഷ്ടിക്കുക.
                    കുഞ്ഞുങ്ങള്‍­മുതല്‍ വൃദ്ധര്‍വരെ അഭിനേതാ­ക്കളാകുക,
                    നാടക­ത്തിനായി ഗ്രാമ­ത്തിലെ എല്ലാ കുടുംബ­ങ്ങളും മാസ­ങ്ങളോളം
                    പണി­യെടുക്കുക. അടുത്ത­കാലത്തൊന്നും ഇത്തര­ത്തിലൊരു
                    സംഘാടന­മുണ്ടായിട്ടില്ല. അവ­തരണ­ത്തിലും നാടകം
                    ശ്രദ്ധയാ­കര്‍ഷിച്ചു. ഇന്ത്യയുടെ വിവിധ­ഭാഗങ്ങളില്‍നിന്ന്
                    നാടകാ­സ്വാദകര്‍ ഖസാക്ക് കാണാന്‍ തൃക്കരിപ്പൂരി­ലെത്തി.
                    അന്തര്‍­ദേശീയ­പ്രശസ്തരായ നാടക­പ്രവര്‍ത്ത­കരുടെ പിന്തുണ­യോടെ
                    തൃക്കരിപ്പൂര്‍ കെഎംകെ കലാ­സമിതി അവതരി­പ്പിക്കുന്ന നാടകം
                    കൊടുങ്ങല്ലൂരില്‍ അരങ്ങേ­റുകയാണ് ഏപ്രില്‍ 1, 2, 3
                    തീയതികളില്‍.
                  </p>
                  <p>
                    നാടകം രൂപപ്പെടുത്താന്‍ ഒരു­ദേശം മുഴുവന്‍ ഒരുമിച്ചതു­പോലെ
                    അതിന് അരങ്ങൊരുക്കാന്‍ കേരളത്തി­ലെമ്പാടും ജനകീയ­കൂട്ടായ്മകള്‍
                    രൂപപ്പെടു­കയാണ്. കൊടു­ങ്ങല്ലൂര്‍ ബോയ്സ് ഹൈസ്കൂള്‍
                    ഗ്രൌ­ണ്ടില്‍ വേദിയൊ­രുക്കാന്‍ തീരു­മാനിക്കു­മ്പോള്‍
                    സംഘാട­കരായ കൊടു­ങ്ങല്ലൂര്‍ ഫിലിം സൊസൈറ്റിക്ക് വലിയ
                    ലക്ഷ്യ­ങ്ങളൊന്നു­മുണ്ടായിരുന്നില്ല. എന്‍ മാധ­വന്‍കുട്ടി­യും
                    കമലും നജ്മല്‍­ബാബുവും ഉള്‍പ്പെ­ടുന്ന വലിയ നിര
                    സംഘാടന­ത്തിന്റെ മുന്‍നിര­യിലേക്ക് വരു­ന്നതോടെ ചിത്രം മാറി.
                    ബഹദൂര്‍ സ്മാരക ട്രസ്റ്റ് കൂടി സംഘാട­നത്തില്‍ ഭാഗമായി. കൊച്ചി
                    ബിനാലെ സംഘാ­ടകര്‍ സഹായ­വുമാ­യെത്തി. ജനാധിപത്യ
                    മതേതര­കൂട്ടായ്മ­യായി സംഘാടക­സമിതി മാറി. സംഘാടകരറി­യാതെ­തന്നെ
                    പ്രചാരണ­ത്തിന്റെ തലം മാറി. ചുമ­രുകളില്‍ ചിത്രം­വരയും
                    ഇന്‍സ്റ്റലേഷനും ചെറു നാടകാവ­തരണങ്ങളും ഗസല്‍ സായാ­ഹ്നവും
                    കവിയരങ്ങും സെമിനാ­റുകളും പ്രചാ­രണ­ത്തിന്റെ ഭാഗമായി
                    നട­ക്കുന്നു. ചിത്ര­കാരന്മാര്‍, സിനിമാ­പ്രവര്‍ത്ത­കര്‍,
                    കവികള്‍, നാടക­പ്രവര്‍ത്ത­കര്‍ എല്ലാം പ്രചാരണ­ത്തിനെത്തുന്നു.
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
                href="/downloads/fonts/rachana/Rachana-Regular.ttf"
                color="primary"
                text
              >
                {{ $i18n("regular") }}
              </v-btn>
              <v-btn
                href="/downloads/fonts/rachana/Rachana-Bold.ttf"
                color="primary"
                text
              >
                {{ $i18n("bold") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              Webfonts in woff2 format for embedding in webpages. Also see
              <a href="#webfonts">how to use in webpages</a>:
              <v-btn
                href="/downloads/fonts/rachana/Rachana-Regular.woff2"
                color="primary"
                text
              >
                {{ $i18n("regular") }}
              </v-btn>
              <v-btn
                href="/downloads/fonts/rachana/Rachana-Bold.woff2"
                color="primary"
                text
              >
                {{ $i18n("bold") }}
              </v-btn>
            </li>
            <li class="my-4 font-weight-bold">
              All files in compressed zip file:
              <v-btn
                href="/downloads/fonts/rachana/rachana.zip"
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
            To use Rachana in web pages, webfonts can be used. You may copy the
            following css and add to your website:
          </p>
          <code>
            @import url('https://smc.org.in/fonts/rachana.css'); html {
            font-family: 'Rachana', sans-serif; }
          </code>
        </div>
      </section>
      <section id="license" class="row">
        <h2 v-text="$i18n('license')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Rachana is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
      </section>
      <section id="sourcecode" class="row">
        <h2 v-text="$i18n('sourcecode')" class="col-lg-4 col-md-12"></h2>
        <p class="col-lg-8 col-md-12">
          Rachana typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/rachana">gitlab repository</a>
        </p>
      </section>
      <section id="glyphs" class="row">
        <h2 v-text="$i18n('Available glyphs')" class="col-lg-12"></h2>
        <h4 v-if="fontdata && fontdata.summary" class="col-lg-12">
          {{ fontdata.summary.glyphs }} Glyphs
        </h4>
        <glyphs font="Rachana" class="col-lg-12" :glyphs="fontdata.glyphs" />
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
          <h4 id="contribute">Can I help with improving Rachana?</h4>
          <p>
            Yes you can! Rachana is an open-source project, meaning the source
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
    return fetch("/downloads/fonts/rachana/Rachana.json")
      .then(response => response.json())
      .then(data => {
        this.fontdata = data;
      });
  }
};
</script>
<style lang="less">
.rachana section {
  margin: 3em 0;

  .v-card {
    padding: 2em;
  }
}
.rachana-slide-0,
.rachana-slide-1,
.rachana-slide-2 {
  font-family: "Rachana" !important;
}
.rachana-slide-0 {
  background: linear-gradient(45deg, #9dc66b 5%, #4fa49a 30%, #4361c2);
}
.rachana-slide-1 {
  background: linear-gradient(to left, #ffeeee, #ddefbb);
  p {
    color: #252425;
  }
}
.rachana-slide-2 {
  font-family: "Rachana" !important;
  background: linear-gradient(45deg, #ddefbb, #d35aa5);
  p {
    color: #1a143b;
  }
  h2 {
    font-size: 2rem;
    line-height: 1em;
    color: #2980b9;
    text-align: center;
    padding-bottom: 0.3em;
  }
  article {
    width: 100%;
    columns: 3;
    column-gap: 1rem;
    margin: auto;
    p {
      font-size: 1em;
      line-height: 1.1em;
      color: #252425;
      text-align: left;
    }
  }
}
code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}

@media (max-width: 48em) {
  .rachana article {
    column-count: 1;
  }
}
</style>
