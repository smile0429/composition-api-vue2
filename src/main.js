import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { getServerConfig } from "./config/serverConfig"

import "./assets/index.scss" // 导入重置样式
// import "@/assets/iconfont/iconfont.css"
// import "@/assets/iconfont/iconfont.js"

import { all } from "@/utils/component" // 注册全局组件
Object.keys(all).forEach(v => {
  Vue.component(`${v}`, all[v])
})

import { installs } from "@/utils/use" // install全局组件
installs.forEach(v => {
  Vue.use(v)
})

import * as echarts from 'echarts'
Vue.prototype.$echarts = echarts

import { message } from 'ant-design-vue'
Vue.prototype.$message = message

import { createPinia } from 'pinia'
export const pinia = createPinia()

if (process.env.NODE_ENV === 'production') {
  const { mockXHR } = require('../mock')
  mockXHR()
}

Vue.config.productionTip = false

getServerConfig().then((res) => {
  new Vue({
    router,
    pinia,
    render: h => h(App)
  }).$mount('#app')
})

