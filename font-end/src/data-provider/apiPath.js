const projectPre = '/api'
const APIS = {
  CREATE_USER: '/user/create',
  GET_INFO: '/user/query',
  SET_INFO: '/user/update'
}
export const APIALL = new Proxy(APIS, {
  get (target, key) {
    if (key  in target) {
      return projectPre + target[key]
    } else {
      return undefined
    }
  }
})
