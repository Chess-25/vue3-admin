import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './index.css'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'dayjs/locale/zh-cn'
import locale from 'element-plus/es/locale/lang/zh-cn'
import 'element-plus/dist/index.css'
// 引入图表（所有图标见 icon 目录下的 demo_index.html）
import './assets/icon/iconfont.css'
// import dataV from '@jiaminghi/data-view';
import dataV from '@kjgl77/datav-vue3';//解决datav和vite不兼容问题
const pinia = createPinia()
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
// 注册pinia
app.use(pinia)
app.use(dataV)
app.use(ElementPlus,{locale})
app.use(router)
app.mount('#app')