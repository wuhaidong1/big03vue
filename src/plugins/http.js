import axios from 'axios'
const MyHttpServer = {}
MyHttpServer.install = (Vue) => {
  axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
  axios.interceptors.request.use(
    config => {
      // const token = sessionStorage.getItem('token')
      // if (token ) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      //   config.headers.authorization = token  //请求头加上token
      // }
      if (config.url !== 'login') {
        const auth = localStorage.getItem('token')
        this.$http.defaults.headers.common['Authorization'] = auth
      }
      return config
    },
    err => {
      return Promise.reject(err)
    })

  Vue.prototype.$http = axios
}
export default MyHttpServer
