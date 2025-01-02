module.exports = {
  presets: ['babel-preset-expo'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          types: './types',
          actions: './actions',
          api: './api',
          assets: './assets',
          components: './components',
          navigation: './navigation',
          reducers: './reducers',
          sagas: './sagas',
          screens: './screens',
          store: './store',
          utils: './utils',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
