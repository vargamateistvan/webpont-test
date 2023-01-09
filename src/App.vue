<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">{{ $t("language") }}: <LocaleSwitcher /></li>
        </ul>
      </div>
    </div>
  </nav>
  <div class="container">
    <Login v-if="currentPath === '/'" />
    <Dashboard v-if="currentPath === '/dashboard' && hasToken" />
  </div>
</template>

<script>
import Dashboard from "./components/Dashboard.vue";
import LocaleSwitcher from "./components/LocaleSwitcher.vue";
import Login from "./components/Login.vue";

const routes = {
  "/": Login,
  "/dashboard": Dashboard,
};

export default {
  name: "App",
  components: {
    LocaleSwitcher,
    Login,
  },
  computed: {
    currentView() {
      return routes[this.currentPath.slice(1) || "/"] || Login;
    },
    currentPath() {
      return window.location.pathname;
    },
    hasToken() {
      return !!window.localStorage.getItem("Token");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar-expand {
  justify-content: flex-end;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
