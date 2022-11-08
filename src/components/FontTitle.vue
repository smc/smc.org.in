<template>
  <section id="intro" class="row">
    <div class="col-12">
      <h1 class="text-h2" v-text="name"></h1>
    </div>

    <div class="col-xs-12 col-lg-8">
      <p class="title-2">
        {{ author }}
      </p>
      <p>
        {{ version }}
      </p>
    </div>
    <v-btn
      :href="link"
      rounded
      large
      color="success"
      class="col-xs-12 col-lg-3 offset-lg-1"
    >
      <v-icon icon="mdi-download"></v-icon>
      {{ $i18n("download") }}
    </v-btn>
  </section>
</template>

<script>

export default {
  name: "FontTitle",
  props: {
    name: String,
    version: String,
    author: String,
    link: String,
  },
};
</script>
