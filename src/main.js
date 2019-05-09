import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './components/Home/Home.vue';
import About from './components/About/About.vue';
import Portfolio from './components/Portfolio/Portfolio.vue';
import Stack from './components/Stack/Stack.vue';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: Home },
        { path: '/about', component: About },
        { path: '/portfolio', component: Portfolio },
        { path: '/stack', component: Stack },
    ],
});

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
