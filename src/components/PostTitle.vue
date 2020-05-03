<template>
  <div>
    <div v-if="loading">
      <v-skeleton-loader type="image" height="30vh" />
      <v-skeleton-loader type="heading" />
      <v-skeleton-loader type="text@2" class="py-3" />
    </div>

    <v-img cover :src="image" v-if="image" height="30vh" />

    <h1 class="display-3 mt-10" lang="ml">
      {{ title }}
    </h1>

    <h5 v-if="authors || author" class="subtitle-1 py-3">
      <span> {{ getAuthorString(authors || author) }} </span>
      <span v-if="date"> - {{ new Date(date).toDateString() }} </span>
    </h5>

    <v-divider />
  </div>
</template>

<script>
export default {
  name: "PostTitle",
  methods: {
    getAuthorString: author => {
      if (Array.isArray(author)) {
        return author.map(a => a.name).join(", ");
      } else {
        return author;
      }
    }
  },
  props: {
    image: String,
    title: String,
    authors: Array,
    author: String,
    date: String,
    loading: Boolean
  }
};
</script>
