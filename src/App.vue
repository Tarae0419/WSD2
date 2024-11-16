<template>
  <div id="app">
    <!-- 네비게이션 바 -->
    <header v-if="!isSignInPage">
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <!-- 라우터 뷰 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    // 현재 경로가 /signin인지 확인
    isSignInPage() {
      return this.$route.path === "/signin";
    },
  },
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
