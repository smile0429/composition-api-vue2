// install全局组件
import "xe-utils"
import "vxe-table/lib/index.css"
import VXETable from "vxe-table"
import animated from "animate.css"
import contentmenu from "v-contextmenu"
import "v-contextmenu/dist/index.css"
import VueCompositionAPI from '@vue/composition-api'
import { PiniaPlugin } from 'pinia'

export const installs = [
  animated,
  VXETable,
  contentmenu,
  VueCompositionAPI,
  PiniaPlugin
]
