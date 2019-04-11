import dataProvider from '@/data-provider'
import { routerMap } from '@/routerConst'
import router from '@/router'

const state = {
  routers: []
}

const getters = {
  ROUTERS: (state, getters, rootState) => {
    return state.routers
  }
}

const mutations = {
  setRouters (state, payload) {
    payload = payload.map(item => {
      item.component = routerMap[item.name]
      return item
    })
    function listToTree (node, list) {
      var hasFlag = false
      /* eslint-disable */
      for (let i = 0, curNode; curNode = list[i], i < list.length; ++i) {
        /* eslint-enabled */
        if (curNode.parentId === node.id) {
          hasFlag = true
          node.children = node.children || []
          node.children.push(list[i])
          listToTree(list[i], list)
        }
      }
      if (!hasFlag) {
        return
      }
    }
    var rootNode = payload.find(item => item.parentId === null)
    listToTree(rootNode, payload)
    router.addRoutes([rootNode].concat([{
      path: '*',
      redirect: '/404',
      component: () => import('@/views/404/index.vue')
    }]))
    state.routers = rootNode
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
