// write your comment here...
export default [
  {
    path: '/usersee',
    name: '',
    redirect: '/usersee',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/usersee/index')
    }]
  }
]
