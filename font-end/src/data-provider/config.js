import axios from 'axios'
import router from '@/router'

// 后台response体中正确的码值
const CORRECT_CODE = 200
const errorHandle = (err) => {
  console.log(err)
}
// 设置超时时间
axios.defaults.timeout = 1000
// 发送请求时携带cookie
axios.defaults.withCredentials = true
// 配置axios 基路径
// axios.defaults.baseURL = 'http://localhost:8080'

// 请求拦截器
axios.interceptors.request.use(function (request) {
  console.log(request)
  // need return 否则报错  Cannot read property 'cancelToken' of undefined
  return request
},function(error){
  console.log(error)
  return Promise.reject(error)
})
// 响应拦截器
axios.interceptors.response.use(function ({data, status}) {
  console.log('response', data)
  if (403 === data.code) {
    router.replace({
      name: 'login'
    })
  }
  if (CORRECT_CODE !== data.code) {
    errorHandle(data.message)
  }
  return data
}, function (response) {
  console.log('response', response)
  let message = ''
  switch (response.status) {
    case 400:
      message = '请求错误'; break;
    case 401:
      message = '未授权，请登录'; break;
    case 403:
      message = '拒绝访问'; break;
    case 404:
      message = `请求地址出错: ${ response.config.url }`; break;
    case 408:
      message = '请求超时'; break;
    case 500:
      message = '服务器内部错误'; break;
    case 501:
      message = '服务未实现'; break;
    case 502:
      message = '网关错误'; break;
    case 503:
      message = '服务不可用'; break;
    case 504:
      message = '网关超时'; break;
    case 505:
      message = 'HTTP版本不受支持'; break;
    default:
      message = '未知错误'
  }
  errorHandle(message)
})
