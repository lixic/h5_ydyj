import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import index from '../views/index.vue'
import notes from '../views/notes.vue'
import my from '../views/my.vue'
import after from '../views/after.vue'
import article from '../views/article.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/notes',
      name: 'notes',
      component: notes
    },
    {
      path: '/my',
      name: 'my',
      component: my
    },
    {
      path: '/after',
      name: 'after',
      component: after
    },
    {
      path: '/article',
      name: 'article',
      component: article
    }
  ]
})
