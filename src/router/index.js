import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import DataAnalysisView from '../views/DataAnalysisView.vue'
import CodeWindowView from '../views/CodeWindowView.vue'
import CodeWindowConfigView from '../views/CodeWindowConfigView.vue'
import ReportingView from '../views/ReportingView.vue'
import AboutMeView from '../views/AboutMeView.vue'
import SoftwareView from '../views/SoftwareView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/data-analysis',
    name: 'data analysis',
    component: DataAnalysisView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/code-window',
    name: 'code window',
    component: CodeWindowView
  },
  {
    path: '/code-window-config',
    name: 'code window config',
    component: CodeWindowConfigView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/aboutme',
    name: 'aboutme',
    component: AboutMeView
  },
  { 
    path: '/reporting',
    name: 'reporting',
    component: ReportingView
  },
  { 
    path: '/software',
    name: 'software',
    component: SoftwareView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// const router = new VueRouter({
//   mode: 'history',
//   routes: [...]
// })

export default router
