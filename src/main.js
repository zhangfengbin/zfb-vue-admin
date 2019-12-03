import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import Home from '@/views/Home.vue'
import { normalize } from 'path';

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  router,
  store,
  components:{
    Home:Home
  },
  render: h => h(App)
}).$mount('#app')
