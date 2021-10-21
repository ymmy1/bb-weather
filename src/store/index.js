import { createStore } from 'vuex';

export default createStore({
  state: {
    allWeather: [],
  },

  mutations: {
    //syncrous
    setCurrentWeather(state, payload) {
      console.log('mutation started');
      state.allWeather.push(payload);
    },
  },
  actions: {
    setCurrentWeather(state, payload) {
      console.log('action started');
      console.log(payload);
      state.commit('setCurrentWeather', payload);
    },
  },
  modules: {},
  getters: {
    getAllWeather: (state) => state.allWeather,
  },
});
