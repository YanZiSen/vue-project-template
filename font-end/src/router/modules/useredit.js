// write your comment here...
export default [
  {
    path: '/useredit',
    name: '',
    redirect: '/useredit',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/useredit/index')
    }]
  }
]
