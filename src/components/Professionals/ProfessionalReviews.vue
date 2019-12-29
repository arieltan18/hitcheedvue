<template>
    <div class="col-sm-4">
        <div class="text-center">
            <router-link v-if="this.$route.name=='professional'" :to="{ name: 'professional', params: { slug: professionalContent.slug }}">
                <img class="img-circle" :src="professionalContent.profile_image" width="200px">
                <h4 class="text-center professional-name">
                    {{ professionalContent.name }}
                </h4>
            </router-link>
            <router-link v-else-if="this.$route.name=='project'" :to="{ name: 'professional', params: { slug: professionalContent.professional.slug }}">
                <img class="img-circle" :src="professionalContent.professional.profile_image" width="200px">
                <h4 class="text-center professional-name">
                    {{ professionalContent.professional.name }}
                </h4>
            </router-link>
            <div v-if="this.$route.name=='professional'">
                <p class="review-rating-text text-center" v-if="reviews.length > 0">{{ totalReviews }} Reviews
                    <span v-for="(value, index) in parseInt(this.professionalContent.rating)" :key="index">
                        <span class="rating-star fa fa-star"></span>
                    </span>
                </p>
            </div>
            <div v-else-if="this.$route.name=='project'">
                <p class="review-rating-text text-center" v-if="reviews.length > 0">{{ totalReviews }} Reviews
                    <span v-for="(value, index) in parseInt(this.professionalContent.professional.rating)" :key="index">
                        <span class="rating-star fa fa-star"></span>
                    </span>
                </p>
            </div>
        </div>
        <MessageProfessional :professional="professionalContent"></MessageProfessional>
        <div v-if="this.totalReviews>0">
            <h3>Reviews</h3>
            <hr>
            <ProfessionalSingleReview v-for="review in this.reviews" :key="review.id" :review="review" />
        </div>
    </div>
</template>

<script>
import ProfessionalSingleReview from './ProfessionalSingleReview';
import MessageProfessional from "./MessageProfessional";

export default {
    name: "ProfessionalReviews",
    computed: {
        loggedIn() {
            return this.$store.getters.loggedIn;
        }
    },
    components: {
        MessageProfessional,
        ProfessionalSingleReview
    },
    props: [
        'professionalContent',
        'reviews',
        'totalReviews'
    ],
}
</script>

<style scoped>
.text-center
{
    text-align: center;
}

.img-circle
{
    border-radius: 50%;
}

.professional-name
{
    font-family: 'Open Sans';
    font-weight: normal;
    color: #25130e;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 10px;
    border-bottom: 1px solid #a1a2a3;
    margin-top:10px;
    margin-bottom: 15px;
}

p
{
    font-family: 'Open Sans';
}

span.fa-star
{
    color: #008489;
}

.review-rating-text
{
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 20px;
    color: #25130e;
    margin: 20px 0;
}

.rating-star
{
    margin-right: 3px;
}

h3
{
    font-family: 'Cormorant Garamond';
    color: #25130e;
    font-size: 40px;
}

hr
{
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top-color: currentcolor;
    border-top-style: none;
    border-top-width: 0px;
    border-top: 1px solid #aeaeae;
}


</style>
