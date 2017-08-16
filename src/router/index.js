import Vue from 'vue'
import VueRouter from 'vue-router'
import main from '../views/class-main'
import profile from '../views/personal/profile'
import login from '../views/personal/login'
import recharge from '../views/personal/recharge'
import czrecords from '../views/personal/czrecords'
import personnew from '../views/personal/person_new'
import personbook from '../views/personal/person_book'
import set from '../views/personal/set'
import search from '../views/search/search'
import qiandao from '../views/qiandao/qiandao'
import feedback from '../views/personal/feedback'
import personlv from '../views/personal/person_lv'
import personvip from '../views/personal/person_vip'
import tuisong from '../views/personal/person_detail/tuisong'
import ziliao from '../views/personal/person_detail/ziliao'
import home from '../views/home/home'
import catalog from '../views/catalog/catalog'
import comment from '../components/comment/comment'
import commentt from '../views/comment/commentt'
import commentt2 from '../views/comment/commentt2'
import book from '../views/book/book'
import bookread from '../views/bookread/bookread'
import warn from '../views/bookread/book-detail/warn'
import more from '../views/bookread/book-detail/more'
import mulu from '../views/bookread/book-detail/mulu'
import download from '../views/bookread/book-detail/download'
import bookcity from '../components/bookcity/bookcity'
import operation from '../components/operation/operation'
import flower from '../components/operation/flower'
import detail from '../components/paihang/paihang-detail/detail'
import classify from '../components/classify/classify'
import free from '../components/free/free'
import topic from '../components/topic/topic'
import topict from '../components/topic/topic-content'
import Axios from 'axios'
import Jquery from 'jquery'
import '../common/stylus/index.styl'

Axios.defaults.timeout = 5000
Axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
Axios.defaults.baseURL = 'http://35.189.165.140:3000/'
Vue.prototype.$http = Axios
Vue.prototype.$ = Jquery
Vue.use(VueRouter)

let router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      component: main,
      redirect: '/home'
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
          path: '/commentt2',
          component: commentt2
        },
        {
          path: '/catalog',
          component: catalog
        },
        {
          path: '/operation',
          component: operation
        },
        {
          path: '/flower',
          component: flower
        },
        {
          path: '/warn',
          component: warn
        },
        {
          path: '/more',
          component: more
        }
      ]
    },
    {
      path: '/login',
      component: login
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
      path: '/czrecords',
      component: czrecords
    },
    {
      path: '/person_new',
      component: personnew
    },
    {
      path: '/person_book',
      component: personbook
    },
    {
      path: '/set',
      component: set
    },
    {
      path: '/tuisong',
      component: tuisong
    },
    {
      path: '/ziliao',
      component: ziliao
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
    },
    {
      path: '/mulu',
      component: mulu
    },
    {
      path: '/download',
      component: download
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '/qiandao',
      component: qiandao
    }
  ]
})
export default router

