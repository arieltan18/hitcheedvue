import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules/app';
import auth from './modules/auth';
import messages from "./modules/messages";


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
      app,
      auth,
      messages,
  }
});
