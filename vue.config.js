const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  // remove eslint 
  devServer: {
    proxy: 'https://dev04.stagingit.net/'
  }
})
