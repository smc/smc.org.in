<template>
  <v-container>
    <v-row v-if="post" align="center" justify="center">
      <v-col lg="6" md="12" xs="12">
        <article class="blogpost">
          <h1 class="display-3 py-2">{{ post.title }}</h1>
          <h5 v-if="post.authors">
            <span
              :key="author.id"
              class="pr-4"
              v-for="author in post.authors"
              >{{ author.name }}</span
            ><span class="pr-4">{{
              new Date(post.published_at).toDateString()
            }}</span>
          </h5>
          <v-divider />
          <main class="post-body py-4" v-html="post.html" />
        </article>
      </v-col>
    </v-row>
    <v-row v-else justify="center" class="col-12">
      <v-col
        lg="6"
        md="12"
        xs="12"
        class="my-6"
        :key="post.id"
        v-for="post in blogposts"
      >
        <v-card class="mx-auto" :to="`/blog/${post.slug}`">
          <v-row>
            <v-col md="4" xs="12" justify="center" align="center">
              <v-img
                cover
                :src="post.feature_image || require('@/assets/logo.svg')"
                :lazy-src="require('@/assets/logo.svg')"
                height="200px"
              ></v-img>
            </v-col>
            <v-col md="8" xs="12" justify="start" align="start">
              <v-card-title class="smc-blog-post-content-title pa-0">
                {{ post.title }}
              </v-card-title>
              <v-card-text
                class="smc-blog-post-content-date pa-0"
                v-text="new Date(post.published_at).toDateString()"
              >
              </v-card-text>
              <v-card-text
                class="smc-blog-post-content-excerpt pa-0"
                v-text="post.excerpt"
              >
              </v-card-text>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data: () => ({
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
        value: "title"
      },
      { text: "Date", value: "published_at" }
    ]
  }),
  created() {
    return fetch(
      "https://blog.smc.org.in/ghost/api/v3/content/posts/?key=663893999124de2b7156b52cfb&include=tags,authors&limit=50"
    )
      .then(response => response.json())
      .then(data => {
        this.blogposts = data.posts;
      });
  },
  watch: {
    slug: async function() {
      this.post = await this.getPost(this.slug);
    },
    blogposts: async function() {
      this.post = await this.getPost(this.slug);
    }
  },
  methods: {
    async getPost(slug) {
      if (!slug) return null;
      let post = this.blogposts.find(post => post.slug === slug);
      if (!post) {
        return fetch(
          `https://blog.smc.org.in/ghost/api/v3/content/posts/slug/${slug}?key=663893999124de2b7156b52cfb&include=tags,authors`
        )
          .then(response => response.json())
          .then(data => data.posts.find(post => post.slug === slug));
      }
      return post;
    }
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next(vm => {
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
    next(vm => {
      vm.slug = to.params.title;
    });
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    next(vm => {
      vm.slug = to.params.title;
    });
  }
};
</script>
<style lang="less">
.post-body {
  font-family: "Inter", "Manjari", sans;
  line-height: 1.6;
  font-size: 1em;
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
</style>
