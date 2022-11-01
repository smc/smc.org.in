<template>
  <v-container class="fonts col-xl-8 col-sm-10 col-xs-12">
    <h1 class="text-h2 my-10" v-i18n="'menu-fonts'"></h1>
    <v-row>
      <v-col
        v-for="font in fonts"
        :key="font.title"
        cols="12"
        md="6"
        sm="6"
        lg="4"
      >
        <v-card hover :class="`mx-auto `" tile :key="font.title">
          <v-card-title
            :class="`font-${font.title.toLowerCase()}`"
            v-text="$i18n(font.msg || font.title.toLowerCase())"
          ></v-card-title>

          <v-card-text>
            <p :class="`font-${font.title.toLowerCase()} font-preview-text`" contenteditable="true">
              ഒരൊറ്റമതമുണ്ടുലകിന്നുയിരാം പ്രേമ,മതൊന്നല്ലോ പരക്കെ നമ്മെ
              പാലമൃതൂട്ടും പാർവണശശിബിംബം.
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn
              text
              :href="`/downloads/${font.path}/${font.title.toLowerCase()}.zip`"
            >
              {{ $i18n("download") }}
              <v-icon>{{ mdiDownloadOutline }}</v-icon>
            </v-btn>
            <v-btn text :to="font.path">
              Details
              <v-icon>{{ mdiArrowRight }}</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <h2 class="text-h2 my-10">Other Malayalam fonts</h2>
    <p>
      Other than the fonts listed above, which are maintained by SMC, there are
      a few more free licensed fonts designed and released by other projects and
      people.
    </p>
    <ul>
      <li>
        <a href="https://www.google.com/get/noto/" target="_blank"
          >Noto Sans Malayalam</a
        >, by Google
      </li>
      <li>
        <a
          href="https://fonts.google.com/specimen/Baloo+Chettan+2?subset=malayalam"
          target="_blank"
          >Baloo Chettan 2</a
        >
        by Ek Type, commissioned by Google fonts.
      </li>
      <li>
        <a href="https://github.com/EkType/Anek" target="_blank"
          >Anek Malayalam</a
        >
        by Ek Type
      </li>
      <li>
        <a href="http://rachana.org.in/" target="_blank">Sundar and TNJoy</a> by
        Rachana Institute of Typography
      </li>
    </ul>
  </v-container>
</template>

<script>
import { mdiArrowRight, mdiDownloadOutline } from "@mdi/js";

export default {
  data: () => ({
    mdiArrowRight,
    mdiDownloadOutline,
    fonts: [
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
    ],
  }),
};
</script>
<style>
.font-preview-text {
  font-size: 1.6em;
  line-height: 1.4;
}
</style>
