import axios from 'axios'
import qs from 'qs'


// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  config.data = JSON.stringify(config.data);
  config.headers.Authorization = '';
  console.log(config);
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

function api(methods, url, param) {
  return axios({
    url: url,
    method: methods, // 默认是 get
    baseURL: 'http://www.whatproblem.top/',
    params: param,
    data: param,
    timeout: 150000, // 请求超时
    withCredentials: false, // 默认的
    responseType: 'json', // 默认的
    onUploadProgress: function (progressEvent) {
      // 对原生进度事件的处理
    },
    // `onDownloadProgress` 允许为下载处理进度事件
    onDownloadProgress: function (progressEvent) {
      // 对原生进度事件的处理
    },
    maxContentLength: 20000,
  })
}


export default {
  get: function (url, param = {}) {
    return api('get', url, param);
  },
  post: function (url, param = {}) {
    return api('post', url, param);
  },
  put: function (url, param = {}) {
    return api('put', url, param);
  },
  delete: function (url, param = {}) {
    return api('delete', url, param);
  }
}