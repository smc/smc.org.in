<template>
  <v-container class="nupuramdots v-col-xl-8 v-col-sm-10 v-col-lg-12">
    <main id="nupuramdots">
      <font-title
        :name="$i18n('nupuramdots')"
        version="0.1"
        author="Santhosh Thottingal"
        link="/downloads/fonts/nupuram/Nupuram-Dots.zip"
      />

      <section class="header">
        <h1>
          നൂപുരം
        </h1>
        <h1>
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
          <p>Educational font</p>
          <p>അക്ഷരങ്ങൾ എഴുതിപ്പഠിക്കാം</p>
        </v-card>
        <v-card class="v-col-md-4 v-col-sm-12  v-col-xs-12 tools">
          <v-slider
            v-model="size"
            min="8"
            max="216"
            label="Size(px)"
            thumb-label="always"
          />
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
      const size = ref(108);

      const playgroundVariations = computed(() => {
        return {
          fontSize: `${size.value}px`,
        };
      });
      return {
       mdiDownload,
        size,
        playgroundVariations,
      };
    }

  };
  </script>
  <style lang="less">
  .v-container.nupuramdots {
    max-width: 100vw !important;
  }
  .header {
    font-family: "Nupuram Dots" !important;
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
      font-family: "Nupuram Dots" !important;
      min-height: 75vh;
      max-height: 75vh;
      overflow: auto;
    }
  }
  </style>
