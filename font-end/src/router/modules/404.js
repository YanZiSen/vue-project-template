// write your comment here...
export default [
  {
    path: '/404',
    name: '',
    redirect: '/404',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/404/index')
    }]
  }
]
