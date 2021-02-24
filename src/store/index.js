import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import ActionType from "./actionType";
// import LocalStore from "@/utils/localstore.js"; //存储
import Config from "../plugins/config.js";
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        absTime: 0,
        acStatic: null, //菜单显示
    },
    mutations: {
        refreshSteem(state) {
            function serverTime() {
                return axios.get(Config.serverTime).then(data => data.data);
            }

            axios.all([
                serverTime(), //获取服务器时间

            ]).then(
                axios.spread((time) => {

                    state.absTime = time.data.serverTime - new Date().getTime();
                    // LocalStore.setLocalStore("absTime", state.absTime);
                    sessionStorage.setItem("absTime", state.absTime)

                })
            );
        },
        setAbs(state, data) {
            state.absTime = data;
            // LocalStore.setLocalStore("absTime", data, 360);
            sessionStorage.setItem("absTime", data, 360)
        },

        [ActionType.SteemInit](state) {
            let acStatic = null;
            // acStatic = LocalStore.getLocalStore('acStatic');
            acStatic = sessionStorage.getItem('acStatic');
            if (acStatic) {
                state.acStatic = acStatic;
            }
            let absTime = null;

            // absTime = LocalStore.getLocalStore("absTime");
            absTime = sessionStorage.getItem("absTime");

            if (absTime) {
                state.absTime = Number(absTime);
            }
        },

        [ActionType.ClearSessionStorage](state) {
            state.absTime = 0;
            // LocalStore.removeLocalStore("absTime");
            sessionStorage.removeItem("absTime");
            state.acStatic = "";
            // LocalStore.removeLocalStore("acStatic");
            sessionStorage.removeItem("acStatic");
        },

        [ActionType.acStatic](state, data) {
            state.acStatic = data;
            // LocalStore.setLocalStore("acStatic", data);
            sessionStorage.setItem("acStatic", data);
        },
    },
    actions: {
        refreshSteem({ commit }) {
            commit("refreshSteem");
        },
        setAbs({ commit }, payload) {
            commit("setAbs", payload);
        },
        [ActionType.acStatic]({
            commit
        }, payload) {
            commit(ActionType.acStatic, payload);
        },
    },
    modules: {}

})
export default store;