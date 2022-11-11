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
  props: {
    enabled: Boolean,
    title: String,
  },
  methods: {
    pullComments: (title) => {
      window.DiscourseEmbed = {
        discourseUrl: "https://community.smc.org.in/",
        discourseEmbedUrl: title,
      };
      let discourse = document.createElement("script");
      discourse.setAttribute(
        "src",
        "https://community.smc.org.in/javascripts/embed.js"
      );
      document.head.appendChild(discourse);
    },
    mounted() {},
  },
};
</script>
