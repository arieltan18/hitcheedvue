<template>
    <div class="container-fluid mb-5">
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Explore</h1>
                </div>
            </div>
            <div class="categories-section row mb-4">
                <div class="d-flex justify-content-center align-self-center align-items-center mb-3" style="width:100%;">
                    <router-link id="hotels" class="row1 mr-2 header-link" :to="{ name: 'professionalCategory', params: { 'id': 14 }}">
                    </router-link>
                    <router-link id="bridal-studios" class="row1 mr-2 header-link" :to="{ name: 'professionalCategory', params: { 'id': 1 }}">
                    </router-link>
                </div>
                <div class="d-flex justify-content-center" style="width:100%;">
                    <router-link id="venues" class="row1 mr-2 header-link" :to="{ name: 'professionalCategory', params: { 'id': 5 }}">
                    </router-link>
                    <router-link id="photographers" class="row1 mr-2 header-link" :to="{ name: 'professionalCategory', params: { 'id': 2 }}">
                    </router-link>
                    <router-link id="other-countries" class="row1 mr-2 header-link" :to="{ name: 'professionalCategory', params: { 'id': 2 }}">
                    </router-link>
                </div>
            </div>
            <div class="text-center">
                <div class="link">
                    <a class="link-text" href="">See All Categories</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Explore",
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
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group1094%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#bridal-studios
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group1095%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#venues
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group1096%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#photographers
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group1098%402x.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
}
#other-countries
{
    background-image: url('https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/home-page/Group1097%402x.png');
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
</style>