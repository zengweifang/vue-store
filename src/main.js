// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import store from './store/index';
import Vuex from 'vuex';

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.config.productionTip = false;

Vue.prototype.$loading = {
    start: function (e) {
        e.$store.dispatch('setLoading', true);
    },
    hiding: function (e) {
        e.$store.dispatch('setLoading', false);
    }
};

// const store = new Vuex.Store({
//   state: {
//     role: 0,
//     loading: false
//   },
//   getters: {
//     getRole (state) {
//       return state.role
//     }
//   },
//   mutations: {
//     saveRole (state, role) {
//       state.role = role
//     },
//     saveLoading (state, loading) {
//       state.loading = loading
//     }
//   },
//   actions: {
//     setRole ({commit}, item) {
//       commit('saveRole', item)
//     },
//     setLoading ({commit}, item) {
//       commit('saveLoading', item)
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
