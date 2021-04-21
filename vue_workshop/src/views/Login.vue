<template>
 <div id="app">
 <div class="register-photo">
        <div class="form-container" style="max-width: 517px;height: 325px;">
            <form method="post" style="width: 912px;">
                <h2 class="text-center"><strong>Login</strong></h2>
                <div class="form-group"><input class="form-control" type="email" name="email" placeholder="Email Adress"></div>
                <div class="form-group"><input class="form-control" type="password" name="password-repeat" placeholder="Password"></div>
                <div class="form-group"><button class="btn btn-primary btn-block" type="submit">Login</button></div><a class="already" href="#"><router-link  to="/forgot"><a>Forgot Password?</a></router-link></a>
                <div class="social-btn text-center">
               
			<button type="button" class="btn btn-custom btn-lg"><i class="fa fa-facebook"></i></button>
            <button type="button" class="btn btn-custom btn-lg"><i class="fa fa-twitter"></i></button>
            <button type="button" class="btn btn-custom btn-lg"><i class="fa fa-google"></i></button>
			
		</div>
                </form>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>