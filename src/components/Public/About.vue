<template>
    <div>
        <div class="container-fluid">
            <div class="container img-holder">
                <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/hitcheedaboutcover.jpg" alt="">
            </div>
            <div class="container">
                <h1 class="about-title">WHAT IS HITCHEED ALL ABOUT ?</h1>
                <p class="about-content">
                    Founded in September 2016, Hitcheed is a wedding platform to discover local wedding professionals, view their portfolios and reviews from past couples that had engaged them previously. Hitcheed’s Inbox feature allows couples to connect with wedding professionals and vendors online or through our mobile app, making it easy and convenient.
                    <br/><br/>
                    Whether it’s for an overseas destination shoot, photography or cinematography to capture the beautiful moments of your special day or finding that perfect gown to walk down the aisle, Hitcheed connects engaged couples with wedding professionals and vendors to make that dream wedding come true.
                </p>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "About",
    // metaInfo:{
    //   title: 'Hitcheed | Singapore Wedding Services | Wedding Planning Website',
    //   titleTemplate: '%s'
    // }
}

</script>

<style scoped>
    img {
        width:100%;
    }
    .about-title {
        padding:50px 0px 20px;
        color:#000;
    }
    .about-content {
        text-align:left;
        padding-bottom:50px;
        color:#000;
    }

    @media screen and (max-width:600px) {
        .container-fluid ,.img-holder {
            padding-right:0;
            padding-left:0;
        }
        .about-title {
            font-size:1.4em;
        }
        .about-content {
            padding-right:15px;
            padding-left:15px;
            font-size:0.9em;
        }
    }
</style>