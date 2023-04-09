const { defineConfig } = require('@vue/cli-service')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // 方式一使用vue-cli的选项进行配置
  publicPath: './',
  // 方式二:
  configureWebpack: {
    resolve: {
      alias: {
        com: '@/components'
      }
    },
    plugins: [
      new WindiCSSWebpackPlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src/components')
  //   }
  // },
  outputDir: 'build',
  devServer: {
    // 设置端口号
    port: 8888
    // 浏览器是否自动打开
  },
  // 关闭eslint
  lintOnSave: false
})
