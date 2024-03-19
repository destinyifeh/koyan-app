module.exports = {
  presets: ['@react-native/babel-preset'],

  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
      },
    ],
  ],
  env: {
    production: {
      plugins: ['react-native-paper/babel', 'transform-remove-console'],
    },
  },
};
