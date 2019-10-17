<template>
    <div class="hero-image">  
        <NavHeader></NavHeader>
        <NavBar></NavBar>    
    </div>
</template>

<script>
import NavHeader from '../NavBar/NavHeader.vue';
import NavBar from '../NavBar/NavBar.vue';

export default {
  name: 'HeroImage',
  components: {
    NavHeader,
    NavBar
  },
  

}
</script>

<style scoped>
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