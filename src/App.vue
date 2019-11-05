<template>
  <div id="app">
    <HeroImage v-if="this.$route.path=='/'" />
    <BrownNavHeader></BrownNavHeader>
    <BlackNavBar></BlackNavBar>
    <BrowseCategories :route-key="$route.fullPath" v-if="(this.$route.name=='professionalsByCategory') || (this.$route.name=='professionalsByCategoryAll') || (this.$route.name=='professionalsByAllCategories')" style="padding-top:200px;"></BrowseCategories>
    <router-view :key="$route.fullPath" v-if="this.$route.path!='/'" :style="(this.$route.name == 'professionalsByCategory') || (this.$route.name == 'professionalsByCategoryAll') || (this.$route.name=='professionalsByAllCategories') ? 'padding-top:50px;' : 'padding-top:162px;'"/>
    <router-view v-else />
    <Footer />
  </div>
</template>

<script>
import HeroImage from './components/HeroImage/HeroImage.vue';
import BrownNavHeader from './components/NavBar/BrownNavHeader.vue';
import BlackNavBar from './components/NavBar/BlackNavBar.vue';
import BrowseCategories from './components/BrowseCategories/BrowseCategories.vue';
import Footer from './components/Footer/Footer.vue';
import chatkit from "./chatkit";

export default {
  name: 'app',
  components: {
    HeroImage,
    BrownNavHeader,
    BlackNavBar,
    BrowseCategories,
    Footer
  },
    created: function () {
        chatkit.connectUser();
    }
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


