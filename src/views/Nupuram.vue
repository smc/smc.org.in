<template>
  <v-container class="nupuram col-xl-8 col-sm-10 col-lg-12">
    <main id="nupuram">
      <font-title
        :name="$i18n('nupuram')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/Nupuram/Nupuram.zip"
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
        <p>Variable font with 4 design axes.</p>
        <p>One file.</p>
        <p>Thousands of variations.</p>
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
        <v-slider
          v-model="softness"
          min="0"
          max="100"
          label="Softness"
          thumb-label="always"
        />
      </section>

      <section
        id="varinfo"
        class="d-flex row"
      >
        <h2 class="text-h2">
          Find the right width, weight, & slant that fits you.
        </h2>
        <p class="text-h5  ma-5">
          <a
            href="https://web.dev/variable-fonts/"
          >Variable fonts</a> give you granular control of fonts are displayed by packaging a set of variable axes into one single font file.
          <br>
          Nupuram come with four variable axes each: weight (thin to black), width (condensed to expanded), soft(sharp to supersoft) and slant (regular to italics). By combining these axes freely, you have access to thousands of different looks, and endless of possibilities.
        </p>
      </section>
      <section
        id="info"
        class=" "
      >
        <p class="text-body-1">
          Nupuram is licensed under the
          <a href="http://scripts.sil.org/OFL">SIL Open Font License</a>,
          Version 1.1.
        </p>
        <p class="text-body-1">
          Nupuram typefaces's source code, including svg drawings, build scripts
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
        fontVariationSettings: `'wght' ${weight.value}, 'wdth' ${width.value}, 'soft' ${softness.value}, 'slnt' ${slant.value}`,
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
.v-container.nupuram {
  max-width: 100vw !important;
}
.header {
  font-family: "Nupuram" !important;
  text-align: center;
}

.playground {
  font-size: 5vw;
  text-align: center;
  font-family: "Nupuram" !important;
  font-weight: 100;
  background: rgb(var(--v-theme-primary));
  line-height: 1.2;
  padding: 10px;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.var-animate {
  font-size: 12vw;
  font-family: "Nupuram" !important;

  background: linear-gradient(
    90deg,
    hsla(358, 85%, 68%, 1) 0%,
    hsla(41, 98%, 49%, 1) 100%
  );

  line-height: 1.5;
  padding: 10px;

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.var-animate > span {
  --dur: 10s;

  will-change: font-variation-settings;
  animation: vars var(--dur) infinite linear both;
}

@keyframes vars {
  0% {
    font-variation-settings: "wght" 100, "wdth" 75, "soft" 20, "slnt" 10;
  }
  30% {
    font-variation-settings: "wght" 900, "wdth" 100, "soft" 60, "slnt" 5;
  }
  60% {
    font-variation-settings: "wght" 100, "wdth" 125, "soft" 100, "slnt" 0;
  }
  100% {
    font-variation-settings: "wght" 100, "wdth" 75, "soft" 20, "slnt" 10;
  }
}

code {
  padding: 1em;
  display: block;
  white-space: pre-wrap;
  word-break: break-all;
}
</style>
