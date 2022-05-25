import Vue from 'vue';
// import { axios } from 'vue/types/umd';
import Vuex from 'vuex';

// import usuarioModule from '../../Modules/UsuarioModule'

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    user: null,
    logged: false,
  },
  mutations: {
    SET_USER(state, user){
      state.user = user
      state.logged = true
    },
    GET_LOGGED(state){
      return state.logged
    }
  },
  actions: {
    async login({dispatch}, credencials){
      alert(1)
      // await axios.post('http://localhost:9000/api/login/')
    },
    async logout({dispatch}, credencials){

    },
    getLogged({commit}){
      return commit('GET_LOGGED')
    }
  },
  modules: { }
});

// export { default as store } from '.';