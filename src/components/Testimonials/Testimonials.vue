<template>
    <div class="container-fluid" v-if="testimonials.length >0" >
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center mt-4">
                    <h1>Over 5,000 Happy Wedding Couples and Counting</h1>
                </div>
                <div class="col-sm-12 text-center mt-5 mb-4">
                    <img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Path37.svg">
                </div>
            </div>
            <vueper-slides class="no-shadow px-5 mx-5" arrows-outside :dragging-distance="70" :bullets="false" :breakpoints="{ 600: { visibleSlides: 1 } }">
                <template v-slot:arrow-left>
                    <img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group29.svg" alt="left-arrow" width="25px">
                </template>
                <template v-slot:arrow-right><img src="https://d1qc9wtuffqlue.cloudfront.net/images/home-page/Group28.svg" alt="right-arrow" width="25px;"></template>
                <vueper-slide
                    v-for="testimonial in testimonials"
                    :key="testimonial.id">
                    <div slot="content">
                        <div class="reviewer-name">
                            <div class="review-img">
                                <div class="testimonial-body mb-3">{{testimonial.body_text}}</div>
                                <img v-if="testimonial.profile_image" class="testimonial-avatar" :src="testimonial.profile_image" wid>
                                <img v-else class="testimonial-avatar" :src="image_src">
                            </div>
                            <div class="mt-1">{{ testimonial.name }}</div>
                        </div>
                    </div>
                </vueper-slide>
            </vueper-slides>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { VueperSlides, VueperSlide } from 'vueperslides'

export default {
    name: "Testimonials",
    components: {
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            testimonials: [],
            image_src: '/default-582802f80278481224fa7ea8b58ec25671b81e16b5ed7b7cb266ed18fd2c3954.jpg'
        }
    },
    methods: {
        async getTestimonialList ()
        {
            const api = process.env.VUE_APP_HITCHEED_API + "/v1/testimonials";
            //const api = 'http://hitcheedlaravel.test/api/v1/testimonials';

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache',
            }
            await axios.get(api,{crossDomain: true})
            .then((response) => {
                this.testimonials = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted()
    {
        this.getTestimonialList();
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
    font-weight: normal;
    font-size: 30px;
    color: #26140E;
}
.testimonial-avatar
{
    width: 100%;
    max-width: 64px;
    height: 64px;
    border-radius: 50%;
    object-fit: cover;

}
.testimonial-body
{
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 18px;
    color: #26140E;

    width: 100%;
    text-align: center;
    margin:auto;
}
.reviewer-name
{
    font-size: 12px;
    letter-spacing: 0.6px;
    font-family: 'Open Sans';
    color: #26140E;
}
</style>
