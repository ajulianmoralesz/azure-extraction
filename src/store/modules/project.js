import projectService from "../../services/projectService";
const state = {
  projects: [],
};
const getters = {
  projects: state => state.projects,
};
const mutations = {
  setProjects(state, data) {
    state.projects = data
  },
};
const actions = {
  async getProjects(context) {
    context.commit('setProjects', await projectService.getProjects())
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}