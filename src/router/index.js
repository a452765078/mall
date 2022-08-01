import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../pages/home.vue';
import Login from '../pages/login.vue';
import Product from '../pages/product.vue';
import Detail from '../pages/detail.vue';
import Cart from '../pages/cart.vue';
import Order from '../pages/order.vue';
import OrderConfirm from '../pages/orderConfirm.vue';
import Test from '../pages/test.vue';
import OrderDetail from '../pages/orderDetail.vue';
import OrderList from '../pages/orderList.vue';
import Alipay from '../pages/alipay.vue';

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
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product
        },
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        }, {
            path: '/cart',
            name: 'cart',
            component: Cart
        }, {
            path: '/order',
            name: 'order',
            component: Order,
            children: [
                {
                    path: 'confirm',
                    name: 'confirm',
                    component: OrderConfirm
                },
                {
                    path: 'detail',
                    name: 'detail',
                    component: OrderDetail
                },
                {
                    path: 'alipay',
                    name: 'alipay',
                    component: Alipay
                }, {
                    path: 'list',
                    name: 'list',
                    component: OrderList
                }
            ]
        }, {
            path: '/test',
            name: 'test',
            component: Test
        }
    ]
})

// export default {}