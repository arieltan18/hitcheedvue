<template>
    <div class="col-sm-4">
        <div class="text-center">
            <img class="img-circle" :src="professionalContent.profile_image">
            <h4 class="text-center professional-name">
                {{ professionalContent.name }}
            </h4>
            <p class="review-rating-text text-center" v-if="reviews.length > 0">{{ totalReviews }} Reviews 
                <span v-for="(value, index) in this.professionalContent.rating" :key="index">
                    <span class="rating-star fa fa-star"></span>
                </span>
            </p>
        </div>
        <h3>Reviews</h3>
        <hr>
        <ProfessionalSingleReview v-for="review in reviews" :key="review.id" :review="review" />
    </div>
</template>

<script>
import ProfessionalSingleReview from './ProfessionalSingleReview'; 

export default {
    name: "ProfessionalReviews",
    components: {
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