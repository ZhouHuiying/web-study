import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './Plugins/element.js'
import '@/assets/css/reset.css'
// import '@/assets/css/tailwind.css'
import '@/assets/css/main.css'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/fontIcon/iconfont.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
