// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/scss/_colors.scss";`,
      },
    },
  },
};
