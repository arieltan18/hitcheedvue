<template>
  <div id="app">
    <NavHeader></NavHeader>
    <NavBar></NavBar>
    <router-view class="mt-4"/>
  </div>
</template>

<script>
import NavHeader from './components/NavBar/NavHeader.vue';
import NavBar from './components/NavBar/NavBar.vue';

export default {
  name: 'app',
  components: {
    NavHeader,
    NavBar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

div
{
    display: block;
}
</style>
