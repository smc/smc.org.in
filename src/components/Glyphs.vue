<template>
  <section class="glyphs" v-intersect="onIntersect">
    <template v-if="isIntersecting">
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
        <v-sheet class="pa-4">
          <v-row>
            <v-col class="text-center">
              <div
                class="display-4 py-4 text-center"
                :style="`font-family:${font} !important;`"
                v-text="`${glyph.value}`"
              ></div>
            </v-col>
            <v-col>
              <div
                class="subtitle-2"
                v-text="`Glyph name: ${glyph.name}`"
              ></div>
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
                text
                title="Copy to clipboard"
                v-if="canCopy"
                @click="copy(glyph.value)"
              >
                <v-icon icon="mdi-content-copy"></v-icon
                >Copy</v-btn
              >
            </v-col>
          </v-row>
        </v-sheet>
      </v-bottom-sheet>
    </template>
    <template v-else> Fetching glyphs... </template>
  </section>
</template>
<script>
import { Intersect } from "vuetify/lib/directives";
export default {
  name: "Glyphs",
  data: () => ({
    canCopy: false,
    isIntersecting: false,
  }),
  directives: {
    Intersect,
  },
  props: {
    font: String,
    glyphs: Array,
    ligatures: Array,
  },
  created() {
    this.canCopy = !!navigator.clipboard;
  },
  methods: {
    async copy(s) {
      await navigator.clipboard.writeText(s);
    },
    onIntersect(entries) {
      if (this.isIntersecting) {
        // Dont hide on off-screen once rendered
        return;
      }
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      this.isIntersecting = entries[0].isIntersecting;
    },
  },
};
</script>
