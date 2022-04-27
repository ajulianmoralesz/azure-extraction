import teamService from "../../services/teamService";
const state = {
  teams: [],
};
const getters = {
  teams: state => state.teams
};
const mutations = {
  setTeams(state, data){
    state.teams = data
  }
};
const actions = {
  async getTeams(context, projectId){
    context.commit('setTeams', await teamService.getTeams(projectId))
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}