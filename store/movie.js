const state = () => ({
  listPopular: [],
})

const mutations = {
  setListPopular(state, param) {
    state.listPopular = param
  },
}

const actions = {
  fetchPopular(store) {
    // Fetch Logic
    this.$axios
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=2a09c6f0b2f7e87651387bf7b1da4ea9&language=en-US'
      )
      .then((res) => {
        // console.log(res.results)
        // store.commit('setList', res)
        // store.commit('setList', res.data.movies)
        store.commit('setListPopular', res.data.results)
      })
      .catch((err) => console.log('erorr', err))
  },
}

export default {
  state,
  mutations,
  actions,
}
