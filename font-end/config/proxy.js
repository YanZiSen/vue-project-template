const ip = 'http://192.168.10.184:3000'
module.exports = {
  proxy: {
    '/api/**' : {
      target: ip,
      changeOrigin: true,
    },
  }
}
