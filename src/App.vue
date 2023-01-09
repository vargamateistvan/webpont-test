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
    <router-view></router-view>
  </div>
</template>

<script>
import LocaleSwitcher from "./components/LocaleSwitcher.vue";

export default {
  name: "App",
  components: {
    LocaleSwitcher,
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
