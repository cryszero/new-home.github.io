<template>
  <div class="app">
    <Header />
    <router-view></router-view>
</div>

</template>

<script>
import VueRouter from 'vue-router';
import Header from './components/Header/Header.vue';

export default {
  name: 'app',
  components: {
    Header,
  }
};
</script>

<style lang='scss' src='./styles/style.scss' />
