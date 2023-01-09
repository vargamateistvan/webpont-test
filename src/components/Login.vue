<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">{{
        $t("email")
      }}</label>
      <input
        type="email"
        class="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        required
      />
    </div>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">{{
        $t("password")
      }}</label>
      <input
        type="password"
        class="form-control"
        id="exampleInputPassword1"
        required
      />
    </div>
    <button @click="submit" type="submit" class="btn btn-primary">
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: "Login-Component",
  methods: {
    submit() {
      const token = this.generateToken(12);
      this.storeToken(token);
      this.redirectToDashboard();
    },

    storeToken(token) {
      window.localStorage.setItem("Token", token);
    },
    redirectToDashboard() {
      window.location.pathname = "/dashboard";
    },
    generateToken(length) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = " ";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }

      return result;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
