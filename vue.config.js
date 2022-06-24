// vue.config.js
module.exports = {
    // options...
    // devServer: {
    //     disableHostCheck: true
    // }


    devServer: {
        port: 3000,
        proxy: {
          'api':{
            target: 'http://localhost:8081',
            ws: true,
            changeOrigin: true
          }
    
        },
    
      },
}
