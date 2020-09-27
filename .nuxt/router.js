import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3225158a = () => interopDefault(import('../pages/Browseplans.vue' /* webpackChunkName: "pages/Browseplans" */))
const _a41cf9ac = () => interopDefault(import('../pages/confirmationpage.vue' /* webpackChunkName: "pages/confirmationpage" */))
const _a9292976 = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _039e7264 = () => interopDefault(import('../pages/inspire.vue' /* webpackChunkName: "pages/inspire" */))
const _bb4b21fe = () => interopDefault(import('../pages/stateselection.vue' /* webpackChunkName: "pages/stateselection" */))
const _163f40dc = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/BSNL_REDESIGN/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/Browseplans",
    component: _3225158a,
    name: "Browseplans"
  }, {
    path: "/confirmationpage",
    component: _a41cf9ac,
    name: "confirmationpage"
  }, {
    path: "/home",
    component: _a9292976,
    name: "home"
  }, {
    path: "/inspire",
    component: _039e7264,
    name: "inspire"
  }, {
    path: "/stateselection",
    component: _bb4b21fe,
    name: "stateselection"
  }, {
    path: "/",
    component: _163f40dc,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
