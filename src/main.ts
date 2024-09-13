import './assets/main.css'

import { createApp } from 'vue' // 引入 createApp 用于创建应用
import App from './App.vue' // 根组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 
import '@/styles/index.scss';

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus)
app.mount('#app')
