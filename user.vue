<template>
    <h2>Users Page</h2>
    <br>
    <add_user></add_user>
    <br>
    <span class="label label-default">Page Title</span>
    <input type="text" class="form-control" v-model="msg" name="name" value="{{ msg }}">
    <br>
    <show_user :users="users"></show_user>
    <br>
</template>

<script>
var AddUser = require('./addUser.vue');
var ShowUser = require('./showUser.vue');
export default {
    data: function () {
        return {
            users: [
                {name: 'Mohamed Zayed',email: 'moahmed@yahoo.com',gender: 'male',},
                {name: 'Mohamed Alaa',email: 'alaa@yahoo.com',gender: 'male',},
                {name: 'Mohamed Amr',email: 'Amr@yahoo.com',gender: 'male',},
                {name: 'Mohamed Ali',email: 'ali@yahoo.com',gender: 'male',},
            ],
        }
    },
    components: {
        add_user: AddUser,
        show_user: ShowUser,
    },
}
</script>
