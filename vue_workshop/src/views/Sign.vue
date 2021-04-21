<template>
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
    </div>
</div>
  
</template>

<script>

// @ is an alias to /src


export default {
  name: "Sign",
}
</script>

<style scoped>

</style>

