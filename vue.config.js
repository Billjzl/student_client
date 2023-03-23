// vue.config.js
const path = require("path");
const { defineConfig } = require("@vue/cli-service");

function resolve(dir) {
  return path.join(__dirname, dir); // path.join(__dirname)设置绝对路径
}

module.exports = defineConfig({
  devServer: {
    port: 8080,
    proxy: "http://localhost:3000",
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
      },
    },
  },
});
