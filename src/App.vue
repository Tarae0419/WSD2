<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/signin">Sign In</router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
nav {
  display: flex;
  gap: 10px;
  padding: 10px;
  background-color: #f4f4f4;
}
nav a {
  text-decoration: none;
  color: #42b983;
}
nav a.router-link-active {
  font-weight: bold;
}
</style>
