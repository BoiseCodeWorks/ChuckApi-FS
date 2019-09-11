import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)

const api = Axios.create({
  baseURL: "https://api.chucknorris.io/jokes/random",
  timeout: 3000
})
export default new Vuex.Store({
  state: {
    joke: {},
    laughCount: 0
  },
  mutations: {
    setJoke(state, data) {
      state.joke = data
    }
  },
  actions: {
    async getJoke({ commit, dispatch }) {
      try {
        let res = await api.get('')
        commit("setJoke", res.data)

      } catch (error) {
        console.error(error)
      }
    }
  }
})
