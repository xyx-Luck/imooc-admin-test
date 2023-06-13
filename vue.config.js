const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: `https://api.imooc-admin.lgdsunday.club`, // 这里写的是访问接口的域名和端口号
        changeOrigin: true, // 允许跨域请求
      }
    }
  },

  // devServer: {
  //   // 配置反向代理
  //   proxy: {
  //     // 当地址中有/api的时候会触发代理机制
  //     '/api': {
  //       // 要代理的服务器地址  这里不用写 api
  //       target: 'https://api.imooc-admin.lgdsunday.club/',
  //       changeOrigin: true // 是否跨域
  //     }
  //   }
  // },

})
