const ip = 'http://localhost:3000'
module.exports = {
  proxy: {
    '/api/**' : {
      target: ip,
      changeOrigin: true,
    },
  }
}
