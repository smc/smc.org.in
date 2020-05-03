<template>
  <section id="intro" class="row">
    <div class="col-12">
      <h1 class="display-3" v-text="name"></h1>
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
      :to="link"
      rounded
      large
      color="success"
      class="col-xs-12 col-lg-3 offset-lg-1"
    >
      <v-icon>{{ mdiDownload }}</v-icon>
      {{ $i18n("download") }}
    </v-btn>
  </section>
</template>

<script>
import { mdiDownload } from "@mdi/js";

export default {
  name: "FontTitle",
  data: () => ({
    mdiDownload
  }),
  props: {
    name: String,
    version: String,
    author: String,
    link: String
  }
};
</script>
