// write your comment here...
export default [
  {
    path: '/indexcaidan1',
    name: '',
    redirect: '/indexcaidan1',
    component: () => import('@/views/frame/Frame'),
    children: [{
      path: '',
      fullPath: '',
      name: '',
      component: () => import('@/views/indexcaidan1/index')
    }]
  }
]
