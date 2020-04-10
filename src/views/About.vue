<template>
  <v-container>
    <v-row class="text-center">
      <h1 class="title" v-text="$i18n('smc-about-heading')"></h1>
    </v-row>
    <v-row >
      <v-col> <p v-text="$i18n('smc-desc')"></p> </v-col>
    </v-row>
    <v-row>
        <v-col> <p v-text="$i18n('smc-about-text-para-1')"></p> </v-col>
      </v-row>
    <v-row>
      <v-col> <p v-text="$i18n('smc-about-text-para-2')"></p> </v-col>
    </v-row>
    <v-row>
      <v-col> <p v-text="$i18n('smc-about-text-para-3')"></p> </v-col>
    </v-row>
  </v-container>
</template>
