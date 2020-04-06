<template>
  <v-container class="col-lg-6 col-md-8 col-sm-12">
    <article v-if="post" class="blogpost">
      <h1 class="display-3 py-2">{{ post.title }}</h1>
      <h5 v-if="post.authors">
        <span :key="author.id" class="pr-4" v-for="author in post.authors">{{
          author.name
        }}</span>
      </h5>
      <v-divider />
      <main class="post-body py-4" v-html="post.html" />
    </article>
    <v-list v-else>
      <v-list-item
        :to="`/blog/${post.slug}`"
        :key="post.id"
        v-for="post in blogposts"
      >
        <v-list-item-content>
          <v-list-item-title class="title">{{ post.title }}</v-list-item-title>
          <v-list-item-subtitle>
            <span
              :key="author.id"
              class="pr-4"
              v-for="author in post.authors"
              >{{ author.name }}</span
            ><span class="pr-4">{{
              post.published_at
            }}</span></v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <!-- <v-card v-else>
      <v-card-title>
        Articles
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        items-per-page="50"
        :headers="headers"
        :items="blogposts"
        :search="search"
        ><template v-slot:item.title="{ item }">
          <v-btn text :to="`/blog/${item.slug}`">{{ item.title }}</v-btn>
        </template></v-data-table
      >
    </v-card> -->
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
      "https://blog.smc.org.in/ghost/api/v3/content/posts/?key=663893999124de2b7156b52cfb&include=tags,authors"
    )
      .then(response => response.json())
      .then(data => {
        this.blogposts = data.posts;
      });
  },
  watch: {
    slug: function() {
      this.post = this.blogposts.find(post => post.slug === this.slug);
    },
    blogposts: function() {
      this.post = this.blogposts.find(post => post.slug === this.slug);
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
</style>
