<template>
  <div class="favorite">
    <h1>お気に入りのキツネ</h1>
    <p>{{ favoriteCount }}匹</p>
    <FavoriteList :favoriteImage="favoriteImage" />
  </div>
</template>

<script>
import FavoriteList from "@/components/FavoriteList.vue";

export default {
  name: "FavoriteView",
  components: {
    FavoriteList,
  },
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