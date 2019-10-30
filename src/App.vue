<template>
  <div id="app">
    <HeroImage v-if="this.$route.path=='/'" />
    <BrownNavHeader></BrownNavHeader>
    <BlackNavBar></BlackNavBar>
    <BrowseCategories v-if="this.$route.path!='/'" style="padding-top:200px;"></BrowseCategories>
    <router-view v-if="this.$route.path!='/'" style="padding-top:50px;"/>
    <router-view v-else />
  </div>
</template>

<script>
import HeroImage from './components/HeroImage/HeroImage.vue';
import BrownNavHeader from './components/NavBar/BrownNavHeader.vue';
import BlackNavBar from './components/NavBar/BlackNavBar.vue';
import BrowseCategories from './components/BrowseCategories/BrowseCategories.vue';

export default {
  name: 'app',
  components: {
    HeroImage,
    BrownNavHeader,
    BlackNavBar,
    BrowseCategories,
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


