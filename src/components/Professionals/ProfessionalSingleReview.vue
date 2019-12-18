<template>
    <div class="reviews">
        <div class="media">
            <div class="media-left mr-2">
                <img v-if="review.user.profile_image" class="review-avatar" :src="review.user.profile_image" wid>
                <img v-else class="review-avatar" :src="image_src">
            </div>
            <div class="media-right">
                <h4>{{ review.user.name }}</h4>
                <div class="rating-stars">
                    <span v-for="(value, index) in parseInt(this.review.rating)" :key="index">
                        <span class="rating-star fa fa-star"></span>
                    </span>
                </div>
            </div>
        </div>
        <div class="review-text">
            {{ review.body }}
        </div>
        <hr>
    </div>
</template>

<script>
export default {
    name: 'ProfessionalSingleReview',
    props: [
        'review'
    ],
    data() {
        return {
            image_src: '/default-582802f80278481224fa7ea8b58ec25671b81e16b5ed7b7cb266ed18fd2c3954.jpg'
        }
    },
}
</script>

<style scoped>
h4
{
    font-size: 18px;
    font-weight: bold;
}

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

.media-left, .media-right
{
    display: table-cell;
    vertical-align: top;
}

.media-left
{
    padding-right:20px
}

.review-avatar
{
    max-width: 64px;
    height: 64px;
    border-radius: 50%;
    border-radius: 50%;
    width: 60px;
}
</style>