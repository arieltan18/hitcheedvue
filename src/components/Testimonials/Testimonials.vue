<template>
    <div class="container-fluid mb-5" v-if="testimonials.length >0" >
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Testimonials</h1>
                </div>
            </div>
            <div class="row mb-4" v-for="testimonial in testimonials" :key="testimonial.id">
                    <div class="col-md-8 testimonial-body">
                        {{ testimonial.body_text }}
                    </div>
                    <div class="col-sm-4 testimonial-avatar-div text-center">
                        <img v-if="testimonial.profile_image" class="testimonial-avatar" :src="testimonial.profile_image">
                        <img v-else class="testimonial-avatar" :src="image_src">
                        <div class="testimonial-name text-center">{{ testimonial.name }}</div>
                    </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "Testimonials",
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
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
}

.text-center
{
    text-align: center;
}

.testimonial-div
{
    font-size: 14px;
    line-height: 1.5;
    color: #333;
}

.testimonial-avatar
{
    width: 100%;
    max-width: 214px;
    height: 214px;
    border-radius: 50%;
    object-fit: cover;

}
</style>