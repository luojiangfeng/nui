import axios from "axios"
import { Message, MessageBox } from "element-ui"
//import store from '@/store'

// create an axios instance
const service = axios.create({
  //baseURL: process.env.BASE_API, // api的base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // Do something before request is sent
    config.headers["x-request-source"] = "litong" //

    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  }
)

// respone interceptor
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 0) {
      // 四位数错误码，需要重新登录;
      if (res.code >= 1000 && res.code < 10000) {
        MessageBox.alert(res.message, "提示", {
          confirmButtonText: "重新登录",
          callback: action => {
            removeToken()
            location.reload()
          }
        })
      } else {
        console.log(999)
        Message({
          message: res.message,
          type: "error",
          duration: 5 * 1000
        })
        return Promise.reject("error")
      }
    } else {
      return response.data
    }
  },
  error => {
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
