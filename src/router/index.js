import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';

Vue.use(VueRouter)

// let routes = [
//     {
//         name: '根文件',
//         path: '/',
//         component: HelloWorld
//     },
//     {
//         name: '首页',
//         path: '/home',
//         component: Home
//     }
// ]


export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            redirect: '/index',
            children: [
                {
                    path: '/index',
                    name: 'index',
                    component: Home,
                }
            ]
        },
    ]
})

// export default {}