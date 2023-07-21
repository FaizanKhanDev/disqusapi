import Vue from "vue"
import Vuex from "vuex"
import authModule from "./auth"
Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        'auth': authModule

    },
    state: {},
    actions: {

    },
    mutations: {},
    getters: {

    },

})


export const strict = false;
export default store;
