<template>
  <div class="home">
    <v-container class="v-col-xl-8 v-col-sm-10 v-col-xs-12">
      <v-row class="text-center">
        <v-col cols="12">
          <v-img
            :src="logo"
            class="my-3"
            contain
            height="200"
          />
        </v-col>

        <v-col class="mb-4">
          <h1
            v-i18n="'smc'"
            class="text-h2 font-weight-regular mb-3"
          />
          <h2 class="title mb-3">
            എന്റെ കമ്പ്യൂട്ടറിനു് എന്റെ ഭാഷ
          </h2>
        </v-col>
      </v-row>
      <v-row class="text-center">
        <v-col>
          <v-btn
            class="ma-2"
            block
            large
            href="https://gitlab.com/smc"
          >
            <v-icon dark>
              {{ mdiGit }}
            </v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("source-code") }}</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="ma-2"
            block
            large
            href="https://wiki.smc.org.in"
          >
            <v-icon dark>
              {{ mdiBookOpenPageVariant }}
            </v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("wiki") }}</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="ma-2"
            block
            large
            href="https://community.smc.org.in/"
          >
            <v-icon dark>
              {{ mdiForumOutline }}
            </v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("discussions") }}</span>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
            class="ma-2"
            block
            large
            href="https://t.me/smc_project"
          >
            <v-icon dark>
              {{ mdiSend }}
            </v-icon>
            <span class="ml-2 hidden-xs-only">{{ $i18n("telegram") }}</span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row
        class="text-center"
        justify="center"
      >
        <v-col
          lg="8"
          sm="12"
        >
          <p v-text="$i18n('smc-desc')" />
        </v-col>
      </v-row>

      <v-row>
        <v-col
          lg="8"
          sm="12"
        >
          <h2 v-text="$i18n('menu-projects')" />
        </v-col>
      </v-row>
      <v-divider />

      <v-row>
        <v-col
          md="6"
          lg="3"
          sm="12"
        >
          <v-card
            outlined
            hover
            to="/fonts/manjari"
            class="mx-auto"
            max-width="400"
            height="100%"
          >
            <v-img
              :src="manjaricard"
              height="200px"
            />

            <v-card-title>Manjari font</v-card-title>

            <v-card-subtitle>Popular Malayalam typeface</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col
          md="6"
          lg="3"
          sm="12"
        >
          <v-card
            outlined
            hover
            to="/fonts/gayathri"
            class="mx-auto"
            max-width="400"
            height="100%"
          >
            <v-img
              :src="gayathricard"
              height="200px"
            />

            <v-card-title>Gayathri font</v-card-title>

            <v-card-subtitle>Popular Malayalam typeface</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col
          md="6"
          lg="3"
          sm="12"
        >
          <v-card
            outlined
            hover
            href="https://morph.smc.org.in"
            class="mx-auto"
            max-width="400"
            height="100%"
          >
            <v-img
              :src="mlmorphlogo"
              height="200px"
            />
            <v-card-title>Mlmorph</v-card-title>

            <v-card-subtitle>Malayalam morphology analyser</v-card-subtitle>
          </v-card>
        </v-col>
        <v-col
          md="6"
          lg="3"
          sm="12"
        >
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
        <v-col
          lg="8"
          sm="12"
        >
          <h2 v-text="$i18n('menu-blog')" />
        </v-col>
      </v-row>
      <v-divider />
      <v-row justify="center">
        <v-col
          v-for="post in blogposts"
          :key="post.id"
          md="6"
          lg="3"
          sm="12"
          class="my-6"
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
              :src="post.feature_image || logo"
              height="200px"
            />

            <v-card-title class="smc-blog-post-content-title">
              {{
                post.title
              }}
            </v-card-title>

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
import logo from "@/assets/logo.svg";
import mlmorphlogo from "@/assets/images/mlmorph-logo.svg";
import manjaricard from "@/assets/images/manjari-card.png";
import gayathricard from "@/assets/images/gayathri-card.png";

import {
  mdiGit,
  mdiSend,
  mdiBookOpenPageVariant,
  mdiForumOutline,
} from "@mdi/js";

export default {
  name: "HomeView",
  data: () => ({
    blogposts: [],
    mdiGit,
    mdiSend,
    mdiForumOutline,
    logo,
    mlmorphlogo,
    manjaricard,
    gayathricard,
    mdiBookOpenPageVariant,
  }),
  created() {
    return fetch(
      "https://blog.smc.org.in/ghost/api/v3/content/posts/?key=0b33c5e372d8ee78a8bd842ad0&limit=8"
    )
      .then((response) => response.json())
      .then((data) => {
        this.blogposts = data.posts;
      });
  },
  methods: {
    stripMd: (text) => text.replace("\n", " ").replace(/\[\S+\s?\]?\s?/g, ""),
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
