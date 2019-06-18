import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _32ae09f2 = () => interopDefault(import('../pages/doc1.vue' /* webpackChunkName: "pages/doc1" */))
const _32bc2173 = () => interopDefault(import('../pages/doc2.vue' /* webpackChunkName: "pages/doc2" */))
const _0b484c9a = () => interopDefault(import('../pages/doc2_outline_anmok.vue' /* webpackChunkName: "pages/doc2_outline_anmok" */))
const _6a6922c7 = () => interopDefault(import('../pages/doc2_outline_meiji.vue' /* webpackChunkName: "pages/doc2_outline_meiji" */))
const _32ca38f4 = () => interopDefault(import('../pages/doc3.vue' /* webpackChunkName: "pages/doc3" */))
const _321c84a9 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/doc1",
      component: _32ae09f2,
      name: "doc1"
    }, {
      path: "/doc2",
      component: _32bc2173,
      name: "doc2"
    }, {
      path: "/doc2_outline_anmok",
      component: _0b484c9a,
      name: "doc2_outline_anmok"
    }, {
      path: "/doc2_outline_meiji",
      component: _6a6922c7,
      name: "doc2_outline_meiji"
    }, {
      path: "/doc3",
      component: _32ca38f4,
      name: "doc3"
    }, {
      path: "/",
      component: _321c84a9,
      name: "index"
    }],

    fallback: false
  })
}
