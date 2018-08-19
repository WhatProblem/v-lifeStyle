import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/views/home/home'

Vue.use(Router)

const appRoutes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      icon: 'el-icon-ws-shouye',
      homeObj: '测试'
    },
    // component: () => import('@/views/home/home.vue')
    component: home
  },
  {
    path: '/film',
    name: 'film',
    meta: {
      title: '首页',
      icon: 'el-icon-ws-shouye',
      filmObj: '测试'
    },
    component: () => import('@/views/film/film.vue')
  },
  {
    path: '/music',
    name: 'music',
    meta: {
      title: '首页',
      icon: 'el-icon-ws-shouye',
      musicObj: '测试'
    },
    component: () => import('@/views/music/music.vue')
  },
  {
    path: '/game',
    name: 'game',
    meta: {
      title: '首页',
      icon: 'el-icon-ws-shouye',
      gameObj: '测试'
    },
    component: () => import('@/views/game/game.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    meta: {
      title: '首页',
      icon: 'el-icon-ws-shouye',
      profileObj: '测试'
    },
    component: () => import('@/views/profile/profile.vue')
  }
]

export default new Router({
  routes: appRoutes
})
