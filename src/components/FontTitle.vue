<template>
  <section
    id="intro"
    class="row"
  >
    <div class="v-col-12">
      <h1
        class="text-h2"
        v-text="name"
      />
    </div>

    <div class="v-col-xs-12 v-col-lg-8">
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
      class="v-col-xs-12 v-col-md-3"
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
  props: {
    name: String,
    version: String,
    author: String,
    link: String,
  },
  data: () => ({
    mdiDownload,
  }),
};
</script>
