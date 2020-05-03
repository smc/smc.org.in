<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <article v-if="title">
      <h1 class="display-3 py-2">{{ title }}</h1>
      <h5 v-if="author">{{ author }}</h5>
      <v-divider />
      <main class="py-4" v-html="content" />
    </article>
    <v-card v-else>
      <v-card-title>
        Articles
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          :append-icon="mdiMagnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="toc" :search="search">
        <template v-slot:item.title="{ item }">
          <router-link class="article-link" :to="item.url">
            {{ item.title }}
          </router-link>
        </template>
      </v-data-table>
    </v-card>
  </v-container>
</template>
<script>
import MarkdownIt from "markdown-it";
import MarkDownItVideo from "markdown-it-video";
import axios from "axios";
import fm from "front-matter";
import { mdiMagnify } from "@mdi/js";

import articles from "../manifest.json";

export default {
  data: () => ({
    content: null,
    author: null,
    title: null,
    path: null,
    search: "",
    mdiMagnify,
    articles: [],
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title"
      },
      { text: "Author", value: "author" }
    ]
  }),
  computed: {
    toc() {
      return articles.map(article => ({
        title: article.title,
        url: article.url,
        author: article.author
      }));
    }
  },
  watch: {
    path: function() {
      const article = articles.find(article => article.url === this.path);
      const file = article?.file;
      if (file) {
        const md = new MarkdownIt();
        md.use(MarkDownItVideo);
        axios.get(`/${file}`).then(({ data }) => {
          const article = fm(data);
          this.title = article.attributes.title;
          this.author = article.attributes.author;
          this.content = md.render(article.body);
          window.document.title = this.title;
        });
      } else {
        this.title = null;
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next(vm => {
      vm.path = to.path;
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
      vm.path = to.path;
    });
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    next(vm => {
      vm.path = to.path;
    });
  }
};
</script>
<style lang="less">
.article-link {
  text-decoration: none;
}
</style>
