<template>
  <v-container
    class="nupuram v-col-xl-8 v-col-sm-10 v-col-lg-10"
  >
    <main id="nupuram">
      <font-title
        :name="$i18n('nupuram')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/nupuram/Nupuram.zip"
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
          <v-slider
            v-model="softness"
            min="0"
            max="100"
            label="Softness"
            thumb-label="always"
          />
        </v-card>
      </v-sheet>


      <v-sheet
        id="varinfo"
        class="d-flex flex-wrap row pa-5 py-10 "
      >
        <h2 class="text-h4 v-col-lg-4">
          Find the right width, weight, & slant that fits you.
        </h2>
        <p class="text-h5  v-col-lg-8">
          <a
            href="https://web.dev/variable-fonts/"
          >Variable fonts</a> give you granular control of fonts are displayed by packaging a set of variable axes into one single font file.
          <br>
          Nupuram come with four variable axes each: weight (thin to black), width (condensed to expanded), soft(sharp to supersoft) and slant (regular to italics). By combining these axes freely, you have access to thousands of different looks, and endless of possibilities.
        </p>
        <div class="v-col-lg-4 v-col-md-2 v-col-sm-12">
          <div class="text-h6">
            Fine-typographic control
          </div>
          <div class="">
            Adjust font parameters in small increments for ultimate control without compromise.
          </div>
        </div>
        <div class="v-col-lg-4 v-col-md-2 v-col-sm-12">
          <div class="text-h6">
            Small font file sizes
          </div>
          <div class="">
            Reduce webfont file sizes and increase the performance of your website by using a single variable webfont throughout.
          </div>
        </div>
        <div class="v-col-lg-4 v-col-md-2 v-col-sm-12">
          <div class="text-h6">
            Text animations
          </div>
          <div class="">
            Stylistic variation of Nupuram are continuous, and can be animated for text transitions and special effects.
          </div>
        </div>
        <div class="v-col-lg-4 v-col-md-2 v-col-sm-12">
          <div class="text-h6">
            Optimal legibility
          </div>
          <div class="">
            Nupuram contain size-specific variations which make the text superbly legible, optimised for any size.
          </div>
        </div>
        <div class="v-col-lg-4 v-col-md-2 v-col-sm-12">
          <div class="text-h6">
            Responsive type
          </div>
          <div class="">
            Variable fonts assist in tuning type according to different formats, resolutions and display sizes.
          </div>
        </div>
      </v-sheet>
      <v-sheet
        id="info"
        class="d-flex flex-wrap row pa-5 my-5"
      >
        <h2 class="text-h4 v-col-lg-4">
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
  // max-width: 100vw !important;
}
.header {
  font-family: "Nupuram" !important;
  text-align: center;
}

.playground {
  font-size: 5vw;
  text-align: center;

  font-weight: 100;

  line-height: 1.2;
  padding: 10px;
  .content {
    font-family: "Nupuram" !important;
    min-height: 75vh;
    max-height: 75vh;
    overflow: auto;
  }

}

.var-animate {
  --dur: 10s;

  font-size: 12vw;
  font-family: "Nupuram" !important;

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
