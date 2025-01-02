module.exports = {
  root: true,
  extends: '@react-native',
  settings: {
    'import/resolver': {
      alias: [
        ['types', './types'],
        ['api', './api'],
        ['actions', './actions'],
        ['assets', './assets'],
        ['components', './components'],
        ['navigation', './navigation'],
        ['reducers', './reducers'],
        ['sagas', './sagas'],
        ['screens', './screens'],
        ['store', './store'],
        ['utils', './utils'],
      ],
    },
  },
};
