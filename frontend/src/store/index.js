import Vue from 'vue'
import Vuex from 'vuex'
//import axios from "axios";

Vue.use(Vuex)

//const resourceHost = 'http://localhost:8080/';

export default new Vuex.Store({
    state: {
        accessToken: null,
        nickName: '',
        password: '',
        email: '',
    },
    getters: {

    },
    mutations: {
        LOGIN (state, accessToken) {
            state.accessToken = accessToken;
            
            // 토큰을 로컬 스토리지에 저장
            localStorage.accessToken = accessToken;
        },
        LOGOUT (state) {
            state.accessToken = null;

            delete localStorage.accessToken;
        },
    },
    actions: {
        LOGIN ({commit}, {email, password}) {
            commit('LOGIN', email);
            console.log(password)
            // return axios.get(`${resourceHost}/account/login`, {params:{email, password}})
            // .then(({data}) => commit('LOGIN', data))
        },
        LOGOUT({commit}) {
            commit('LOGOUT')
        },
    },
    modules: {
        
    }
})