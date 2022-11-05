<template>
  <div class="home">
    <v-container class="col-xl-8 col-sm-10 col-xs-12">
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            src="src/assets/logo.svg"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col class="mb-4">
          <h1 class="text-h2 font-weight-regular mb-3" v-i18n="'smc'"></h1>
          <h2 class="title mb-3">എന്റെ കമ്പ്യൂട്ടറിനു് എന്റെ ഭാഷ</h2>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col cols="3">
          <v-btn class="ma-2" block large href="https://gitlab.com/smc">
            <v-icon dark>{{ mdiGit }}</v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("source-code") }}</span>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn class="ma-2" block large href="https://wiki.smc.org.in">
            <v-icon dark>{{ mdiBookOpenPageVariant }}</v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("wiki") }}</span>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn class="ma-2" block large href="https://community.smc.org.in/">
            <v-icon dark>{{ mdiForumOutline }}</v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("discussions") }}</span>
          </v-btn>
        </v-col>
        <v-col cols="3">
          <v-btn class="ma-2" block large href="https://t.me/smc_project">
            <v-icon dark>{{ mdiSend }}</v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("telegram") }}</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row class="text-center" justify="center">
        <v-col lg="8" sm="12">
          <p v-text="$i18n('smc-desc')"></p>
        </v-col>
      </v-row>

      <v-row>
        <v-col lg="8" sm="12">
          <h2 v-text="$i18n('menu-projects')"></h2>
        </v-col>
      </v-row>
      <v-divider />

      <v-row>
        <v-col md="6" lg="3" sm="12">
          <v-card
            outlined
            hover
            to="/fonts/manjari"
            class="mx-auto"
            max-width="400"
            height="100%"
          >
            <v-img
              src="src/assets/images/manjari-card.png"
              height="200px"
            ></v-img>

            <v-card-title>Manjari font</v-card-title>

            <v-card-subtitle>Popular Malayalam typeface</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="6" lg="3" sm="12">
          <v-card
            outlined
            hover
            to="/fonts/gayathri"
            class="mx-auto"
            max-width="400"
            height="100%"
          >
            <v-img
              src="src/assets/images/gayathri-card.png"
              height="200px"
            ></v-img>

            <v-card-title>Gayathri font</v-card-title>

            <v-card-subtitle>Popular Malayalam typeface</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="6" lg="3" sm="12">
          <v-card
            outlined
            hover
            href="https://morph.smc.org.in"
            class="mx-auto"
            max-width="400"
            height="100%"
          >
            <v-img
              src="src/assets/images/mlmorph-logo.svg"
              height="200px"
            ></v-img>
            <v-card-title>Mlmorph</v-card-title>

            <v-card-subtitle>Malayalam morphology analyser</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col md="6" lg="3" sm="12">
          <v-card
            outlined
            hover
            to="/projects"
            class="mx-auto"
            max-width="400"
            height="100%"
          >
            <v-card-title>More projects...</v-card-title>
            <v-card-subtitle>See all projects</v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="8" sm="12">
          <h2 v-text="$i18n('menu-blog')"></h2>
        </v-col>
      </v-row>
      <v-divider />
      <v-row justify="center">
        <v-col
          md="6"
          lg="3"
          sm="12"
          class="my-6"
          :key="post.id"
          v-for="post in blogposts"
        >
          <v-card
            outlined
            hover
            class="mx-auto"
            max-width="400"
            height="400px"
            style="overflow: hidden"
            :to="`/blog/${post.slug}`"
          >
            <v-img
              :src="post.feature_image || require('src/assets/logo.svg')"
              height="200px"
            ></v-img>

            <v-card-title class="smc-blog-post-content-title">{{
              post.title
            }}</v-card-title>

            <v-card-text class="smc-blog-post-content-excerpt">
              {{ stripMd(post.excerpt) }}
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {
  mdiGit,
  mdiSend,
  mdiBookOpenPageVariant,
  mdiForumOutline,
} from "@mdi/js";

export default {
  name: "Home",
  data: () => ({
    blogposts: [],
    mdiGit,
    mdiSend,
    mdiForumOutline,
    mdiBookOpenPageVariant,
  }),
  components: {},
  methods: {
    stripMd: (text) => text.replace("\n", " ").replace(/\[\S+\s?\]?\s?/g, ""),
  },
  created() {
    return fetch(
      "https://blog.smc.org.in/ghost/api/v3/content/posts/?key=0b33c5e372d8ee78a8bd842ad0&limit=8"
    )
      .then((response) => response.json())
      .then((data) => {
        this.blogposts = data.posts;
      });
  },
};
</script>
<style lang="less" scoped>
.smc-blog-post-content-title {
  max-height: 4em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.smc-blog-post-content-excerpt {
  max-height: 10em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
