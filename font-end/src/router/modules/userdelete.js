// write your comment here...
export default [
  {
    path: '/userdelete',
    name: '',
    redirect: '/userdelete',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/userdelete/index')
    }]
  }
]
