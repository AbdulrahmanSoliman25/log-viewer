import Vue from "vue";
import Vuex from "vuex";
import service from "../service/service";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLogged: false,
    startLine: 1,
    path: "",
    content: "",
  },
  mutations: {
    isLogged(state, payload) {
      state.isLogged = payload;
    },
    setPath(state, payload) {
      state.path = payload;
    },
    setContent(state, payload) {
      state.content = payload;
    },
    setStartLine(state, payload) {
      state.startLine = payload;
    },
  },
  actions: {
    isLoggedAction({ commit }, payload) {
      commit("isLogged", payload);
    },
    async viewRequest({ commit, state }) {
      //TODO: startLodder
      try {
        const response = await service.getContent({
          path: state.path,
          start: state.startLine,
        });
        debugger;
        if (response.status == 200) {
          commit("setStartLine", response.data.start);
          commit("setContent", response.data.content);
        } else {
          // TODO: alert errors
          console.log("message", response.message);
          console.log("errors", response.errors);
        }
      } catch (err) {
        console.log(err);
      } finally {
        //TODO:  EndLodder
      }
    },
  },
  getters: {
    getContent(state) {
      return state.content;
    },
  },
});
