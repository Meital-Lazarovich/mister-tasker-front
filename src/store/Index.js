import Vue from 'vue'
import Vuex from 'vuex'
import taskStore from './TaskStore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    taskStore,
  }
});
