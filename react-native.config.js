module.exports = {
  project: {
    ios: {},
    android: {}, // grouped into "project"
  },
  assets: ['./assets/fonts/'], // stays the same
  dependencies: {
    'react-native-vector-icons': {
      platforms: {
        android: null, // disable Android platform
        ios: null,
      },
    },
  },
};
