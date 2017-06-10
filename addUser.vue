<template>
    <form method="post" action="#">
        <div class="row">
            <div class="col-md-3">
                <input type="text" class="form-control" v-model="name" placeholder="Name">
            </div>
            <div class="col-md-3">
                <input type="text" class="form-control" v-model="email" placeholder="Email">
            </div>
            <div class="col-md-3">
                <select class="form-control" v-model="gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
            </div>
            <div class="col-md-3">
                <button @click="AddUser" v-bind:disabled="dis" type="submit" class="btn btn-primary btn-block">Add User</button>
            </div>
        </div>
    </form>
</template>

<script>

// function to validate email
function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}


export default {
    data() {
        return {
            name: '',
            email: '',
            gender: 'male',
            dis: true,
        }
    },
    methods: {
        AddUser: function (e) {
            e.preventDefault();
            this.$parent.users.push({
                name: this.name,
                email: this.email,
                gender: this.gender,
                time: new Date().getTime(),
            });

            this.name = '';
            this.email = '';
        },
    },
    computed: {
        dis: function () {
            if (this.name == '' || this.email == '') {
                return true;
            }else if (this.name.length < 4 || validateEmail(this.email) == false) {
                return true;
            }else {
                return false;
            }
        }
    },
}
</script>
