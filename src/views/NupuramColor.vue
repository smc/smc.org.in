<template>
  <v-container class="nupuramcolor v-col-xl-8 v-col-sm-10 v-col-lg-12">
    <main id="nupuramcolor">
      <font-title
        :name="$i18n('nupuramcolor')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/nupuram/Nupuram-Color.zip"
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
          <p>Variable Color font.</p>

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
            v-model="weight"
            min="100"
            max="900"
            step="1"
            label="Weight"
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
        class="d-flex flex-wrap row pa-5 py-10"
      >
        <h2 class="text-h2 v-col-lg-4">
          Find the right color and weight that fits you.
        </h2>
        <p class="text-h5 v-col-lg-8">
          <a href="https://web.dev/variable-fonts/">Variable fonts</a> give you
          granular control of fonts are displayed by packaging a set of variable
          axes into one single font file.
          <br>
          Nupuram come with a sing;e variable axis: weight (thin to black),
          By combining these axis and colors freely, you have access
          to thousands of different looks, and endless of possibilities.
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
          Nupuram Color is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
          <br>
          Nupuram Color typefaces's source code, including svg drawings, build
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
  const colorFontName = "Nupuram Color";
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
    const size = ref(48);
    const weight = ref(400);
    const palette = ref(0);
    const baseColor = ref('');
    const shadowColor = ref('');
    const outlineColor = ref('');
    const playgroundVariations = computed(() => {
      return {
        fontSize: `${size.value}px`,
        fontVariationSettings: `'wght' ${weight.value}`,
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
      weight,
      palette,
      playgroundVariations,
      baseColor, shadowColor, outlineColor
    };
  },
};
</script>
<style lang="less">

.v-container.nupuramcolor {
  max-width: 100vw !important;
}

.header {
  font-family: "Nupuram Color" !important;
  text-align: center;
}

.playground {
  font-size: 5vw;
  text-align: center;

  font-weight: 100;

  line-height: 1.2;
  padding: 10px;
  .content {
    font-family: "Nupuram Color" !important;
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
  }
}

.var-animate {
  --dur: 10s;
  font-size: 12vw;
  font-family: "Nupuram Color" !important;
  line-height: 1.5;
  padding: 10px;
  will-change: font-variation-settings;
  animation: vars var(--dur) infinite linear both;
  font-palette: --custom;
}

@keyframes vars {
  0% {
    font-variation-settings: "wght" 100;
  }
  50% {
    font-variation-settings: "wght" 900;
  }
  100% {
    font-variation-settings: "wght" 100;
  }
}

code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
