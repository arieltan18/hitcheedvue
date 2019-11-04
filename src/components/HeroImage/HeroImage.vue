<template>
    <div class="hero-image">  
        <TransparentNavHeader></TransparentNavHeader>
        <WhiteNavBar></WhiteNavBar>
    </div>
</template>

<script>
import WhiteNavBar from '../NavBar/WhiteNavBar.vue';
import TransparentNavHeader from '../NavBar/TransparentNavHeader.vue';

export default {
  name: 'HeroImage',
  components: {
    WhiteNavBar,
    TransparentNavHeader
  },
  

}
</script>

<style scoped>
.hero-image
{
  background:  linear-gradient(0deg, #FFFFFF00 50%, #160d0975 100%, transparent) ,url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/hero-image/foto-pettine-756112-unsplash.png') no-repeat scroll center center / cover;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: bottom;
  width: 100%;
  height: 100vh;
}
</style>