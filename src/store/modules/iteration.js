import iterationService from "../../services/iterationService";
const state = {
  iterations: [],
};
const getters = {
    iterations: state => state.iterations,
};
const mutations = {
  setIterations(state, data) {
    state.iterations = data
  },
};
const actions = {
  async getIterations(context, info) {
    context.commit('setIterations', await iterationService.getTeamIterations(info.project, info.team))
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}