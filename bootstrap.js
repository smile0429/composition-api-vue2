
import EventBusMixin from "@/mixins/eventBus"
export default {
  install(Vue) {
    // 注入全局事件注册全局mixin
    Vue.mixin(EventBusMixin)
    // 定义全局事件总线，全局弹窗管理，全局延时执行
    const EventBus = new Vue()
    Object.defineProperties(Vue.prototype, {
      $bus: {
        get() {
          return EventBus
        }
      }
    })
  }
}
