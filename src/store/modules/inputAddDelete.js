import * as mutationTypes from '../mutation-types';

export default {
    state: {
        list: [],
    },
    getters: {
        showCreateTexts: (state) => state.list.length < 5,
    },
    actions: {
        async addText({ commit }, text) {
            // eslint-disable-next-line
            // debugger;
            commit(mutationTypes.INPUT_ADD, text);
        },
        
        async dellText({ commit }, index) {
            commit(mutationTypes.DELL_TEXT, index)
            
        },
        async changeTextStatus({ commit }, index) {
            commit(mutationTypes.CHANGE_TEXT_STATUS, index);
        },
        async edit({ commit }, index) {
            commit(mutationTypes.EDIT_TEXT, index);
        },
       
        clearList({ commit }) {
            commit(mutationTypes.CLEAR_LIST);
        },
    },
    mutations: {
        [mutationTypes.INPUT_ADD](state, param) {
            // eslint-disable-next-line
            // debugger;
            state.list.push({
                text: param,
                isActive: false,
                isEditing: false,
            });
           
        },
        [mutationTypes.DELL_TEXT](state, index) {
            // eslint-disable-next-line
            // debugger;
            state.list = state.list.filter((el, i) => i != index);
        },
        [mutationTypes.CHANGE_TEXT_STATUS](state, index) {
            state.list = state.list.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                        isActive: !el.isActive,
                    };
                }
                return el;
            });
        },
       
        [mutationTypes.CLEAR_LIST](state) {
            state.list = [];
        },


        [mutationTypes.EDIT_TEXT](state, index) {
            state.list = state.list.map((el, i) => {
                if (i === index) {
                    return {
                        ...el,
                        isEditing: !el.isEditing,
                    };
                }
                return el;
            });
        },


    },
}

