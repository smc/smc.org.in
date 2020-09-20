<template>
  <section v-if="enabled">
    <div id="discourse-comments">
      {{ pullComments(title) }}
    </div>
  </section>
</template>

<script>
export default {
  name: "DiscourseComments",
  methods: {
    pullComments: (title) => {
      window.DiscourseEmbed = {
        discourseUrl: "https://discourse.indicproject.org/",
        discourseEmbedUrl: title,
      };
      let discourse = document.createElement("script");
      discourse.setAttribute(
        "src",
        "https://discourse.indicproject.org/javascripts/embed.js"
      );
      document.head.appendChild(discourse);
    },
    mounted() {},
  },
  props: {
    enabled: Boolean,
    title: String,
  },
};
</script>
