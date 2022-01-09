import { createStore } from "vuex";
export default createStore({
  state: {
    text:"Store tekst"
  },
  mutations: {
    setText(state,text){
      state.text=text;
    }
  },
  actions: {
  },
  modules: {},
});
