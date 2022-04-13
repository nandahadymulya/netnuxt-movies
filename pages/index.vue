<template>
  <div>
    <v-row>
      <v-col class="text-center">
        <h1>Popular Movies</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="(popular, index) in popularList" :key="index" col="3">
        <v-card max-width="374">
          <v-img
            height="250"
            :src="`https://image.tmdb.org/t/p/w500${popular.poster_path}`"
          ></v-img>

          <v-card-title>{{ popular.title }}</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0">
              <v-rating
                :value="4.5"
                color="amber"
                dense
                half-increments
                readonly
                size="14"
              ></v-rating>

              <div class="grey--text ms-4">4.5 (413)</div>
            </v-row>

            <div class="my-4 text-subtitle-1">$ • Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-text>
            <v-chip-group
              v-model="selection"
              active-class="deep-purple accent-4 white--text"
              column
            >
              <v-chip>5:30PM</v-chip>

              <v-chip>7:30PM</v-chip>

              <v-chip>8:00PM</v-chip>

              <v-chip>9:00PM</v-chip>
            </v-chip-group>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  computed: {
    popularList() {
      return this.$store.state.movie.listPopular
    },
  },
  methods: {
    fetchPopularList() {
      this.$store.dispatch('movie/fetchPopular')
    },
  },
  mounted() {
    this.fetchPopularList()
  },
}
</script>
