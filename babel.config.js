module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ["babel-plugin-module-resolver",
      {
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@hooks': './src/hooks',
          '@navigators': './src/navigators',
          '@screens': './src/screens',
          '@content': './src/content',
          '@types': './src/types',
        }
      }
    ]
  ]
};
