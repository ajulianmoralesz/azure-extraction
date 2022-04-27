import Vue from 'vue'
import Vuex from "vuex";
import state from "./state.js"
import getters from "./getters.js"
import mutations from "./mutations.js"
import actions from "./actions.js"
import project from "./modules/project"
import team from "./modules/team"
import iteration from "./modules/iteration"
import bug from './modules/bug.js'
import task from './modules/task'

Vue.use(Vuex);
export const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    project: project,
    team: team,
    iteration: iteration,
    bug : bug,
    task : task
  }
})