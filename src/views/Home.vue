<template>
  <div class="home">
    <v-container>
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="require('@/assets/logo.svg')"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col class="mb-4">
          <h1
            class="display-2 font-weight-bold mb-3"
            v-text="$i18n('smc')"
          ></h1>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="12">
          <v-btn
            class="ma-2"
            outlined
            href="https://blog.smc.org.in"
            v-text="$i18n('menu-blog')"
          ></v-btn>
          <v-btn
            class="ma-2"
            outlined
            href="https://gitlab.com/smc"
            v-text="$i18n('source-code')"
          ></v-btn>
          <v-btn
            class="ma-2"
            outlined
            v-text="$i18n('wiki')"
            href="https://wiki.smc.org.in"
          ></v-btn>
          <v-btn
            class="ma-2"
            outlined
            href="https://t.me/smc_project"
            v-text="$i18n('telegram')"
          ></v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {}
};
</script>
