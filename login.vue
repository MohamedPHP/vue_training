<template>
    <h2>Login Page</h2>
    <div class="col-md-6 col-md-offset-3 text-center" style="margin-top: 100px;">
        <form action="#">
            <input type="text" class="form-control" placeholder="Full Name" v-model="username">
            <br>
            <input type="password" class="form-control" placeholder="Password" v-model="password">
            <br>
            <input type="submit" @click="sendData" class="btn btn-primary btn-block" value="Submit">
        </form>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            username: '',
            password: '',
        }
    },
    methods: {
        sendData: function (e) {
            e.preventDefault();
            this.$http.post('/postlogin', {username:this.username, password: this.password}).then(function (result) {
                // success
            }, function (result) {
                // Error
            });
        },
    },
}
</script>
