<template>
  <div id="app">
    <HeroImage v-if="this.$route.path=='/'" />
    <NavHeader v-if="this.$route.path!='/'"></NavHeader>
    <NavBar v-if="this.$route.path!='/'"></NavBar>
    <router-view/>
  </div>
</template>

<script>
import NavHeader from './components/NavBar/NavHeader.vue';
import NavBar from './components/NavBar/NavBar.vue';
import HeroImage from './components/HeroImage/HeroImage.vue';

export default {
  name: 'app',
  components: {
    HeroImage,
    NavHeader,
    NavBar
  },  
}
</script>

<style scoped>
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


