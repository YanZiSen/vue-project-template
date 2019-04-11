// write your comment here...
export default [
  {
    path: '/indexcaidan3',
    name: '',
    redirect: '/indexcaidan3',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/indexcaidan3/index')
    }]
  }
]
