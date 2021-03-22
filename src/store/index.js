import Vue from "vue";
import Vuex from "vuex";
import post from './modules/post'
import experiment from './modules/experiment'
import inputAddDelete from './modules/inputAddDelete'
import VuexAdd from './modules/VuexAdd'


Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post ,
    experiment,
    inputAddDelete,
    VuexAdd
  }
});



