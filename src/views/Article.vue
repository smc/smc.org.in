<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <article v-if="title" class="article">
      <post-title :title="title" :author="author" />
      <main class="my-10" v-html="content" />
    </article>
    <div v-else>
      <h1 class="display-3 my-10" v-i18n="'menu-articles'"></h1>
      <v-text-field
        v-model="search"
        :append-icon="mdiMagnify"
        label="Search"
        class="my-10"
        solo
        single-line
        hide-details
      />

      <v-card outlined>
        <v-data-table :headers="headers" :items="toc" :search="search">
          <template v-slot:item.title="{ item }">
            <router-link class="article-link" :to="item.url">
              {{ item.title }}
            </router-link>
          </template>
        </v-data-table>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import MarkdownIt from "markdown-it";
import MarkDownItVideo from "markdown-it-video";
import axios from "axios";
import fm from "front-matter";
import { mdiMagnify } from "@mdi/js";

import PostTitle from "../components/PostTitle";
import articles from "../manifest.json";

export default {
  components: { PostTitle },
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
.article {
  img {
    max-width: 100%;
  }
}
</style>
