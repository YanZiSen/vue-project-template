// write your comment here...
export default [
  {
    path: '/userother',
    name: '',
    redirect: '/userother',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/userother/index')
    }]
  }
]
