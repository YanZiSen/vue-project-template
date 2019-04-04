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
    state.routers = payload
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations
}
