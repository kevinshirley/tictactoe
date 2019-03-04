module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
    '@babel/preset-typescript'
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ],
  // "transformIgnorePatterns": [
  //   // Change MODULE_NAME_HERE to your module that isn't being compiled
  //   "/node_modules/(?!MODULE_NAME_HERE).+\\.js$",
  //   "/src/testing/(?!MODULE_NAME_HERE).+\\.js$",
  //   "/src/testing/(?!FOLDER_NAME_HERE).+/(?!MODULE_NAME_HERE).+\\.js$"
  // ]
};