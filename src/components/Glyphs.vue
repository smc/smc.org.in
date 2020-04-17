<template>
  <section class="glyphs">
    <v-bottom-sheet inset :key="glyph.code" v-for="glyph in glyphs">
      <template v-slot:activator="{ on }">
        <v-btn
          class="glyph title"
          v-on="on"
          tile
          text
          color="primary"
          :style="`font-family:${font} !important;`"
          v-text="glyph.value"
        >
        </v-btn>
      </template>
      <v-sheet class=" pa-4">
        <v-row>
          <v-col class="text-center">
            <div
              class="display-4 py-4 text-center"
              :style="`font-family:${font} !important;`"
              v-text="`${glyph.value}`"
            ></div>
          </v-col>
          <v-col>
            <div class="subtitle-2" v-text="`Glyph name: ${glyph.name}`"></div>
            <div
              class="subtitle-2"
              v-if="glyph.code"
              v-text="`Code: ${glyph.code}`"
            ></div>
            <div
              class="subtitle-2"
              v-if="glyph.sequence"
              v-text="`Opentype feature: ${glyph.sequence.features}`"
            ></div>
            <div
              class="subtitle-2"
              v-if="glyph.sequence"
              v-text="`Glyphs: ${glyph.sequence.src}`"
            ></div>
            <div
              class="subtitle-2"
              v-if="glyph.mlsequence"
              v-text="`${glyph.mlsequence}`"
            ></div>
            <v-btn
              icon
              round
              title="Copy to clipboard"
              v-if="canCopy"
              @click="copy(glyph.value)"
            >
              <v-icon>{{ mdiContentCopy }}</v-icon></v-btn
            >
          </v-col>
        </v-row>
      </v-sheet>
    </v-bottom-sheet>
  </section>
</template>
<script>
import { mdiContentCopy } from "@mdi/js";
export default {
  name: "Glyphs",
  data: () => ({
    canCopy: false,
    mdiContentCopy
  }),
  props: {
    font: String,
    glyphs: Array,
    ligatures: Array
  },
  created() {
    this.canCopy = !!navigator.clipboard;
  },
  methods: {
    async copy(s) {
      await navigator.clipboard.writeText(s);
    }
  }
};
</script>
