import * as mutationTypes from "../mutation-types";

export default {
  state: {
    list: [],
  },
  getters: {
    limitText: (state)=> state.list.length<5
  },
  actions: {
    async addText1({ commit }, text) {
      commit(mutationTypes.INPUT, text);
    },
    async dell({ commit }, index) {
      commit(mutationTypes.DELL_LINE, index);
    },
    async colour({ commit }, index) {
      commit(mutationTypes.COLOUR, index);
    },

    clear({commit}){
        commit(mutationTypes.CLEAR);
    }
  },
  mutations: {
    [mutationTypes.INPUT](state, param) {
      state.list.push({
        text: param,
        colour:false
      });
    },
    [mutationTypes.DELL_LINE](state,index){
        state.list=state.list.filter((x,y)=> y !=index);
    },
    [mutationTypes.COLOUR](state , index){
      state.list = state.list.map((el, i) => {
        if (i === index) {
            return {
                ...el,
                colour: !el.colour,
            };
        }
        return el;
    });
    },

    [mutationTypes.CLEAR](state){
        state.list=[];
    }
  },
};


