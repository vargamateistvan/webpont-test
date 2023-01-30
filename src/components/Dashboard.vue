<template>
  <div>
    <div class="logout">
      <button @click="logout">{{ $t("logout") }}</button>
    </div>

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td colspan="2">Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Dashboard-Component",
  methods: {
    logout() {
      this.removeToken();
      this.redirectToLogin();
    },
    removeToken() {
      window.localStorage.removeItem("Token");
    },
    redirectToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logout {
  position: absolute;
  top: 10px;
  right: 10px;
}
</style>
