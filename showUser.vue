<template>
    <table class="table table-hover table-bordered">
        <thead>
            <tr>
                <th>no.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Gender</th>
                <th>Time</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            <tr  v-for="user in users">
                <td>{{ $index+1 }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>
                    <span v-if="user.gender == 'male'"><i class="fa fa-male"></i> Male</span>
                    <span v-else><i class="fa fa-female"></i> Female</span>
                </td>
                <td>{{ user.time | moment "from" "now" }}</td>
                <td><a @click="removeUser($index)" class="btn btn-danger">X</a></td>
            </tr>
        </tbody>
    </table>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    props: ['users'],
    methods: {
        removeUser: function (index) {
            this.$parent.users.splice(index, 1);
        },
    }
}
</script>
