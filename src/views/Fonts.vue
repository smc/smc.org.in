<template>
  <v-container class="fonts v-col-xl-8 v-col-sm-10 v-col-xs-12">
    <h1
      v-i18n="'menu-fonts'"
      class="text-h2 my-10"
    />
    <v-row>
      <v-col
        v-for="font in fonts"
        :key="font.title"
        cols="12"
        md="6"
        sm="6"
        lg="4"
      >
        <v-card :key="font.title">
          <v-card-title
            :class="`font-${font.title.toLowerCase()}`"
          >
            {{ $i18n(font.msg || font.title.toLowerCase()) }}
            <v-chip
              v-if="font.badge"
              class="font-manjari"
              color="green"
            >
              {{ font.badge }}
            </v-chip>
          </v-card-title>
          <v-card-text>
            <p
              :class="`font-${font.title.toLowerCase()} font-preview-text`"
              contenteditable="true"
            >
              ഒരൊറ്റമതമുണ്ടുലകിന്നുയിരാം പ്രേമ,മതൊന്നല്ലോ പരക്കെ നമ്മെ
              പാലമൃതൂട്ടും പാർവണശശിബിംബം.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-btn
              prepend-icon="mdi-download-outline"
              :href="font.download || `/downloads/${font.path}/${font.title.toLowerCase()}.zip`"
            >
              {{ $i18n("download") }}
              <v-icon>{{ mdiDownloadOutline }}</v-icon>
            </v-btn>
            <v-spacer />

            <v-btn
              :to="font.path"
              prepend-icon="mdi-arrow-right"
            >
              Details
              <v-icon>{{ mdiArrowRight }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="text-h2 my-10">
      Other Malayalam fonts
    </h2>
    <p>
      Other than the fonts listed above, which are maintained by SMC, there are
      a few more free licensed fonts designed and released by other projects and
      people.
    </p>
    <v-list lines="one">
      <v-list-item
        v-for="item in otherfonts"
        :key="item.title"
        :title="item.title"
        :href="item.link"
        :prepend-icon="mdiArrowRight"
      />
    </v-list>
  </v-container>
</template>

<script setup>
import { mdiArrowRight, mdiDownloadOutline } from "@mdi/js";

const fonts = [
  {
    title: "AnjaliOldLipi",
    path: "/fonts/anjalioldlipi",
  },
  {
    title: "Chilanka",
    path: "/fonts/chilanka",
  },
  {
    title: "Dyuthi",
    path: "/fonts/dyuthi",
  },
  {
    title: "Gayathri",
    path: "/fonts/gayathri",
  },
  {
    title: "Karumbi",
    path: "/fonts/karumbi",
  },
  {
    title: "Keraleeyam",
    path: "/fonts/keraleeyam",

  },
  {
    title: "Manjari",
    path: "/fonts/manjari",
  },
  {
    title: "Meera",
    path: "/fonts/meera",

  },
  {
    title: "Nupuram",
    path: "/fonts/nupuram",
    download: "/downloads/fonts/nupuram/Nupuram.zip",
    badge: "Pre-release"
  },
  {
    title: "NupuramColor",
    path: "/fonts/nupuram-color",
    download: "/downloads/fonts/nupuram/Nupuram-Color.zip",
    badge: "Pre-release"
  },
  {
    title: "NupuramCalligraphy",
    path: "/fonts/nupuram-calligraphy",
    download: "/downloads/fonts/nupuram/Nupuram-Calligraphy.zip",
    badge: "Pre-release"
  },
  {
    title: "NupuramDots",
    path: "/fonts/nupuram-dots",
    download: "/downloads/fonts/nupuram/Nupuram-Dots.zip",
    badge: "Pre-release"
  },
  {
    title: "NupuramArrowsColor",
    path: "/fonts/nupuram-arrows-color",
    download: "/downloads/fonts/nupuram/Nupuram-Arrows-Color.zip",
    badge: "Pre-release"
  },
  {
    title: "Rachana",
    path: "/fonts/rachana",

  },
  {
    title: "RaghuMalayalamSans",
    path: "/fonts/raghumalayalamsans",

  },
  {
    title: "Suruma",
    path: "/fonts/suruma",

  },
  {
    title: "Uroob",
    path: "/fonts/uroob",

  },
];
const otherfonts = [
  {
    link: "https://www.google.com/get/noto/",
    title: "Noto Sans Malayalam by Google",
  },
  {
    link: "https://fonts.google.com/specimen/Baloo+Chettan+2?subset=malayalam",
    title: "Baloo Chettan 2 by Ek Type, commissioned by Google fonts.",
  },
  {
    link: "https://github.com/EkType/Anek",
    title: "Anek Malayalam by Ek Type",
  },
  {
    link: "http://rachana.org.in/",
    title: "Sundar, TNJoy, Ezhuthu, Panmana, Karuna etc by Rachana Institute of Typography",
  },
];
</script>
<style>
.font-preview-text {
  font-size: 1.6em;
  line-height: 1.4;
}
</style>
