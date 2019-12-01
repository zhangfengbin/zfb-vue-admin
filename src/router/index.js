import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import UserInfo from '../views/UserInfo.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/UserInfo',
    component: UserInfo
  },
 
]
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
