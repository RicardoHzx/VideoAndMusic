import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import equipment from './equipment'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    equipment
  }
})
