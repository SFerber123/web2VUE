<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/one_way_binding">One Way Binding</router-link> |
    <router-link to="/two_way_binding">Two Way Binding</router-link> |
    <router-link to="/methods">Methods</router-link> |
    <router-link to="/computed">Computed property</router-link> |
    <router-link to="/scoped">Scoped Style</router-link> |
    <router-link to="/lifecycleHook&Axios">Lifecycle Hook & Axios</router-link> |
     <router-link to="/store">Store</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
