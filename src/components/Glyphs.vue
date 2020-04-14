<template>
  <section class="glyphs">
    <v-bottom-sheet
      inset
      hide-overlay
      :key="glyph.code"
      v-for="glyph in glyphs"
    >
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
      <v-sheet class="text-center pa-4">
        <div
          class="display-4 py-4 text-center"
          :style="`font-family:${font} !important;`"
          v-text="`${glyph.value}`"
        ></div>
        <v-btn v-if="canCopy" @click="copy(glyph.value)">Copy</v-btn>
        <div class="title" v-text="`Glyph name: ${glyph.name}`"></div>
        <div
          class="title"
          v-if="glyph.code"
          v-text="`Code: ${glyph.code}`"
        ></div>
        <div
          class="title"
          v-if="glyph.sequence"
          v-text="`Opentype feature: ${glyph.sequence.features}`"
        ></div>
        <div
          class="title"
          v-if="glyph.sequence"
          v-text="`Glyphs: ${glyph.sequence.src}`"
        ></div>
        <div
          class="title"
          v-if="glyph.mlsequence"
          v-text="`${glyph.mlsequence}`"
        ></div>
      </v-sheet>
    </v-bottom-sheet>
  </section>
</template>
<script>
export default {
  name: "Glyphs",
  data: () => ({
    canCopy: false
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
