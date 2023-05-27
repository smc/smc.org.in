<template>
  <v-container
    class="malini v-col-xl-8 v-col-sm-10 v-col-lg-12"
  >
    <main id="malini">
      <font-title
        :name="$i18n('malini')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/malini/Malini.zip"
      />

      <section class="header">
        <h1 class="var-animate">
          മാലിനി
        </h1>
        <h1 class="var-animate">
          Malini
        </h1>
      </section>
      <v-sheet
        class="my-2 playground d-flex flex-wrap"
      >
        <v-card
          variant="outlined"
          :style="playgroundVariations"
          contenteditable
          class="content pa-5 v-col-md-8 v-col-sm-12  v-col-xs-12"
        >
          <p>Variable font with 4 design axes.</p>
          <p>One file.</p>
          <p>Thousands of variations.</p>
          <p>Infinite possibilities.</p>
        </v-card>
        <v-card class="py-10 v-col-md-4 v-col-sm-12  v-col-xs-12 tools">
          <v-slider
            v-model="size"
            min="8"
            max="216"
            label="Size(px)"
            thumb-label="always"
          />
          <v-slider
            v-model="weight"
            min="100"
            max="900"
            label="Weight"
            thumb-label="always"
          />
          <v-slider
            v-model="slant"
            min="-15"
            max="0"
            label="Slant"
            thumb-label="always"
          />
          <v-slider
            v-model="width"
            min="75"
            max="125"
            label="Width"
            thumb-label="always"
          />
        </v-card>
      </v-sheet>


      <v-sheet
        id="varinfo"
        class="d-flex flex-wrap row pa-5 py-10 "
      >
        <h2 class="text-h2 v-col-lg-4">
          Find the right width, weight, & slant that fits you.
        </h2>
        <p class="text-h5  v-col-lg-8">
          <a
            href="https://web.dev/variable-fonts/"
          >Variable fonts</a> give you granular control of fonts are displayed by packaging a set of variable axes into one single font file.
          <br>
          Malini come with four variable axes each: weight (thin to black), width (condensed to expanded), optical size(style adjustments optimized for font size) and slant (regular to italics). By combining these axes freely, you have access to thousands of different looks, and endless of possibilities.
        </p>
      </v-sheet>
      <v-sheet
        id="info"
        class="d-flex flex-wrap row pa-5 my-5"
      >
        <h2 class="text-h2 v-col-lg-4">
          Free and Opensource
        </h2>
        <p class="text-body-1  v-col-lg-8">
          Malini is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
          <br>
          Malini typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/malini">gitlab repository</a>
        </p>
      </v-sheet>
    </main>
  </v-container>
</template>

<script>
import { mdiDownload } from "@mdi/js";

import FontTitle from "../components/FontTitle";
import { ref, computed } from "vue";
export default {
  components: { FontTitle },
  setup() {
    const size = ref(32);
    const weight = ref(400);
    const slant = ref(0);
    const width = ref(100);
    const playgroundVariations = computed(() => {
      return {
        fontSize: `${size.value}px`,
        fontOpticalSizing: 'auto',
        fontVariationSettings: `'wght' ${weight.value}, 'wdth' ${width.value}, 'slnt' ${slant.value}`,
      };
    });
    return {
        mdiDownload,
        size,
        weight,
        slant,
        width,
        playgroundVariations,
    };
  }

};
</script>
<style lang="less">
.v-container.malini {
  max-width: 100vw !important;
}
.header {
  font-family: "Malini" !important;
  text-align: center;
}

.playground {
  font-size: 5vw;
  text-align: center;

  font-weight: 100;

  line-height: 1.2;
  padding: 10px;
  .content {
    font-family: "Malini" !important;
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
  }

}

.var-animate {
  --dur: 10s;

  font-size: 12vw;
  font-family: "Malini" !important;

  background: linear-gradient(
    0deg,
    hsla(358, 85%, 68%, 1) 0%,
    hsla(41, 98%, 49%, 1) 100%
  );

  line-height: 1.5;
  padding: 10px;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  will-change: font-variation-settings;
  animation: vars var(--dur) infinite linear both;
}

@keyframes vars {
  0% {
    font-variation-settings: "wght" 100, "wdth" 75, "slnt" 10;
  }
  30% {
    font-variation-settings: "wght" 900, "wdth" 100, "slnt" 5;
  }
  60% {
    font-variation-settings: "wght" 100, "wdth" 125, "slnt" 0;
  }
  100% {
    font-variation-settings: "wght" 100, "wdth" 75, "slnt" 10;
  }
}

code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
