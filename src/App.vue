<template>
  <div class="app">
    <Header />
    <router-view></router-view>
    <Footer />
</div>

</template>

<script>
import Header from './components/Header/Header.vue';
import Footer from './components/Footer/Footer.vue';

export default {
  name: 'app',
  components: {
    Header,
    Footer,
  }
};
</script>

<style lang='scss' src='./styles/style.scss' />
