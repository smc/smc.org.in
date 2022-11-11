<template>
  <v-container class="nupuramcalligraphy v-col-xl-8 v-col-sm-10 v-col-lg-12">
    <main id="nupuramcalligraphy">
      <font-title
        :name="$i18n('nupuramcalligraphy')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/nupuram/Nupuram-Calligraphy.zip"
      />

      <section class="header">
        <h1 class="var-animate">
          നൂപുരം
        </h1>
        <h1 class="var-animate">
          Nupuram
        </h1>
      </section>
      <v-sheet

        class="my-2 playground d-flex flex-wrap"
      >
        <v-card
          variant="outlined"
          contenteditable
          :style="playgroundVariations"
          class="content pa-5  v-col-md-8 v-col-sm-12  v-col-xs-12"
        >
          <p>Calligraphic style Variable font.</p>
          <p>One file.</p>
          <p>Variable Calligraphic pen nib width</p>
          <p>Infinite possibilities.</p>
        </v-card>
        <v-card class="v-col-md-4 v-col-sm-12  v-col-xs-12 tools">
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
        </v-card>
      </v-sheet>
      <v-sheet
        id="varinfo"
        class="d-flex flex-wrap row pa-5 py-10 "
      >
        <h2 class="text-h2 v-col-lg-4">
          Find the right weight that fits you.
        </h2>
        <p class="text-h5  v-col-lg-8">
          <a
            href="https://web.dev/variable-fonts/"
          >Variable fonts</a> give you granular control of fonts are displayed by packaging a set of variable axes into one single font file.
          <br>
          Nupuram Calligraphy ome with single variable axis: weight (thin to black). By using this axis freely, you have access to different looks, and endless of possibilities.
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
          Nupuram is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
          <br>
          Nupuram typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/nupuram">gitlab repository</a>
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
    const softness = ref(50);
    const width = ref(100);
    const playgroundVariations = computed(() => {
      return {
        fontSize: `${size.value}px`,
        fontVariationSettings: `'wght' ${weight.value}`,
      };
    });
    return {
     mdiDownload,
      size,
      weight,
      slant,
      softness,
      width,
      playgroundVariations,
    };
  }

};
</script>
<style lang="less">
.v-container.nupuramcalligraphy {
  max-width: 100vw !important;
}
.header {
  font-family: "Nupuram Calligraphy" !important;
  text-align: center;
}


.playground {
  font-size: 5vw;
  text-align: center;

  font-weight: 100;

  line-height: 1.2;
  padding: 10px;
  .content {
    font-family: "Nupuram Calligraphy" !important;
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
  }

}
.var-animate {
  font-size: 12vw;
  font-family: "Nupuram Calligraphy" !important;
  line-height: 1.5;
  padding: 10px;

  --dur: 10s;

  will-change: font-variation-settings;
  animation: vars var(--dur) infinite linear both;
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
