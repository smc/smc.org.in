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
    fonts: {
      entry: "src/main.js",
      filename: "fonts/index.html",
    },
    manjari: {
      entry: "src/main.js",
      filename: "fonts/manjari/index.html",
    },
    projects: {
      entry: "src/main.js",
      filename: "projects/index.html",
    },
  },
};
