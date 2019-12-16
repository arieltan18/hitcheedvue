<template>
    <div>
        <div class="container-fluid">
            <div class="container img-holder">
                <img src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/hitcheedaboutcover.jpg" alt="">
            </div>
            <div class="container">
                <h1 class="faq-title">FREQUENTLY ASKED QUESTIONS</h1>
                <div class="faq-content">
                    <b-button v-b-toggle.faq-1 variant="primary" class="faq-button"><span>What is Hitcheed all about? </span> <i class="fa fa-caret-down"></i>   </b-button>
                    <b-collapse id="faq-1" class="mt-2">
                        <b-card>
                            <p class="card-text">Hitcheed is a wedding platform to discover local wedding professionals, view their portfolios and reviews from past couples that had engaged them previously. Hitcheed’s Inbox feature allows couples to connect with wedding professionals and vendors online or through our mobile app, making easy and convenient.</p>
                        </b-card>
                    </b-collapse>
                </div>
                <div class="faq-content">
                    <b-button v-b-toggle.faq-2 variant="primary" class="faq-button"><span> Are all the professionals on Hitcheed located in Singapore?  </span> <i class="fa fa-caret-down"></i>   </b-button>
                    <b-collapse id="faq-2" class="mt-2">
                        <b-card>
                            <p class="card-text">Yes, there are currently local professionals but some do travel to help wedding couples take photography or videography projects.</p>
                        </b-card>
                    </b-collapse>
                </div>
                <div class="faq-content">
                    <b-button v-b-toggle.faq-3 variant="primary" class="faq-button"><span>Are the listed prices on Hitcheed accurate and what does it include?  </span> <i class="fa fa-caret-down"></i>   </b-button>
                    <b-collapse id="faq-3" class="mt-2">
                        <b-card>
                            <p class="card-text">We collect the pricing from the professionals and it includes some of the basic information of the portfolio like duration and location of the shoot, bespoke or rental gown etc.
                            <br/><br/>
                            However, we recommend that couples to check with the professionals directly on their requirement.</p>
                        </b-card>
                    </b-collapse>
                </div>
                <div class="faq-content">
                    <b-button v-b-toggle.faq-4 variant="primary" class="faq-button"><span>How does the Inbox feature or chat with the professional works?  </span> <i class="fa fa-caret-down"></i>   </b-button>
                    <b-collapse id="faq-4" class="mt-2">
                        <b-card>
                            <p class="card-text">The inbox is to access the messages that you would like to reach out to the professionals. When they reply, you can also access those messages from them easily and conveniently on your email as well as your mobile app.</p>
                        </b-card>
                    </b-collapse>
                </div>
                <div class="faq-content">
                    <b-button v-b-toggle.faq-5 variant="primary" class="faq-button"><span>How can I save those projects that I like?  </span> <i class="fa fa-caret-down"></i>   </b-button>
                    <b-collapse id="faq-5" class="mt-2">
                        <b-card>
                            <p class="card-text">Simply tap on the top right corner and create your wishlist. When the heart is “filled”, it means the images has been saved to the board. To remove the project from your wishlist, tap on the heart again.</p>
                        </b-card>
                    </b-collapse>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Faq",
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
    .faq-title {
        padding:50px 0px 20px;
        color:#000;
    }
    .faq-content {
        padding:10px 0px 20px;
    }
    .faq-button {
        display:block;
        width:100%;
        text-align:left;
        font-size:1.3em;
        background:#ececec;
        color:#000;
        border:none;
        position:relative;
        padding:15px !important;
    }
    .faq-button .fa {
        position:absolute;
        right:15px;
        top:50%;
        transform:translateY(-50%);
    }
    .card-text {
        text-align:left;
        color:#000;
        border:none;
    }
    .mt-2 .card {
        border:none;
    }
    @media screen and (max-width:600px) {
        .faq-button {
            font-size:1em;
        }
        .faq-button span {
            width:90%;
            display:block;
        }
    }
</style>