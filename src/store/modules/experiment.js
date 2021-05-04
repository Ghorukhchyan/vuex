// ------------axios .post method-----------

import axios from "axios";
import * as mutationTypes from "../mutation-types";

export default {
  state: {
    val: [],
  },

  actions: {
    async getText({ commit }) {
      await axios
        .post("https://linksignal.ai/api/v1/serp", {
          query: "cbd oil",
          domain: "cbdfx.com",
        })
        .then((response) => {
          commit(mutationTypes.GET, response.data.items);
        });
    },
  },
  mutations: {
    [mutationTypes.GET](state, val) {
      state.val = val;
    },
  },
};
