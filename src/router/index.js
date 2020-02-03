import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/doc/index'
import makedownplugin from '@/plugin/makedown'

Vue.use(Router)
Vue.use(makedownplugin)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'document',
      component: Index
    }
  ]
})
