<template>
    <div>
        <div class="container-fluid">
            <div class="container img-holder">
                <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/hitcheedaboutcover.jpg" alt="">
            </div>
            <div class="container">
                <h1 class="about-title">WHY LIST ON HITCHEED<br><small>Here's why you should list on Hitcheed</small></h1>
                <p class="about-content">
                    Founded in September 2016, Hitcheed is a wedding platform to discover local wedding professionals, view their portfolios and reviews from past couples that had engaged them previously. Hitcheed’s Inbox feature allows couples to connect with wedding professionals and vendors online or through our mobile app, making it easy and convenient.
                    <br/><br/>
                    Whether it’s for an overseas destination shoot, photography or cinematography to capture the beautiful moments of your special day or finding that perfect gown to walk down the aisle, Hitcheed connects engaged couples with wedding professionals and vendors to make that dream wedding come true.
                </p>
                <div class="row mb-5">
                    <div class="col-sm-12 col-md-4 col-lg-4">
                        <img class="img-fluid mb-4" style="max-width:70px;" src="https://hitcheed.com/assets/icon-vendor1-a48fae0b8410bcc0bef7e1ad614942ebb743d05c3132ae460a940f2f72fd930f.png" />
                        <h3 class="mb-3">Listing</h3>
                        <p>Showcase your produtcs or projects to allow wedding couples to discover you through our mobile app and website.</p>
                    </div>
                     <div class="col-sm-12 col-md-4 col-lg-4">
                        <img class="img-fluid mb-4" style="max-width:70px" src="https://hitcheed.com/assets/icon-vendor2-a7014cfee6b4c98d76a3fb02c0b5579bebc5f4df1db670a481775c92bd36d32c.png" />
                        <h3 class="mb-3">Communicate</h3>
                        <p>Easy to use messaging Inbox to reach you directly.</p>
                    </div>
                     <div class="col-sm-12 col-md-4 col-lg-4">
                        <img class="img-fluid mb-4" style="max-width:70px" src="https://hitcheed.com/assets/icon-vendor3-0de90d826128138f4a21cf46f36e184f8bd25adedf9987424fad6908b3e89a4a.png" />
                        <h3 class="mb-3">Meet Up</h3>
                        <p>Meet up with couples to further understand their requirements before their engagement for your product or service.</p>
                    </div>
                </div>
                <div class="row mb-5">
                    <div class="col-12">
                        <p>Send us an email at <a href="mailto:professionals@hitcheed.com">professionals@hitcheed.com</a> with your company name ad contact number and our account service agent will contact you shortly.</p>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Vendor",
    metaInfo:{
      title: 'Hitcheed | Singapore Wedding Services | Wedding Planning Website',
      titleTemplate: '%s'
    }
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