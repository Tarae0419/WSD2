<template>
  <div id="app">
    <!-- 네비게이션 바 -->
    <header v-if="!isSignInPage">
      <nav>
        <router-link to="/">Home</router-link>
        <button class="icon-button" @click="goToSignIn">
          <i class="icon-user"></i>
        </button>
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
  methods: {
    goToSignIn() {
      this.$router.push("/signin"); // SignIn 페이지로 이동
    },
  },
};
</script>

<style>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.icon-button {
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
}

.icon-user {
  content: url("https://cdn-icons-png.flaticon.com/512/847/847969.png");
  width: 32px;
  height: 32px;
}
</style>
