<template>
  <div id="app">
    <div class="hero-image">
      <NavHeader></NavHeader>
      <NavBar></NavBar>
    </div>
    <router-view/>
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

.hero-image
{
  background:  linear-gradient(0deg, #FFFFFF00 50%, #160d0975 100%, transparent) ,url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/foto-pettine-756112-unsplash.png') no-repeat scroll center center / cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 100vh;
}
</style>
