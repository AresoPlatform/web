"use strict";
// import { message } from 'ant-design-vue';
import Vue from "vue";
import axios from "axios";
// import LocalStore from "../utils/localstore.js"; //存储
import { digitize } from "../utils/auth";

axios.defaults.timeout = 5000;
axios.interceptors.request.use(
    function(config) {
        // console.log(config)
        // let sign = Number(LocalStore.getLocalStore("absTime")) + new Date().getTime();
        // let signs = digitize(sign);
        // let token = LocalStore.getLocalStore("token");
        // console.log(token)
        // config.headers.common['sign'] = signs;
        // config.headers.common['loginToken'] = token;
        // console.log(config)
        return config;
    },
    function(error) {
        return Promise.reject(error);
    }
);


// Add a response interceptor
axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        // console.log(error)
        if (error.message.includes('timeout')) { // 判断请求异常信息中是否含有超时timeout字符串
            message.error('网络超时');
            return Promise.reject(error); // reject这个错误信息
        }
        return Promise.reject(error);
    }
);
let Plugin = {};
Plugin.install = function(Vue) {
    Vue.axios = axios;
    window.axios = axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return axios;
            }
        },
        $axios: {
            get() {
                return axios;
            }
        }
    });
};

Vue.use(Plugin);

export default { Plugin };