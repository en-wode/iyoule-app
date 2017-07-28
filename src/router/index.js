import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/class-main'
import profile from '../views/personal/profile'
import recharge from '../views/personal/recharge'
import feedback from '../views/personal/feedback'
import personlv from '../views/personal/person_lv'
import personvip from '../views/personal/person_vip'
import home from '../views/home/home'
import catalog from '../views/catalog/catalog'
import comment from '../components/comment/comment'
import commentt from '../views/comment/commentt'
import book from '../views/book/book'
import bookread from '../views/bookread/bookread'
import bookcity from '../components/bookcity/bookcity'
import operation from '../components/operation/operation'
import detail from '../components/paihang/paihang-detail/detail'
import classify from '../components/classify/classify'
import free from '../components/free/free'
import topic from '../components/topic/topic'
import topict from '../components/topic/topic-content'
import Axios from 'axios'
import '../common/stylus/index.styl'

Vue.use(VueRouter)
Vue.prototype.$http = Axios

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '',
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
          path: '/topic-content',
          component: topict
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
        },
        {
          path: '/book',
          component: book
        },
        {
          path: '/comment',
          component: comment
        },
        {
          path: '/commentt',
          component: commentt
        },
        {
          path: '/catalog',
          component: catalog
        },
        {
          path: '/operation',
          component: operation
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
    },
    {
      path: '/person_vip',
      component: personvip
    },
    {
      path: '/feedback',
      component: feedback
    },
    {
      path: '/bookread',
      component: bookread
    }
  ]
})
export default router

