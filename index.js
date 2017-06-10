var Vue = require('vue');

Vue.use(require('vue-moment'));

var VueRouter = require('vue-router');

Vue.use(VueRouter);

var VueResource = require('vue-resource');

Vue.use(VueResource);


var App = Vue.extend({});


var router = new VueRouter();


router.map({
    '/': {
        component: require('./home.vue')
    },
    '/users': {
        component: require('./user.vue')
    },
    '/login': {
        component: require('./login.vue')
    },
});

router.start(App, 'body')
