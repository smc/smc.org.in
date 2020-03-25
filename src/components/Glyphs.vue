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

      <span class="title" v-text="`${glyph.code} ${glyph.name}`"> </span>
    </v-tooltip>
    <v-tooltip
      :style="`font-family:${font}`"
      bottom
      :key="ligature.code"
      v-for="ligature in ligatures"
    >
      <template v-if="ligature.value" v-slot:activator="{ on }">
        <v-btn
          class="ligature ma-4"
          v-on="on"
          large
          tile
          color="primary"
          :style="`font-family:${font} !important;`"
          outlined
          v-text="ligature.value"
        >
        </v-btn>
      </template>
      <div
        class="display-4 py-4 text-center"
        :style="`font-family:${font} !important;`"
        v-text="`${ligature.value}`"
      ></div>

      <div class="title" v-text="`Opentype feature: ${ligature.feature}`"></div>
      <div class="title" v-text="`Name: ${ligature.name}`"></div>
      <div class="title" v-text="`Glyphs: ${ligature.sequence}`"></div>
      <div
        class="title"
        v-text="`${ligature.ml_sequence} ⇒ ${ligature.value} `"
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
