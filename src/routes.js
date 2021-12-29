import NotFound from './views/NotFound.vue'

export const routes = [
  {
    path: '/admin',
    meta: { title: 'About' },
    component: () => import('@/views/Page/Admin/Dashboard.vue'),
  },
  { path: '/:path(.*)', component: NotFound },
]
