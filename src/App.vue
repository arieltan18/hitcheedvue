<template>
  <div id="app">
    <HeroImage v-if="this.$route.path=='/'" />
    <BrownNavHeader></BrownNavHeader>
    <BlackNavBar></BlackNavBar>
    <BrowseCategories :route-key="$route.params.category" v-if="(this.$route.name=='professionalsByCategory') || (this.$route.name=='professionalsByCategoryAll') || (this.$route.name=='professionalsByAllCategories') || (this.$route.name=='professionalsByTag')" style="padding-top:200px;"></BrowseCategories>
    <router-view :key="$route.fullPath" v-if="this.$route.path!='/'" :style="(this.$route.name == 'professionalsByCategory') || (this.$route.name == 'professionalsByCategoryAll') || (this.$route.name=='professionalsByAllCategories') || (this.$route.name=='professionalsByTag') ? 'padding-top:50px;' : 'padding-top:162px;'"/>
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
import chatkit from "./services/Chatkit";

export default {
  name: 'app',
    metaInfo:{
      title: 'Hitcheed | Singapore Wedding Services | Wedding Planning Website',
        meta:[
            {
                name: 'description',
                content: 'Hitcheed is a wedding planning website that connects engaged couples with Singapore &amp; overseas wedding professionals to make that dream wedding come true.'
            },
            {
                name: 'og:image',
                content: 'https://d1qc9wtuffqlue.cloudfront.net/images/hero-photo/image/1573708412-foto-pettine-756112-unsplash.png'
            }
        ],
      titleTemplate: '%s | Hitcheed.com'
    },
  components: {
    HeroImage,
    BrownNavHeader,
    BlackNavBar,
    BrowseCategories,
    Footer
  },
  mounted: function () {
      chatkit.connectUser();
      this.$store.dispatch('getUser')
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


