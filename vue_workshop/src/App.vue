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
  </div>
</template>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
