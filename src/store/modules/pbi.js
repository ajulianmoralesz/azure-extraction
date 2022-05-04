import workitemsService from "../../services/workitemsService";
import pbiHelper from "../helpers/pbiHelper";
const state = {
  pbis: null,
  pbiValues: null,
  pbiChart: null,
  sprintGoal: null,
};
const getters = {
    pbis: state => state.pbis,
    pbiValues: state => state.pbiValues,
    pbiChart: state => state.pbiChart,
    sprintGoal: state => state.sprintGoal
};
const mutations = {
  setPbis(state, data) {
    state.pbis = data;
  },
  setPbiValues(state, data) {
    state.pbiValues = data;
  },
  setPbiChart(state, data) {
    state.pbiChart = data;
  },
  setSprintGoal(state, data){
    state.sprintGoal = data;
  }
};
const actions = {
  async getPbisIteration(context, info) {
    let pbiResponse = await workitemsService.getPbiIteration(info.project,
        info.team, info.iteration);
    context.commit('setPbis', pbiResponse);
    context.commit('setPbiValues', pbiHelper.GetValues(pbiResponse));
    context.commit('setSprintGoal', await pbiHelper.getSprintGoalInfo(info, pbiResponse));
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}