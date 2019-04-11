// write your comment here...
export default [
  {
    path: '/test',
    name: '',
    redirect: '/test',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/test/index')
    }]
  }
]
