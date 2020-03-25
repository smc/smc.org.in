<template>
  <v-container class="col-lg-10 col-sm-12">
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
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="toc" :search="search"
        ><template v-slot:item.title="{ item }">
          <a text :href="item.url">{{ item.title }}</a>
        </template></v-data-table
      >
    </v-card>
  </v-container>
</template>
<script>
import MarkdownIt from "markdown-it";
import axios from "axios";
import fm from "front-matter";
import articles from "../manifest.json";

export default {
  data: () => ({
    content: null,
    author: null,
    title: null,
    search: "",
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
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const article = articles.find(article => article.url === to.path);
      const file = article?.file;
      if (!file) {
        return;
      }
      const md = new MarkdownIt();
      axios.get(`/${file}`).then(({ data }) => {
        const article = fm(data);
        vm.title = article.attributes.title;
        vm.author = article.attributes.author;
        vm.content = md.render(article.body);
        window.document.title = vm.title;
      });
    });
  }
};
</script>
