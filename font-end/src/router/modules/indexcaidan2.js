// write your comment here...
export default [
  {
    path: '/indexcaidan2',
    name: '',
    redirect: '/indexcaidan2',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/indexcaidan2/index')
    }]
  }
]
