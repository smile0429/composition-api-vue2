# chart-vsualization

## 安装依赖

```
yarn install
```

### 运行项目

```
yarn serve
```

### 打包项目

```
yarn build
```

### 打包分析

```
yarn build-report
```

### 内置技术栈

Vue2.0  
vue-router 路由  
ant-design-vue ui 组件库，按需引入  
pinia 这是一款替代 vuex 的方案，只有 1kb 大小 https://pinia.esm.dev/  
axios 请求工具  
echarts5 图表工具  
vuedraggable 拖拽方案  
v-contextmenu 右键菜单  
vxe-table 表格工具  
dayjs 时间格式化工具，只有 2kb 大小  
resize-detector 监听容器变化  
animate.css 动画工具  
mockjs 生成随机数据，拦截 Ajax 请求  
composition-api 尽情使用 vue3.0 语法 https://v3.vuejs.org/guide/composition-api-introduction.html#why-composition-api

### 注意点

全局配置请在 public 文件夹下的 serverConfig.json 文件中添加，用 this.$config 去取
