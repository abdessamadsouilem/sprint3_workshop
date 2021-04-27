<template>
<<<<<<< HEAD
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
              placeholder="Full name"
            />
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
              placeholder="password"
            />
          </div>
          <div class="form-group">
            <button
              v-on:click="someAction($event)"
              class="btn btn-primary btn-block"
              @click="submit"
              type="submit"
            >
              Sign Up
            </button>
          </div>
          <a class="already" href="#"
            >Already Resigstred?
            <router-link to="/login"><a>login</a></router-link></a>
        </form>
      </div>
=======
 <div id="app">
 <div class="register-photo">
        <div class="form-container" style="max-width: 517px;height: 325px;">
            <form method="post" style="width: 912px;">
                <h2 class="text-center"><strong>Sign Up</strong></h2>
                <div class="form-group"><input class="form-control" type="password" name="password" placeholder="Full name"></div>
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email Adress"></div>
                <div class="form-group"><input class="form-control" type="password" name="password-repeat" placeholder="Password"></div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Sign Up</button></div><a class="already" href="#">Already Resigstred?  <router-link  to="/login"><a>login</a></router-link></a></form>
        </div>
>>>>>>> 935883af1e01fca66abec8261d7e76b978700b5e
    </div>
</div>
  
</template>

<script>

// @ is an alias to /src


export default {
  name: "Sign",
<<<<<<< HEAD
  computed: {
    name: {
      get(){
        return this.$store.state.name;
      },
      set(value){
        this.$store.commit('updatename',value);
      },
    },
    email: {
      get(){
        return this.$store.state.email;
      },
      set(value){
        this.$store.commit('updateemail',value);
      },
    },
    password: {
      get(){
        return this.$store.state.password;
      },
      set(value){
        this.$store.commit('updatepassword',value);
      },
    },
  },

  
  methods: {
    submit() {
      console.log(this.$store.state.name);
    },
    someAction (e) {
   e.preventDefault()
   
 },

    
  },
  
};
=======
}
>>>>>>> 935883af1e01fca66abec8261d7e76b978700b5e
</script>

<style scoped>

</style>

