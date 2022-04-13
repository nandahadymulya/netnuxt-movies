<template>
  <v-app>
    <div>
      <v-app-bar dark dense>
        <v-toolbar-title class="font-weight-bold text-uppercase"
          >NetNuxt Movie</v-toolbar-title
        >
        <v-spacer></v-spacer>
        <div class="d-flex">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </div>
      </v-app-bar>
    </div>

    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
export default {
  name: 'DefaultLayout',
  data() {
    return {
      drawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Popular',
          to: '/',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Movies',
          to: '/movie',
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'TV Show',
          to: '/tvshow',
        },
      ],
    }
  },
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>
