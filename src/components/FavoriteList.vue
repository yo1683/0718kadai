<template>
  <div class="favorite">
    <div v-for="(img, i) in favoriteImage" :key="i">
      <img :src="img" />
    </div>
  </div>
</template>


<script>
export default {
  computed: {
    favoriteImage() {
      return this.$store.state.favoriteImage;
    },
    favoriteCount() {
      return this.$store.getters.favoriteCount;
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
  padding: 3px 3px;
  float: left;
  width: 300px; height: 200px;
  object-fit: cover; max-width: 100%;
}
</style>
