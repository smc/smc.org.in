<template>
  <v-container class="col-xl-8 col-sm-10 col-xs-12">
    <article v-if="title" class="article">
      <post-title :title="title" :author="author" />
      <main class="my-10" v-html="content" />
    </article>
    <div v-else>
      <h1 class="text-h2 my-10" v-i18n="'menu-articles'"></h1>
      <v-text-field
        v-model="search"
        :append-icon="mdi-magnify"
        label="Search"
        class="my-10"
        solo
        single-line
        hide-details
      />

      <v-card flat>
        <v-list>
          <v-list-item-group color="primary">
            <v-list-item v-for="(item, i) in toc" :key="i" :to="item.url">
              <v-list-item-icon>
                <v-icon icon="mdi-file-document"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title"></v-list-item-title>
                <v-list-item-subtitle
                  v-text="item.author"
                ></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import MarkdownIt from "markdown-it";
import MarkDownItVideo from "markdown-it-video";
import MarkDownItAnchor from "markdown-it-anchor";
import axios from "axios";
import fm from "front-matter";

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
    articles: [],
    headers: [
      {
        text: "Title",
        align: "start",
        sortable: false,
        value: "title",
      },
      { text: "Author", value: "author" },
    ],
  }),
  computed: {
    toc() {
      const allItems = articles.map((article) => ({
        title: article.title,
        url: article.url,
        author: article.author,
      }));
      return allItems.filter((item) => {
        return (
          ~(item.title + "").toLowerCase().indexOf(this.search.toLowerCase()) ||
          ~(item.author + "").toLowerCase().indexOf(this.search.toLowerCase())
        );
      });
    },
  },
  watch: {
    path: function () {
      const article = articles.find((article) => article.url === this.path);
      const file = article?.file;
      if (file) {
        const md = new MarkdownIt({ html: true, linkify: true });
        md.use(MarkDownItVideo);
        md.use(MarkDownItAnchor);
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
    },
  },
  beforeRouteEnter(to, from, next) {
    // called before the route that renders this component is confirmed.
    // does NOT have access to `this` component instance,
    // because it has not been created yet when this guard is called!
    next((vm) => {
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
    next((vm) => {
      vm.path = to.path;
    });
  },
  beforeRouteLeave(to, from, next) {
    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
    next((vm) => {
      vm.path = to.path;
    });
  },
};
</script>
<style lang="less">
.article-link {
  text-decoration: none;
}
.article {
  img {
    max-width: 100%;
    margin: 8px 2em;
  }

  h2,
  h3,
  h4 {
    margin: 1em 0;
    padding: 4px 1em;
  }

  h2,
  h3 {
    border-left: 6px solid #00a7d0;
  }

  blockquote {
    padding: 1em;
    margin: 8px 0;
    line-height: 1.5;
    border: 1px solid orangered;
    border-left: 6px solid orangered;
    background-color: whitesmoke;
    color: #333;
  }
  p,
  ul,
  ol,
  li {
    font-size: 1em;
    line-height: 1.5;
    padding: 4px;
    margin-left: 1em;
  }
}
</style>
