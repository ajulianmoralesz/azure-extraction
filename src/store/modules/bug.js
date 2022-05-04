import workitemsService from "../../services/workitemsService";
import bugHelper from "../helpers/bugHelper";
const state = {
  bugs: null,
  bugsValues: null,
  bugsChart: null,
};
const getters = {
  bugs: state => state.bugs,
  bugsValues: state => state.bugsValues,
  bugsChart: state => state.bugsChart,
};
const mutations = {
  setBugs(state, data) {
    state.bugs = data;
  },
  setBugsValues(state, data) {
    state.bugsValues = data;
  },
  setBugsChart(state, data) {
    state.bugsChart = data;
  },
};
const actions = {
  async getBugs(context, info) {
    let bugsResponse = await workitemsService.getBugs(info.project, info.team);
    context.commit('setBugs', bugsResponse);
    context.commit('setBugsChart', bugHelper.GetChartValues(bugsResponse, context.getters.iterations));
  },
  async getBugsIteration(context, info) {
    let bugsResponse = await workitemsService.getBugsIteration(info.project,
      info.team, info.iteration);
    context.commit('setBugs', bugsResponse);
    context.commit('setBugsValues', bugHelper.GetValues(bugsResponse));
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}