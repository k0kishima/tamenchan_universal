const { getDefaultConfig } = require("metro-config");
const path = require("path");

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts },
  } = await getDefaultConfig();
  return {
    transformer: {
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: false,
        },
      }),
    },
    resolver: {
      assetExts: assetExts.filter((ext) => ext !== "svg"),
      sourceExts: [...sourceExts, "svg"],
      extraNodeModules: new Proxy(
        {},
        {
          get: (target, name) =>
            name === "@" ? path.resolve(__dirname, "src") : path.join(process.cwd(), `node_modules/${name}`),
        },
      ),
    },
  };
})();
