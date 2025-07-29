<template>
  <v-container>
    <v-row justify="center">
      <v-col>
        <div class="btn">
        <v-btn @click="fetchData"> キツネを探す </v-btn>
        <v-btn  @click="addToFavorites"> お気に入り </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <img :src="image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    image() {
      return this.$store.state.data;
    },
    favoriteImage() {
      return this.$store.state.getters.favoriteImage;
    },
  },

  methods: {
    fetchData() {
      this.$store.dispatch("fetchData");
    },
    addToFavorites() {
      this.$store.commit("addToFavorites");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
a {
  color: #42b983;
}
img {
  max-width: 700px;
  max-height: 400px;
  display: inline-block;
}
</style>
