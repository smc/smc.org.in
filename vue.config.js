module.exports = {
  transpileDependencies: ["vuetify"],
  pages: {
    index: {
      // entry for the page
      entry: "src/main.js",
      // the source template
      template: "public/index.html",
      // output as dist/index.html
      filename: "index.html",
    },
    blog: {
      entry: "src/main.js",
      filename: "blog/index.html",
    },
    articles: {
      entry: "src/main.js",
      filename: "articles/index.html",
    },
    research: {
      entry: "src/main.js",
      filename: "research/index.html",
    },
    about: {
      entry: "src/main.js",
      filename: "about/index.html",
    },
    contact: {
      entry: "src/main.js",
      filename: "contact/index.html",
    },
    fonts: {
      entry: "src/main.js",
      filename: "fonts/index.html",
    },
    manjari: {
      entry: "src/main.js",
      filename: "fonts/manjari/index.html",
    },
    gayathri: {
      entry: "src/main.js",
      filename: "fonts/gayathri/index.html",
    },
    chilanka: {
      entry: "src/main.js",
      filename: "fonts/chilanka/index.html",
    },
    dyuthi: {
      entry: "src/main.js",
      filename: "fonts/dyuthi/index.html",
    },
    projects: {
      entry: "src/main.js",
      filename: "projects/index.html",
    },
  },
};
