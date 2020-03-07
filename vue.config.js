module.exports = {
  transpileDependencies: ["vuetify"],
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title =
        "Swathanthra Malayalam Computing | സ്വതന്ത്ര മലയാളം കമ്പ്യൂട്ടിങ്ങ്";
      return args;
    });
  }
};
