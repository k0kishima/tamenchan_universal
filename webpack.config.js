const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const path = require("path");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);

  config.entry = "./main.js";

  if (!config.resolve) {
    config.resolve = {};
  }

  if (!config.resolve.alias) {
    config.resolve.alias = {};
  }

  config.resolve.alias["@"] = path.resolve(__dirname, "src/");

  return config;
};
