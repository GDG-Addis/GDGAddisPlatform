import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '*',
      name: 'home',
      component: Home
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
    {
      path: '/events',
      name: 'events',
      component: () => import('./views/Events.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('./views/Contact.vue')
    },
    {
      path: '/news',
      name: 'News',
      component: () => import('./views/News.vue')
    },
    {
      path: '/wtmaddis',
      name: 'WTMAddis',
      component: () => import('./views/WTMAddis.vue')
    },
    {
      path: '/jobsInternship',
      name: 'Jobs/Internship',
      component: () => import('./views/JobsIntern.vue')
    },
    {
      path: '/forum',
      name: 'Addis Forum',
      component: () => import('./views/AddisForum.vue')
    },
    {
      path: '/successstories',
      name: 'Success Stories',
      component: () => import('./views/SuccessStories.vue')
    }
    
  ]
})
