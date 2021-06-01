//切割面板组件
import SplitPane from "./index.vue"

export default SplitPane

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.component("split-pane", SplitPane)
}
