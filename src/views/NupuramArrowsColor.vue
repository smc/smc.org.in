<template>
  <v-container class="nupuramarrowscolor v-col-xl-8 v-col-sm-10 v-col-lg-12">
    <main id="nupuramarrowscolor">
      <font-title
        :name="$i18n('nupuramarrowscolor')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/nupuram/Nupuram-Arrows-Color.zip"
      />

      <section class="header">
        <h1 class="var-animate">
          നൂപുരം
        </h1>
        <h1 class="var-animate">
          Nupuram
        </h1>
      </section>
      <v-sheet class="my-2 playground d-flex flex-wrap">
        <v-card
          variant="outlined"
          contenteditable
          class="content pa-5 v-col-md-8 v-col-sm-12 v-col-xs-12"
          :style="playgroundVariations"
        >
          <p>Educational Color font.</p>
          <p>അക്ഷരങ്ങൾ എഴുതിപ്പഠിക്കാം</p>
          <p>First in Malayalam.</p>
        </v-card>
        <v-card class="py-10 v-col-md-4 v-col-sm-12 v-col-xs-12 tools">
          <v-slider
            v-model="size"
            min="8"
            max="216"
            step="1"
            label="Size(px)"
            thumb-label="always"
          />

          <v-slider
            v-model="palette"
            min="1"
            max="18"
            step="1"
            label="Palette"
            thumb-label="always"
          />
          <!--
          <v-color-picker
            v-model="baseColor"
            canvas-height="100"
          />
          <v-color-picker
            v-model="shadowColor"
            canvas-height="100"
          />
          <v-color-picker
            v-model="outlineColor"
            canvas-height="100"
          />-->
        </v-card>
      </v-sheet>


      <v-sheet
        id="varinfo"
        class="d-flex flex-wrap row pa-5 py-10 "
      >
        <h2 class="text-h2 v-col-lg-4">
          Educational font.
        </h2>
        <p class="text-h5 v-col-lg-8">
          A font to learn writing in Malayalam, to practice in worksheets, first time in Malayalam unicode fonts.
          <br>
          You can customize the color using ColrV1 technology.
        </p>
      </v-sheet>
      <v-sheet
        id="info"
        class="d-flex flex-wrap row pa-5 my-5"
      >
        <h2 class="text-h2 v-col-lg-4">
          Free and Opensource
        </h2>
        <p class="text-body-1 v-col-lg-8">
          Nupuram Arrows Color is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
          <br>
          Nupuram Arrows Color typefaces's source code, including svg drawings, build
          scripts are available at
          <a href="https://gitlab.com/smc/fonts/nupuram">gitlab repository</a>
        </p>
      </v-sheet>
    </main>
  </v-container>
</template>

<script>
import { mdiDownload } from "@mdi/js";

import FontTitle from "../components/FontTitle";
import { ref, computed, watch } from "vue";

function setCustomColors(palette, baseColor, shadowColor, outlineColor) {
  const colorFontName = "Nupuram Arrows Color";
  const sheetId = "custompalette";
  var sheet = document.getElementById(sheetId);
  if (!sheet) {
    sheet = document.createElement("style");
    sheet.id = sheetId;
    document.body.appendChild(sheet);
  }

  if (!baseColor) {
    sheet.innerHTML = `@font-palette-values --custom  {font-family: '${colorFontName}'; base-palette: ${palette};}`;
  } else {
    sheet.innerHTML = `@font-palette-values --custom  {font-family: '${colorFontName}'; base-palette: ${palette}; override-colors: 0 ${shadowColor}, 1 ${baseColor}, 2 ${outlineColor};}`;
  }
}

export default {
  components: { FontTitle },
  setup() {
    const size = ref(96);

    const palette = ref(0);
    const baseColor = ref('');
    const shadowColor = ref('');
    const outlineColor = ref('');
    const playgroundVariations = computed(() => {
      return {
        fontSize: `${size.value}px`,
        fontPalette: "--custom",
      };
    });
    watch(palette, (palette) => {
        setCustomColors(palette);
    })
    watch(baseColor, (baseColor) => {
        setCustomColors(palette.value, baseColor, shadowColor.value, outlineColor.value);
    })
    watch(shadowColor, (shadowColor) => {
        setCustomColors(palette.value, baseColor.value, shadowColor, outlineColor.value);
    })
    watch(outlineColor, (outlineColor) => {
        setCustomColors(palette.value, baseColor.value, shadowColor.value, outlineColor);
    })
    return {
      mdiDownload,
      size,
      palette,
      playgroundVariations,
      baseColor, shadowColor, outlineColor
    };
  },
};
</script>
<style lang="less">

.v-container.nupuramarrowscolor {
  max-width: 100vw !important;
}

.header {
  font-family: "Nupuram Arrows Color" !important;
  text-align: center;
  font-size: 12vw;
    h1{
        font-weight: 400;
    }
}

.playground {
  font-size: 5vw;
  text-align: center;

  font-weight: 100;

  line-height: 1.2;
  padding: 10px;
  .content {
    font-family: "Nupuram Arrows Color" !important;
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
  }
}

code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
