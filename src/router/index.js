import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Welcome from '../views/Welcome.vue'
import UserInfo from '../views/UserInfo.vue'
import Menu from '../views/Menu.vue'
import Org from '../views/Org.vue'
import Auth from '../views/Auth.vue'
import Role from '../views/Role.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Welcome
  },
  {
    path: '/userInfo',
    component: UserInfo
  },
  {
    path: '/role',
    component: Role
  },
  {
    path: '/menu',
    component: Menu
  },
  {
    path: '/auth',
    component: Auth
  },
  {
    path: '/org',
    component: Org
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
