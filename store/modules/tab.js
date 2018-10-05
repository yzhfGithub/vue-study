// states
const state = {
  tabIndex: 0
};

// getters
const getters = {};

// actions
const actions = {};

// mutations
const mutations = {
  changeActiveTab(state, payload) {
    state.tabIndex = payload.tabActive;
  }
};

// export
export default {
  state,
  getters,
  actions,
  mutations,
  namespaced: true
};
