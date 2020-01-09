<template>
    <div class="container-fluid mb-5">
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Explore</h1>
                </div>
            </div>
            <div class="categories-section row mb-4" v-if="!isMobile()">
                <div class="d-flex justify-content-center align-self-center align-items-center mb-3" style="width:100%;">
                    <router-link id="hotels" class="row1 mr-2 header-link" :to="{ name: 'professionalsByCategory', params: { category: 'hotels' }}">
                    </router-link>
                    <router-link id="bridal-studios" class="row1 mr-2 header-link" :to="{ name: 'professionalsByCategory', params: { category: 'bridal-studios' }}">
                    </router-link>
                </div>
                <div class="d-flex justify-content-center" style="width:100%;">
                    <router-link id="venues" class="row2 mr-2 header-link" :to="{ name: 'professionalsByCategory', params: { category: 'venues' }}">
                    </router-link>
                    <router-link id="photographers" class="row2 mr-2 header-link" :to="{ name: 'professionalsByCategory', params: { category: 'photographers' }}">
                    </router-link>
                    <router-link id="other-countries" class="row2 mr-2 header-link" :to="{ name: 'professionalsByCategory', params: { category: 'other-countries' }}">
                    </router-link>
                </div>
            </div>
            <div class="categories-section row mb-4" v-else-if="isMobile()">
                <router-link id="hotels" class="image header-link" :to="{ name: 'professionalsByCategory', params: { category: 'hotels' }}">
                </router-link>
                <router-link id="bridal-studios" class="image header-link" :to="{ name: 'professionalsByCategory', params: { category: 'bridal-studios' }}">
                </router-link>
                <router-link id="venues" class="image header-link" :to="{ name: 'professionalsByCategory', params: { category: 'venues' }}">
                </router-link>
                <router-link id="photographers" class="image header-link" :to="{ name: 'professionalsByCategory', params: { category: 'photographers' }}">
                </router-link>
                <router-link id="other-countries" class="image header-link" :to="{ name: 'professionalsByCategory', params: { category: 'other-countries' }}">
                </router-link>
            </div>
            <div class="text-center">
                <div class="link">
                    <router-link :to="{ name: 'professionalsByAllCategories'}" class="link-text" >
                        See All Categories
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Explore",
    methods: {
        isMobile() {
            if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                return true
            } else {
                return false
            }
        }
    }
}
</script>

<style scoped>
.container-fluid
{
    background-color: hsla(15, 6%, 86%, 0.2);
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
.category-text
{
    font-family: 'Open Sans';
    font-size: 12px;
    letter-spacing: 1.2px;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 600;
}
#hotels
{
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group1094%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#bridal-studios
{
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group1095%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#venues
{
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group1096%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#photographers
{
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group1098%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#other-countries
{
    background-image: url('https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group1097%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
.row1
{
    width: 36%;
    height: 255px;
}
.row2
{
    width: 24%;
    height: 167px;
}
.link
{
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 18px;

    cursor: pointer;
    /* text-decoration: underline; */
}
.link-text
{
    padding-bottom:2px;
    border-bottom: 0.5px solid #26140E;
    color: #26140E;
    text-decoration: none;
    text-transform: capitalize;
}
.image
{
    width: 100%;
    height: 255px;
}
</style>
