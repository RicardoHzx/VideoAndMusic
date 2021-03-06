import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Control from '../views/Control.vue'
import Play from '../views/music/Play.vue'
import Toplay from '../views/music/Toplay.vue'
import Sence from '../views/Sence.vue'
import Equipment from '../views/Equipment.vue'
import FunctionList from '../views/FunctionList.vue'
import Movie from '../views/test/Movie.vue'
import Music from '../views/test/Music.vue'
import Teleplay from '../views/test/Teleplay.vue'
import Variety from '../views/test/Variety.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/user.vue')
  },
  {
    path: '/UserPage',
    name: 'UserPage',
    component: () => import('../views/UserPage.vue')
  },
  {
    path: '/registered',
    name: 'registered',
    component: () => import('../views/registered.vue')
  },
  // {
  //   path: '/play',
  //   name: 'play',
  //   component: () => import(/* webpackChunkName: "play" */ '../views/Play.vue'),
  //   children:[{
  //     path: '/movie',
  //     component: () => import(/* webpackChunkName: "movie" */ '../views/test/Movie.vue'),
  //     meta: { title: '电影'}
  //   },{
  //     path: '/music',
  //     component: () => import(/* webpackChunkName: "music" */ '../views/test/Music.vue'),
  //     meta: { title: '音乐'}
  //   },{
  //     path: '/mv',
  //     component: () => import(/* webpackChunkName: "music" */ '../views/test/MV.vue'),
  //     meta: { title: 'MV'}
  //   }]
  // },
  {
    path: '/movie',
    name: 'movie',
    component: () => import('../views/test/Movie.vue')
  },{
    path: '/play',
    name: 'play',
    component: () => import('../views/music/Play.vue')
  },{
    path: '/toplay',
    name: 'toplay',
    component: () => import('../views/music/Toplay.vue')
  },{
    path: '/music',
    name: 'music',
    component: () => import(/* webpackChunkName: "control" */ '../views/test/Music.vue'),
  },{
    path: '/teleplay',
    name: 'teleplay',
    component: () => import(/* webpackChunkName: "control" */ '../views/test/Teleplay.vue')
  },{
    path: '/variety',
    name: 'variety',
    component: () => import(/* webpackChunkName: "control" */ '../views/test/Variety.vue')
  },
  {
    path: '/control',
    name: 'control',
    component: () => import(/* webpackChunkName: "control" */ '../views/Control.vue')
  },
  {
    path: '/sence',
    name: 'sence',
    component: () => import(/* webpackChunkName: "sence" */ '../views/Sence.vue')
  },
  {
    path: '/equipment',
    name: 'equipment',
    component: () => import(/* webpackChunkName: "equipment" */ '../views/Equipment.vue')
  },
  {
    path: '/functionList',
    name: 'functionList',
    component: () => import(/* webpackChunkName: "functionList" */ '../views/FunctionList.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
