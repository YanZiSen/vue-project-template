// write your comment here...
export default [
  {
    path: '/user',
    name: '',
    redirect: '/user',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/user/index')
    }]
  }
]
