import api from '../../api/imgur';
// import { router } from '../../main';
import qs from 'qs';

const state = {
    token: localStorage.getItem('imgur_token')
}

const getters = {

    isLoggedIn: state => !!state.token
}

const actions = {

    logout: ({ commit }) => {
        commit('setToken', null);
        localStorage.removeItem('imgur_token');
    },
    login: () => api.login(),
    finalizeLogin: ({ commit }, hash) => {
        hash = hash.replace('#', '');
        hash = qs.parse(hash);
        commit('setToken', hash.access_token);
        localStorage.setItem('imgur_token', hash.access_token);
        // router.push('/');
    }

}

const mutations = {

    setToken: (state, token) => state.token = token

}

export default {
    state,
    getters,
    actions,
    mutations
}