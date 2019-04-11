export const routerMap = {
  'main': () => import('./views/main/index.vue'),
  'index': () => import('./views/index/index.vue'),
  'indexcaidan1': () => import('./views/indexcaidan1/index.vue'),
  'indexcaidan2': () => import('./views/indexcaidan2/index.vue'),
  'indexcaidan3': () => import('./views/indexcaidan3/index.vue'),
  'user': () => import('./views/user/index.vue'),
  'usersee': () => import('./views/usersee/index.vue'),
  // 'usercreate': () => import('./views/usercreate/index.vue'),
  'useredit': () => import('./views/useredit/index.vue'),
  'userdelete': () => import('./views/userdelete/index.vue'),
  'userother': () => import('./views/userother/index.vue')
}
