<template>
  <v-container class="fonts col-xl-8 col-sm-10 col-xs-12">
    <h1 class="display-3 my-10" v-i18n="'menu-fonts'"></h1>

    <v-row>
      <v-col
        v-for="font in fonts"
        :key="font.title"
        cols="12"
        md="4"
        sm="6"
        lg="3"
      >
        <v-card
          hover
          :class="`mx-auto font-${font.title.toLowerCase()}`"
          tile
          :key="font.title"
          :to="font.path"
        >
          <v-card-title
            :class="`font-${font.title.toLowerCase()}`"
            v-text="$i18n(font.msg || font.title)"
          >
          </v-card-title>

          <!-- <v-card-subtitle
          >Listen to your favorite artists and albums whenever and wherever,
          online and offline.</v-card-subtitle
        > -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    fonts: [
      {
        title: "Anjali",
        path: "/fonts/anjali"
      },
      {
        title: "Chilanka",
        path: "/fonts/chilanka"
      },
      {
        title: "Dyuthi",
        path: "/fonts/dyuthi"
      },
      {
        title: "Gayathri",
        path: "/fonts/gayathri"
      },
      {
        title: "Karumbi",
        path: "/fonts/karumbi"
      },
      {
        title: "Keraleeyam",
        path: "/fonts/keraleeyam"
      },
      {
        title: "Manjari",
        path: "/fonts/manjari"
      },
      {
        title: "Meera",
        path: "/fonts/meera"
      },
      {
        title: "Rachana",
        path: "/fonts/rachana"
      },
      {
        title: "Uroob",
        path: "/fonts/uroob"
      },
      {
        title: "Suruma",
        path: "/fonts/suruma"
      },
      {
        title: "RaghuMalayalam",
        path: "/fonts/raghumalayalam"
      }
    ]
  })
};
</script>
