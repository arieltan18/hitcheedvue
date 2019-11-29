<template>
    <div class="hero-image" :style="{ 'background-image': 'url(' + this.heroImage + ')'}">
    </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HeroImage',
  components: {},
  data() {
    return {
      heroImage: ''
    }
  },
  methods: {
      async getHeroImage() {
          const api = process.env.VUE_APP_HITCHEED_API + '/v1/settings/hero-image';

          axios.defaults.headers = {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache'
          }
          await axios.get(api, {crossDomain: true})
          .then((response) => {
            this.heroImage = response.data.photo;
          })
          .catch(error => {
            console.log(error);
          });
      }
  },
  mounted()
  {
    this.getHeroImage();
  }

}
</script>

<style scoped>
.hero-image
{
  background:  linear-gradient(0deg, #FFFFFF00 50%, #160d0975 100%, transparent) ,url('') no-repeat scroll center center / cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100vh;
}
</style>
