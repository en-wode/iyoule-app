import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/class-main'
import profile from '../views/personal/profile'
import recharge from '../views/personal/recharge'
import personlv from '../views/personal/person_lv'
import home from '../views/home/home'
import bookcity from '../components/bookcity/bookcity'
import detail from '../components/paihang/paihang-detail/detail'
import classify from '../components/classify/classify'
import free from '../components/free/free'
import topic from '../components/topic/topic'
import Axios from 'axios'
import '../common/stylus/index.styl'

Vue.use(VueRouter)
Vue.prototype.$http = Axios

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: main
    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: '/home',
          component: home
        },
        {
          path: '/bookcity',
          component: bookcity
        },
        {
          path: '/topic',
          component: topic
        },
        {
          path: '/free',
          component: free
        },
        {
          path: '/classify',
          component: classify
        },
        {
          path: '/detail',
          component: detail
        }
      ]
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/recharge',
      component: recharge
    },
    {
      path: '/person_lv',
      component: personlv
    }
  ]
})
export default router

