<template>
  <div id="app">
    <div class="register-photo">
      <div class="form-container" style="max-width: 517px; height: 325px">
        <form style="width: 912px">
          <h2 class="text-center">
            <strong>Sign Up</strong>
          </h2>
          <div class="form-group">
            <input
              v-model="name"
              class="form-control"
              type="text"
              name="password"
              placeholder="Full name"/>
          </div>
          <div class="form-group">
            <input
              v-model="email"
              class="form-control"
              type="email"
              name="email"
              placeholder="Email Adress"
            />
          </div>
          <div class="form-group">
            <input
              v-model="password"
              class="form-control"
              type="password"
              name="password-repeat"
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <button
              class="btn btn-primary btn-block"
              @click="submit"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <a class="already" href="#"
            >Already Resigstred?
            <router-link to="/login"><a>login</a></router-link></a
          >
          
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sign",
  data() {
    return {
      name: " ",
      email: " ",
      password: " ",
    };
  },
  methods: {
    submit() {
      alert(this.name + " " + this.email + " " + this.password);
    },
  },
  mounted () {
   console.log(this.$store.state.user.name);
},
};
</script>

<style scoped>
</style>

