<template>
  <div id="app">
    <NavBar v-if="showHeader"></NavBar>
    <HeroImage v-if="this.$route.path=='/'" />
    <BrowseCategories :route-key="$route.params.category" v-if="(this.$route.name=='professionalsByCategory') || (this.$route.name=='professionalsByCategoryAll') || (this.$route.name=='professionalsByAllCategories') || (this.$route.name=='professionalsByTag')" style="padding-top:200px;"></BrowseCategories>
    <router-view
      :key="$route.fullPath"
      v-if="this.$route.path!='/'"
      :style="(this.$route.name == 'professionalsByCategory')
                || (this.$route.name == 'professionalsByCategoryAll')
                || (this.$route.name=='professionalsByAllCategories')
                || (this.$route.name=='professionalsByTag') ? 'padding-top:50px;' : 'padding-top:162px;'"/>
    <router-view v-else />
    <Footer v-if="showFooter" />
  </div>
</template>

<script>
import HeroImage from './components/HeroImage/HeroImage.vue';
import BrowseCategories from './components/BrowseCategories/BrowseCategories.vue';
import Footer from './components/Footer/Footer.vue';
import chatkit from "./services/Chatkit";
import NavBar from "./components/NavBar";
import axios from 'axios';

export default {
  name: 'app',
  data() {
    return {
      metaTitle: '',
      metaDescriptions: '',
      ogImage: '' 
    }
  },
  metaInfo(){
    let metaTitle = this.metaTitle != undefined ? this.metaTitle : 'Hitcheed | Singapore Wedding Services | Wedding Planning Website';
    let metaDescriptions = this.metaDescriptions != undefined ? this.metaDescriptions : 'Hitcheed is a wedding planning website that connects engaged couples with Singapore & overseas wedding professionals to make that dream wedding come true.';
    let ogImage = this.ogImage != undefined ? this.ogImage : 'https://d1qc9wtuffqlue.cloudfront.net/images/hero-photo/image/1573708412-foto-pettine-756112-unsplash.png' ;
    return {
        title: metaTitle,
        meta:[
            {
                name: 'description',
                content: metaDescriptions
            },
            {
                name: 'og:image',
                content: this.ogImage
            }
        ],
        titleTemplate: '%s | Hitcheed.com'
    }
  },
  components: {
    NavBar,
    HeroImage,
    BrowseCategories,
    Footer
  },
  computed:{
    showHeader(){
        return this.$store.getters.showHeader;
    },
    showFooter(){
        return this.$store.getters.showFooter;
    }
  },
  mounted: function () {
      chatkit.connectUser();
      this.$store.dispatch('getUser');
      this.getSeoSettings();
  },
  methods: {
    async getSeoSettings() {
        const api = process.env.VUE_APP_HITCHEED_API +  '/v1/seo-settings';

        axios.defaults.headers = {
          'Content-Type': 'application/json',
          'cache-control': 'no-cache'
        }
        await axios.get(api, {crossDomain: true})
        .then((response) => {
          //check if the seo settings exists
          if(response.data.exist=="true")
          {
              this.metaTitle = response.data.meta_title;
              this.metaDescriptions = response.data.meta_descriptions;
              this.ogImage = response.data.og_image;
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
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


