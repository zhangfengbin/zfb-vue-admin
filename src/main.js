import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
import Home from '@/views/Home.vue'
new Vue({
  router,
  store,
  components:{
    Home:Home
  },
  render: h => h(App)
}).$mount('#app')
