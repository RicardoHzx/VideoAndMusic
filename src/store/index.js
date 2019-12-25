import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import equipment from './equipment'
import music from './music'
import Control from './Control'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    home,
    equipment,
    music,
    Control
  }
})
