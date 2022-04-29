import workitemsService from "../../services/workitemsService";
const state = {
  pbis: null,
};
const getters = {
    pbis: state => state.pbis,
};
const mutations = {
  setPbis(state, data) {
    state.pbis = data;
  },
};
const actions = {
  async getPbisIteration(context, info) {
    let pbiResponse = await workitemsService.getPbiIteration(info.project,
        info.team, info.iteration);
    context.commit('setPbis', pbiResponse);
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}