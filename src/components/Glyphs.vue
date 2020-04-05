<template>
  <section class="glyphs">
    <v-tooltip bottom :key="glyph.code" v-for="glyph in glyphs">
      <template v-slot:activator="{ on }">
        <v-btn
          class="glyph ma-4"
          v-on="on"
          large
          tile
          color="primary"
          :style="`font-family:${font} !important;`"
          outlined
          v-text="glyph.value"
        >
        </v-btn>
      </template>
      <div
        class="display-4 py-4 text-center"
        :style="`font-family:${font} !important;`"
        v-text="`${glyph.value}`"
      ></div>
      <div class="title" v-text="`Glyph name: ${glyph.name}`"></div>
      <div class="title" v-if="glyph.code" v-text="`Code: ${glyph.code}`"></div>
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
    </v-tooltip>
  </section>
</template>
<script>
export default {
  props: {
    font: String,
    glyphs: Array,
    ligatures: Array
  }
};
</script>
