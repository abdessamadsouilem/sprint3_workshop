<template>
   <div >
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Youcode Youssoufia </a>
    
      <form class="d-flex">
        <router-link class="btn text-primary" to="/Login">Sign in</router-link>
        <router-link class="btn btn-outline-primary" to="/">Sign up</router-link>
      </form>
  
  </div>
</nav>
    <router-view/>
  </div>
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

<<<<<<< HEAD
/* .btn-outline-success:hover {
    background-color: #0d6efd;  
} */

=======
>>>>>>> 935883af1e01fca66abec8261d7e76b978700b5e
</style>
