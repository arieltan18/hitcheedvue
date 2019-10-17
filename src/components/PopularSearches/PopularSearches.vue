<template>
    <div class="container-fluid mb-5">
        <div class="container">
            <div class="row mb-4">
                <div class="col-sm-12 text-center">
                    <h1>Popular Searches</h1>
                </div>
            </div>
            <div class="slider-section">

            </div>
        </div>
    </div>
</template>

<script>
import Slick from 'vue-slick';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: 'PopularSearches',
    components: {
        VueperSlides, 
        VueperSlide
    },
    
}
</script>

<style scoped>
.container-fluid
{
    padding-top: 3%;
    padding-bottom: 3%;
}
h1
{
    font-family: 'Cormorant Garamond';
    font-size: 30px;
    margin-bottom: 30px;
    color: #26140E;
}
</style>