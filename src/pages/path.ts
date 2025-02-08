import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: readonly RouteRecordRaw[] = [
  { name: 'Home', path: '/', component: () => import('./Home.vue') },

  {
    path: '/about',
    component: () => import('./About.vue'),
    children: [{ path: '/user/:name', component: () => import('./About.vue') }],
  },

  { path: '/:pathMatch(.*)*', redirect: { name: 'Home' } },
]

const path = createRouter({ history: createWebHistory(), routes })

export default path
