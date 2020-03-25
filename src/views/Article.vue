<template>
  <v-container class="manjari col-lg-10 col-sm-12">
    <article>
      <h1 class="display-3">{{ title }}</h1>
      <h5 v-if="author">{{ author }}</h5>
      <v-divider />
      <main class="py-4" v-html="content" />
    </article>
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
    articles: []
  }),
  beforeRouteEnter(to, from, next) {
    next(vm => {
      const file = articles.find(article => article.url === to.path).file;
      const md = new MarkdownIt();
      axios.get(`/${file}`).then(({ data }) => {
        const article = fm(data);
        vm.title = article.attributes.title;
        vm.author = article.attributes.author;
        vm.content = md.render(article.body);
      });
    });
  }
};
</script>
