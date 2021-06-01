import Vue from 'vue'
import axios from "axios"
import { setConfig, getConfig } from "./index"
Vue.prototype.$config = getConfig()

// 获取项目动态全局配置
export const getServerConfig = () => {
  return axios({
    baseURL: "",
    method: "get",
    url: (Vue.prototype.$baseUrl || "./") + "serverConfig.json"
  })
    .then(async ({ data: config }) => {
      let $config = Vue.prototype.$config
      // 自动注入项目配置
      if (Vue && $config && typeof config === "object") {
        $config = Object.assign($config, config)
        setConfig($config)
        Vue.prototype.$config = $config
        // 设置全局配置
        setConfig($config)
      }
      // 设置全局baseURL
      if ($config?.baseURL) {
        Vue.prototype.$baseUrl = $config?.baseURL
      }
      return $config
    })
    .catch(() => {
      throw "请在public文件夹下添加serverConfig.json配置文件"
    })
}

