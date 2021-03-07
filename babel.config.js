module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "babel-plugin-root-import",
        {
          paths: [
            {
              rootPathSuffix: "./assets",
              rootPathPrefix: "<assets>/",
            },
            {
              rootPathSuffix: "./src/components",
              rootPathPrefix: "<components>/",
            },
            {
              rootPathSuffix: "./src/components/common",
              rootPathPrefix: "<common>/",
            },
            {
              rootPathSuffix: "./src/screens",
              rootPathPrefix: "<screens>/",
            },
            {
              rootPathSuffix: "./src/states",
              rootPathPrefix: "<states>/",
            },
            {
              rootPathSuffix: "./src/constants",
              rootPathPrefix: "<constants>/",
            },
            {
              rootPathSuffix: "./src/navigation",
              rootPathPrefix: "<navigation>/",
            },
            {
              rootPathSuffix: "./src",
              rootPathPrefix: "<root>/",
            },
          ],
        },
      ],
    ],
  };
};
