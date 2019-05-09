import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from './components/HelloWorld/HelloWorld.vue';
import Home from './components/Home/Home.vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/foo', component: HelloWorld },
    ],
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
