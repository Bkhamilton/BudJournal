module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      [
        'react-native-reanimated/plugin',
        {
          globals: ['__DEV__'],
          relativeSourceLocation: true,
        }
      ],
      '@babel/plugin-proposal-export-namespace-from'
    ]
  }
}