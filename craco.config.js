const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "src/components"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@helpers": path.resolve(__dirname, "src/helpers"),
    },
    configure: (webpackConfig) => {
      webpackConfig.resolve.extensions.push(".ts", ".tsx");
      return webpackConfig;
    },
  },
};
