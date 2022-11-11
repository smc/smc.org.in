<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <h1
      v-if="!post"
      v-i18n="'menu-blog'"
      class="text-h2 my-10"
    />

    <!-- Start Placeholders -->
    <v-row v-if="loading_slug">
      <v-col cols="12">
        <article class="blogpost">
          <post-title :loading="loading_slug" />

          <main class="post-body my-10">
            <v-skeleton-loader type="paragraph" />
          </main>
        </article>
      </v-col>
    </v-row>
    <v-row v-else-if="loading_all">
      <v-col
        v-for="n in 6"
        :key="n"
        cols="12"
        lg="6"
        class="my-6"
      >
        <v-sheet class="px-3 pt-3 pb-3">
          <v-row justify="space-between">
            <v-col
              cols="12"
              md="4"
              class="pa-0"
            >
              <v-skeleton-loader type="image" />
            </v-col>

            <v-col
              cols="12"
              md="8"
            >
              <v-card-subtitle>
                <v-skeleton-loader type="text" />
              </v-card-subtitle>

              <v-card-text class="smc-blog-post-content-excerpt">
                <v-skeleton-loader type="paragraph" />
              </v-card-text>
            </v-col>
          </v-row>
        </v-sheet>
      </v-col>
    </v-row>
    <!-- End Placeholders -->

    <v-row
      v-else-if="post"
      align="center"
      justify="center"
    >
      <v-col cols="12">
        <article class="blogpost">
          <post-title
            :image="post.feature_image"
            :title="post.title"
            :authors="post.authors"
            :date="post.published_at"
          />
          <main
            class="post-body my-10"
            v-html="post.html"
          />
          <h2 class="text-h4 my-10">
            Comments
          </h2>
          <discourse-comments
            :enabled="true"
            :title="post.url"
          />
        </article>
      </v-col>
    </v-row>

    <div v-else>
      <v-row>
        <v-col
          v-for="post in blogposts"
          :key="post.id"
          cols="12"
          lg="6"
          class="my-6"
        >
          <v-card
            outlined
            hover
            class="card-blogpost"
            :to="`/blog/${post.slug}`"
          >
            <v-row justify="space-between">
              <v-col
                cols="12"
                md="4"
                class="pa-0"
              >
                <v-img
                  cover
                  :src="post.feature_image"
                  lazy-src="src/assets/logo.svg"
                  height="250px"
                />
              </v-col>

              <v-col
                cols="12"
                md="8"
              >
                <v-card-title
                  class="smc-blog-post-content-title"
                  lang="ml"
                >
                  {{ post.title }}
                </v-card-title>

                <v-card-subtitle
                  class="smc-blog-post-content-date"
                  v-text="new Date(post.published_at).toDateString()"
                />

                <v-card-text class="smc-blog-post-content-excerpt">
                  {{ stripMd(post.excerpt) }}
                </v-card-text>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import PostTitle from "../components/PostTitle";
import DiscourseComments from "../components/DiscourseComments";
export default {
  components: { PostTitle, DiscourseComments },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next((vm) => {
      vm.slug = to.params.title;
    });
  },
  beforeRouteUpdate(to, from, next) {
    // called when the route that renders this component has changed,
    // but this component is reused in the new route.
    // For example, for a route with dynamic params `/foo/:id`, when we
    // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
    // will be reused, and this hook will be called when that happens.
    // has access to `this` component instance.
    next((vm) => {
      vm.slug = to.params.title;
    });
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    next((vm) => {
      vm.slug = to.params.title;
    });
  },
  data: () => ({
    loading_all: false,
    loading_slug: false,
    content: null,
    author: null,
    title: null,
    slug: null,
    post: null,
    path: null,
    search: "",
    articles: [],
    blogposts: [],
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title",
      },
      { text: "Date", value: "published_at" },
    ],
  }),
  watch: {
    slug: async function () {
      this.post = await this.getPost(this.slug);
    },
    blogposts: async function () {
      this.post = await this.getPost(this.slug);
    },
  },
  created() {
    this.loading_all = true;
    return fetch(
      "https://blog.smc.org.in/ghost/api/v3/content/posts/?key=0b33c5e372d8ee78a8bd842ad0&include=tags,authors&limit=50"
    )
      .then((response) => response.json())
      .then((data) => {
        this.loading_all = false;
        this.blogposts = data.posts;
      });
  },
  methods: {
    async getPost(slug) {
      if (!slug) return null;
      let post = this.blogposts.find((post) => post.slug === slug);
      if (!post) {
        this.loading_slug = true;
        return fetch(
          `https://blog.smc.org.in/ghost/api/v3/content/posts/slug/${slug}?key=0b33c5e372d8ee78a8bd842ad0&include=tags,authors`
        )
          .then((response) => response.json())
          .then((data) => {
            this.loading_slug = false;
            return data.posts.find((post) => post.slug === slug);
          });
      }
      return post;
    },
    // Replace links under [] tag
    stripMd: (text) => text.replace("\n", " ").replace(/\[\S+\s?\]?\s?/g, ""),
  },
};
</script>
<style lang="scss">
.post-body {
  font-family: "Inter", "Manjari", sans;
  line-height: 1.6;
  font-size: 1.2em;
  p {
    margin: 2em 0;
  }
  img {
    max-width: 100%;
  }
}
.smc-blog-post-content-title {
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}
.smc-blog-post-content-excerpt {
  max-height: 8em;
  white-space: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.card-blogpost {
  overflow: hidden;
}
</style>
