<template>
  <v-container class="nupuramcalligraphy col-xl-8 col-sm-10 col-lg-12">
    <main id="nupuramcalligraphy">
      <font-title
        :name="$i18n('nupuramcalligraphy')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/Nupuram-Calligraphy/Nupuram-Calligraphy.zip"
      />

      <section class="header">
        <h1 class="var-animate">
          <span>നൂ</span>
          <span>പു</span>
          <span>രം</span>
        </h1>
        <h1 class="var-animate">
          <span>N</span>
          <span>u</span>
          <span>p</span>
          <span>u</span>
          <span>r</span>
          <span>a</span>
          <span>m</span>
        </h1>
      </section>
      <section
        class="playground"
        contenteditable
        :style="playgroundVariations"
      >
        <p>Calligraphic style Variable font.</p>
        <p>One file.</p>
        <p>Variable Calligraphic pen nib width</p>
        <p>Infinite possibilities.</p>
      </section>
      <section class="flex-md-row flex-lg-column justify-start tools">
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
      </section>
      <section
        id="varinfo"
        class="d-flex row"
      >
        <h2 class="text-h2">
          Find the right weight that fits you.
        </h2>
        <p class="text-h5  ma-5">
          <a
            href="https://web.dev/variable-fonts/"
          >Variable fonts</a> give you granular control of fonts are displayed by packaging a set of variable axes into one single font file.
          <br>
          Nupuram Calligraphy ome with single variable axis: weight (thin to black). By using this axis freely, you have access to different looks, and endless of possibilities.
        </p>
      </section>
      <section
        id="info"
        class="row"
      >
        <p>
          Nupuram Calligraphy is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p><p>
          Nupuram Calligraphy typefaces's source code, including svg drawings, build scripts
          are available at
          <a href="https://gitlab.com/smc/fonts/nupuram">gitlab repository</a>
        </p>
      </section>
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
  font-family: "NupuramCalligraphy" !important;
  text-align: center;
}

.playground {
  font-size: 5vw;
  text-align: center;
  font-family: "NupuramCalligraphy" !important;
  font-weight: 100;
  background: rgb(var(--v-theme-primary));
  line-height: 1.2;
  padding: 10px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.var-animate {
  font-size: 12vw;
  font-family: "NupuramCalligraphy" !important;
  line-height: 1.5;
  padding: 10px;
}
.var-animate > span {
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
