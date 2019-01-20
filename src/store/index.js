import Vuex from 'vue';

// let store = new Vuex.Store({
//   state: {
//     role: 0
//   },
//   mutations: {
//     saveRole (state, role) {
//       state.role = role
//     }
//   },
//   actions: {
//     setRole ({commit}, item) {
//       commit('saveRole', item)
//     }
//   }
// })
// export default store

let store = new Vuex.Store({
    state: {
        role: 0,
        loading: false
    },
    getters: {
        getRole (state) {
            return state.role;
        }
    },
    mutations: {
        saveRole (state, role) {
            state.role = role;
        },
        saveLoading (state, loading) {
            state.loading = loading;
        }
    },
    actions: {
        setRole ({ commit }, item) {
            commit('saveRole', item);
        },
        setLoading ({ commit }, item) {
            commit('saveLoading', item);
        }
    }
});

export default store;
