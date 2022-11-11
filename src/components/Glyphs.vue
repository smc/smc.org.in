<template>
  <section
    v-intersect="onIntersect"
    class="glyphs"
  >
    <template v-if="isIntersecting">
      <v-bottom-sheet
        v-for="glyph in glyphs"
        :key="glyph.code"
        inset
      >
        <template #activator="{ on }">
          <v-btn
            class="glyph title"
            tile
            text
            :style="`font-family:${font} !important;`"
            v-on="on"
            v-text="glyph.value"
          />
        </template>
        <v-sheet class="pa-4">
          <v-row>
            <v-col class="text-center">
              <div
                class="display-4 py-4 text-center"
                :style="`font-family:${font} !important;`"
                v-text="`${glyph.value}`"
              />
            </v-col>
            <v-col>
              <div
                class="subtitle-2"
                v-text="`Glyph name: ${glyph.name}`"
              />
              <div
                v-if="glyph.code"
                class="subtitle-2"
                v-text="`Code: ${glyph.code}`"
              />
              <div
                v-if="glyph.sequence"
                class="subtitle-2"
                v-text="`Opentype feature: ${glyph.sequence.features}`"
              />
              <div
                v-if="glyph.sequence"
                class="subtitle-2"
                v-text="`Glyphs: ${glyph.sequence.src}`"
              />
              <div
                v-if="glyph.mlsequence"
                class="subtitle-2"
                v-text="`${glyph.mlsequence}`"
              />
              <v-btn
                v-if="canCopy"
                text
                title="Copy to clipboard"
                @click="copy(glyph.value)"
              >
                <v-icon>{{ mdiContentCopy }}</v-icon>Copy
              </v-btn>
            </v-col>
          </v-row>
        </v-sheet>
      </v-bottom-sheet>
    </template>
    <template v-else>
      Fetching glyphs...
    </template>
  </section>
</template>
<script>
import { mdiContentCopy } from "@mdi/js";
import { Intersect } from "vuetify/lib/directives";
export default {
  name: "Glyphs",
  directives: {
    Intersect,
  },
  props: {
    font: String,
    glyphs: Array,
    ligatures: Array,
  },
  data: () => ({
    canCopy: false,
    mdiContentCopy,
    isIntersecting: false,
  }),
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
