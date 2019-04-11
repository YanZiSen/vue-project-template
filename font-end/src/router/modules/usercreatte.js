// write your comment here...
export default [
  {
    path: '/usercreate',
    name: '',
    redirect: '/usercreate',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/usercreate/index')
    }]
  }
]
