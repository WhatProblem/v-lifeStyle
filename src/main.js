// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import Home from './components/HelloFromVux'
import router from './router'
// import axios from 'axios'
import api from './util/wsHttp'

import './styles/common.less'
import './assets/icon/myIcon.css'

FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$wsHttp = api

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
