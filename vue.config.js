const name = require("./public/serverConfig.json").title || "图表可视化工具"

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  outputDir: "dist",
  assetsDir: "static",
  indexPath: "index.html",
  filenameHashing: true,
  runtimeCompiler: false,
  transpileDependencies: ["resize-detector"],
  productionSourceMap: false,
  crossorigin: undefined,
  integrity: false,
  configureWebpack: {
    name,
    devtool: "source-map",
    resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      }
    },
    performance: {
      hints: "error",
      maxAssetSize: 3000000000, // 整数类型（以字节为单位）
      maxEntrypointSize: 5000000000 // 整数类型（以字节为单位）
    }
  },
  css: {
    sourceMap: false,
    extract: process.env.NODE_ENV === "production" ? {
      ignoreOrder: true,
    } : false,
    loaderOptions: {}
  },
  devServer: {
    overlay: {
      warning: false,
      errors: false
    },
    https: false,
    open: false,
    proxy: {
      [process.env.VUE_APP_PROXY_DOMAIN]: {
        target: process.env.BACKGROUND_APPLICATION_URL,
        changeOrigin: true,
        pathRewrite: {
          ['^' + process.env.VUE_APP_PROXY_DOMAIN]: ''
        }
      }
    },
    before: require('./mock/mock-server.js'),
  }
}
