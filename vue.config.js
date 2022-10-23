const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Justin T. Angeles Homepage'
    }
  },
  transpileDependencies: true,
  lintOnSave: false
})
