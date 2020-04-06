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
      <v-row class="text-center" justify="center">
        <v-col lg="8" sm="12"> <p v-text="$i18n('smc-desc')"></p> </v-col>
      </v-row>
      <v-row>
        <v-col lg="8" sm="12">
          <h2 v-text="$i18n('menu-projects')"></h2>
        </v-col>
      </v-row>
      <v-row>
        <v-col md="6" lg="3" sm="12">
          <v-card class="mx-auto" max-width="400">
            <v-img
              src="@/assets/images/manjari-card.png"
              height="200px"
            ></v-img>

            <v-card-title>
              Manjari font
            </v-card-title>

            <v-card-subtitle>
              Popular Malayalam typeface
            </v-card-subtitle>

            <v-card-actions>
              <v-btn to="/fonts/manjari" text>Read more...</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6" lg="3" sm="12">
          <v-card class="mx-auto" max-width="400">
            <v-img
              src="@/assets/images/gayathri-card.png"
              height="200px"
            ></v-img>

            <v-card-title>
              Gayathri font
            </v-card-title>

            <v-card-subtitle>
              Popular Malayalam typeface
            </v-card-subtitle>

            <v-card-actions>
              <v-btn to="/fonts/gayathri" text>Read more...</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col md="6" lg="3" sm="12">
          <v-card class="mx-auto" max-width="400" color="#385F73" dark>
            <v-img :src="require('@/assets/logo.svg')" height="200px"></v-img>
            <v-card-title>
              Malayalam morphology analyser
            </v-card-title>

            <v-card-subtitle>
              Morphology analyser and generator is a foundational library for
              Malayalam language processing. This is one of the active project
              of SMC and already proved its potential. Developed by Santhosh
              Thottingal.
            </v-card-subtitle>

            <v-card-actions>
              <v-btn href="https://morph.smc.org.in" text>Read more...</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col lg="8" sm="12">
          <h2 v-text="$i18n('menu-blog')"></h2>
        </v-col>
      </v-row>
      <v-row class="text-center" justify="center">
        <v-col
          md="6"
          lg="3"
          sm="12"
          class="my-6"
          :key="post.id"
          v-for="post in blogposts"
        >
          <v-card class="mx-auto" max-width="400">
            <v-img
              :src="post.feature_image || require('@/assets/logo.svg')"
              height="200px"
            ></v-img>

            <v-card-title class="smc-blog-post-content-title">
              {{ post.title }}
            </v-card-title>

            <v-card-text
              class="smc-blog-post-content-excerpt"
              v-text="post.excerpt"
            >
            </v-card-text>

            <v-card-actions>
              <v-btn :href="post.url" text>Read more...</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    blogposts: []
  }),
  components: {},
  created() {
    return fetch(
      "https://blog.smc.org.in/ghost/api/v3/content/posts/?key=663893999124de2b7156b52cfb"
    )
      .then(response => response.json())
      .then(data => {
        const posts = data.posts;
        this.blogposts = posts.slice(0, 8);
        console.log(this.blogposts);
      });
  }
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
