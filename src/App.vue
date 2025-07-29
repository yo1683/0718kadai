<template>
  <div id="app">
    <h1>🦊</h1>
    <nav>
      <router-link to="/">ホーム</router-link> |
      <router-link to="/favorite">お気に入り</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(219, 165, 64, 0.199);
}

nav {
  padding: 10px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
h1{
  padding-top: 15px;
}
</style>
