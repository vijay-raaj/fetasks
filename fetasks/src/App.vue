<template>
  <div>
  <nav>
    <router-link to="/">Get</router-link> |
    <router-link to="/getid">GetById</router-link> |
    <router-link to="/post">Post</router-link> |
    <router-link to="/delete">Delete</router-link> |
    <router-link to="/filter">Filter</router-link> |
    <router-link to="/map">Map</router-link> |
    <router-link to="/signup">SignUp</router-link> 
  </nav>
  <router-view/></div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
