<template>
  <v-footer padless="true">
    <v-card flat tile width="100%" class="text-center">
      <v-card-text>
        {{ new Date().getFullYear() }} —
        <strong> {{ $i18n("smc") }}.</strong> Unless otherwise stated, content
        is available under the
        <a
          href="available under the Creative Commons Attribution-ShareAlike License; "
          >Creative Commons Attribution-ShareAlike License</a
        >.
      </v-card-text> </v-card
    >.
  </v-footer>
</template>
