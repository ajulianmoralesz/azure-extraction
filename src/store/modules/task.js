import workitemsService from "../../services/workitemsService";
import taskHelper from "../helpers/taskHelper";
const state = {
  tasks: null,
  tasksValues: null,
  taskChart: null,
};
const getters = {
  tasks: state => state.tasks,
  tasksValues: state => state.tasksValues,
  taskChart: state => state.taskChart,
};
const mutations = {
  setTasks(state, data) {
    state.tasks = data;
  },
  setTasksValues(state, data) {
    state.tasksValues = data;
  },
  setTaskChart(state, data) {
    state.taskChart = data;
  }
};
const actions = {

  async getTasks(context, info) {
    let TaskResponse = await workitemsService.getTasks(info.project, info.team)
    context.commit('setTasks', TaskResponse);
    context.commit('setTaskChart', taskHelper.getChartValues(TaskResponse, context.getters.iterations));
  },

  async getTasksIteration(context, info) {
    let TaskResponse = await workitemsService.getTasksIteration(info.project,
      info.team, info.iteration)
    context.commit('setTasks', TaskResponse);
    context.commit('setTaskChart', taskHelper.getChartIterationValues(TaskResponse));
    context.commit('setTasksValues', taskHelper.GetValues(TaskResponse));

  }
}

export default {
  state,
  getters,
  mutations,
  actions
}