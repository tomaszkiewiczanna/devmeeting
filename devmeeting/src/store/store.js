import Vue from 'vue';
import Vuex from 'vuex';
import User from './modules/User.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    User,
  }
})