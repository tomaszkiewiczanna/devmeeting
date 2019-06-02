const userRepository = RepositoryFactory.get('User');

const initialState = () => ({
  userId: null,
})

const state= initialState;

const getters = {
  User: store => store.User,
}

const mutations = {
  SET_SETTINGS(store, newUser) {
    store.User = newUser;
  }  
}

const actions = {
  async getSettings(context) {
    const res = await settingsRepository.get();

    context.commit('SET_SETTINGS', res);

    return res;
  },
  async updateSettings(context, payload) {
    const res = await settingsRepository.update(payload);

    context.commit('SET_SETTINGS', res);

    return res;
  },
};

export default {
  namespaced: true,
  getters,
  actions,
  mutations,
  state,
};

