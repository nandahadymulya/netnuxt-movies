<template>
  <v-row>
    <v-col class="text-center">
      <h1>Movies</h1>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: 'MoviePage',
  computed: {
    movieList() {
      return this.$store.state.movie.list
    },
  },
  methods: {
    fetchMovieList() {
      this.$store.dispatch('movie/fetchMovie')
    },
  },
  mounted() {
    this.fetchMovieList()
  },
}
</script>
