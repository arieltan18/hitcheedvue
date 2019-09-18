<template>
    <div class="reviews">
        <div class="media">
            <h4>{{ review.name }}</h4>
            <div class="rating-stars">
                <span v-for="(value, index) in parseInt(this.review.rating)" :key="index">
                    <span class="rating-star fa fa-star"></span>
                </span>
            </div>
            <div class="review-text">
                {{ review.body }}
            </div>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'ProfessionalSingleReview',
    props: [
        'review'
    ]
}
</script>

<style scoped>
.reviews
{
    text-align: left;
}

.media
{
    display: table-cell;
    vertical-align: top;
}

.rating-star
{
    color: #008489;
    letter-spacing: 5px;
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

.review-text
{
    font-family: 'Open Sans';
    font-size: 16px;
    letter-spacing: 1px;
    line-height: 20px;
    color: #25130e;
    margin: 10px 0 0;
}

</style>