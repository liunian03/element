/**
 * 封装axios
 * @author fengj
 */

import axios from 'axios/index'
// import QS from 'qs'
import {aes, sign, SHA256} from './crypto'
import { Loading, Message } from 'element-ui/types'
import store from '@/store/index'
import {ajax} from './axios-p'

// 定义loading变量
let loading

function startLoading () { // 使用的是element的loading-start方法
  loading = Loading.service({
    lock: true,
    text: '正在加载中......',
    background: 'rgba(0, 0, 0, 0.5)'
  })
}

function endLoading () { // 使用element loading-close方法
  loading.close()
}

// showFullScreenLoading() tryHideFullScreenLoading()将同一时刻的请求合并。
// 申明一个变量needLoadingRequestCount,每次调用showFullScreenLoading needLoadingRequestCount + 1
// 调用tryHideFullScreenLoading方法,needLoadingRequestCount - 1
let needLoadingRequestCount = 0
export function showFullScreenLoading () {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading () {
  if (needLoadingRequestCount <= 0) return needLoadingRequestCount--
  if (needLoadingRequestCount === 1) {
    endLoading()
  }
}

let baseWebURL = ''
// 环境切换
if (process.env.NODE_ENV === 'development') { // 开发
  baseWebURL = '/dept'
} else if (process.env.NODE_ENV === 'test') { // 测试
  baseWebURL = 'http://www.test.com'
} else if (process.env.NODE_ENV === 'production') { // 生产
  baseWebURL = 'http://www.production.com'
}

// 生成一个axios实例
var instance = axios.create({
  baseURL: baseWebURL
})
console.log(instance)
// 1、设置请求超时时间
instance.defaults.timeout = 10000
// 2、post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;' +
  'charset=UTF-8'
// 3、返回数据类型定义
// instance.defaults.responseType = 'json'
// 4、带cookie请求
instance.defaults.withCredentials = true

// 请求拦截器
instance.interceptors.request.use(
  config => {
    console.log(config, 'config请求拦截器')
    const token = store.state.token
    console.log('token', token)
    token && (config.headers.Authorization = token)
    if (config.method === 'post') {
      console.log('post请求统一需要做判断')
    }
    showFullScreenLoading() // 开启loading
    return config
  }, error => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    console.log(response, '响应拦截器')
    // 如果返回状态码为200，请求成功，正常获取数据
    if (response.status === 200) {
      console.log('needLoadingRequestCount', needLoadingRequestCount)
      tryHideFullScreenLoading() // 关闭加载
      Message({
        showClose: true,
        message: '响应成功',
        type: 'success',
        duration: 3000
      })
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  }, error => {
    console.log('error', error)
    if (error.response.data.status) {
      console.log('后台错误码统一处理')
      switch (error.response.data.status) {
        // 401
        case 401:
          Message({
            showClose: true,
            message: '尚未登录，请登录！',
            duration: 3000,
            type: 'warning'
          })
          break
        // 403
        case 403:
          Message({
            showClose: true,
            message: '登录过期，请重新登录！',
            duration: 3000,
            type: 'warning'
          })
          break
        // 404
        case 404:
          Message({
            showClose: true,
            message: '网络请求不存在！',
            duration: 3000,
            type: 'error'
          })
          break
        // 其他错误
        default:
          Message({
            showClose: true,
            message: error.response.data.message,
            duration: 3000,
            type: 'error'
          })
      }
    }
    return Promise.reject(error)
  }
)
/**
 * 封装get请求 url传参
 * @param url 请求地址
 * @param params 请求参数
 * @param level 加密等级
 * @return {Promise<AxiosResponse<any> | never>}
 */
const get = (url, params, level) => instance(getConfig(url, 'get', true, params, level))
  .then(response => Promise.resolve(response)).catch(error => Promise.reject(error))

/**
 * 封装post请求 表单传参
 * @param url 请求地址
 * @param params 请求参数
 * @param level 加密等级
 * @return {Promise<AxiosResponse<any> | never>}
 */
const post = (url, params, level) => instance(getConfig(url, 'post', false, params, level))
  .then(response => Promise.resolve(response)).catch(error => Promise.reject(error))

/**
 * 封装postJson请求 post请求 json传参
 * @param url 请求地址
 * @param params 请求参数
 * @param level 加密等级
 * @return {Promise<AxiosResponse<any> | never>}
 */
const postJson = (url, params, level) => instance(getConfig(url, 'post', true, params, level))
  .then(response => Promise.resolve(response)).catch(error => Promise.reject(error))

/**
 * 封装put请求 表单传参
 * @param url 请求地址
 * @param params 请求参数
 * @param level 加密等级
 * @return {Promise<AxiosResponse<any> | never>}
 */
const put = (url, params, level) => instance(getConfig(url, 'put', false, params, level))
  .then(response => Promise.resolve(response)).catch(error => Promise.reject(error))

/**
 * 封装putJson请求 put请求 json传参
 * @param url 请求地址
 * @param params 请求参数
 * @param level 加密等级
 * @return {Promise<AxiosResponse<any> | never>}
 */
const putJson = (url, params, level) => instance(getConfig(url, 'put', true, params, level))
  .then(response => Promise.resolve(response)).catch(error => Promise.reject(error))

/**
 * 封装delete请求 url传参
 * @param url 请求地址
 * @param params 请求参数
 * @param level 加密等级
 * @return {Promise<AxiosResponse<any> | never>}
 */
const del = (url, params, level) => instance(getConfig(url, 'delete', true, params, level))
  .then(response => Promise.resolve(response)).catch(error => Promise.reject(error))

// 参数转换
const param2String = data => {
  console.log('data', data)
  if (typeof data === 'string') {
    return data
  }
  let ret = ''
  for (let it in data) {
    let val = data[it]
    if (typeof val === 'object' && //
      (!(val instanceof Array) || (val.length > 0 && (typeof val[0] === 'object')))) {
      val = JSON.stringify(val)
    }
    ret += it + '=' + encodeURIComponent(val) + '&'
  }
  if (ret.length > 0) {
    ret = ret.substring(0, ret.length - 1)
  }
  return ret
}

// // 错误回调函数
// const errback = error => {
//   if ('code' in error) {
//     // 未登录
//     if (error.code === 30001) {
//       sessionStorage.clear()
//       window.location.href = '/'
//       return
//     }
//     return Promise.reject(error)
//   }
//   // 网络异常或链接超时
//   Message({
//     message: error.message,
//     type: 'error'
//   })
//   // eslint-disable-next-line prefer-promise-reject-errors
//   return Promise.reject({data: error.message})
// }
//
// // 成功回调函数
// const successback = res => {
//   if (res.status === 200 && res.data.code !== 20000) {
//     let errMsg = {'30002': '无权限', '30003': '验签失败'}
//     let msg = errMsg[res.data.code]
//     if (msg) {
//       Message({
//         message: errMsg[res.data.code],
//         type: 'error'
//       })
//     }
//     return res.data
//   }
// }

/**
 * 参数加密方法
 * @param url 请求地址
 * @param method get,post,put,delete
 * @param isjson 是否json提交参数
 * @param params 参数
 * @param level 0：加密
 * @return {{headers: {level: number}, method: *, url: *}}
 */
const getConfig = (url, method, isjson, params, level = 0) => {
  let config_ = {
    url,
    method,
    headers: {
      level
    }
  }

  if (level === 0) {
    let timestamp = new Date().getTime()
    // 获取随机数
    let nonce = SHA256(Math.random())
    // 参数进行对称加密
    params = aes.en(JSON.stringify(params))
    // 签名串
    let signature = sign(nonce, timestamp, params)
    console.log('nonce', nonce)
    console.log('params', params)
    console.log('signstr', signature)
    config_.headers = {
      timestamp,
      nonce,
      signature
    }
    console.log('config', config_.headers)
  }
  console.log('params-p', params)
  // 表单提交参数
  if (!isjson) {
    config_.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config_.responseType = 'text'
    config_.transformRequest = [function (data) {
      return param2String(data)
    }]
  }
  config_.headers['Content-Type'] = 'text/plain'
  config_.responseType = 'text'
  // 设置参数
  if (method in {'get': true, 'delete': true}) {
    config_.params = params
  } else if (method in {'post': true, 'put': true}) {
    config_.data = params
  }
  console.log('config--------', config_)
  return config_
}

export {
  ajax,
  del,
  post,
  postJson,
  put,
  putJson,
  get
}
