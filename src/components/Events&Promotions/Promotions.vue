<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <img class="top-image" :src="promotion.cover_image" width="100%" style="object-fit:contain;max-height:500px;">
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row text-left">
                <div class="col-md-8 ">
                    <h3>{{ promotion.title }}</h3>
                    <div class="subtitle">by <span class="bold">{{ promotion.professional.name }}</span></div>
                    <div class="ending mt-2">Ending in 3 days</div>
                    <div class="desc mt-3 mb-4">{{ promotion.description }}</div>
                    <hr />
                    <div class="validity-period">Validity Period: {{ date(promotion.date_from) }} - {{ date(promotion.valid_to) }}</div>
                    <hr />
                    <div class="term mt-4 mb-4">
                        Terms & Conditions:<br/>
                        {{ promotion.terms }}
                    </div>
                    <div>
                        <b-button class="interested-btn" variant="primary" v-b-modal.modal-1>I'm interested</b-button>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <router-link :to="{ name: 'professional', params: { slug: promotion.professional.slug }}">
                        <img class="img-circle" :src="promotion.professional.profile_image" width="200px">
                        <h4 class="text-center professional-name">
                            {{ promotion.professional.name }}
                        </h4>
                        </router-link>
                        <MessageProfessional :professional="promotion.professional"></MessageProfessional>
                        <p class="review-rating-text text-center" v-if="promotion.professional.review_count > 0" >{{ promotion.professional.review_count }} Reviews
                            <span v-for="(value, index) in this.promotion.professional.rating" :key="index">
                                <span class="rating-star fa fa-star"></span>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { PROMOTION_FILTER } from '../../graphql/graphql.js';
import moment from 'moment';
import MessageProfessional from "../Professionals/MessageProfessional";

export default {
    name: 'Promotions',
    components: {MessageProfessional},
    data() {
        return {
            promotion: [],
        }
    },
    computed(){

    },
    methods: {
        date: function (date) {
            return moment(date).format('D MMMM YYYY');
        },
    },
    apollo: {
        promotion: {
            query: PROMOTION_FILTER,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            },
            update(data){
                return data.promotion_filter;
            }
        }
    },
}
</script>

<style scoped>
.top-img
{
    width: 100%;
}
.padding
{
    padding: 3%;
}
h3
{
    font-weight: 500;
    font-family: 'Cormorant Garamond';
    font-size: 40px;
    line-height: 30px;
    color: #26140E;
    margin: 30px 0;
}
.bold
{
    font-weight: bold;
}

.subtitle
{
    font-family: 'Open Sans';
    font-size: 20px;
    color: #26140E;
}

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
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 10px;
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

.ending
{
    font-family: 'Open Sans';
    font-size: 14px;
    color : #ffffff;
    background-color: rgba(248, 188, 178, 0.9);
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px 15px;
    border-radius: 5px;
    width: 160px;
}

.desc
{
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 1.6em;
    letter-spacing: 0.7px;
    color: #25130E;
}

.validity-period
{
    font-family: 'Open Sans';
    font-size: 16px;
    color: #25130E;
    letter-spacing: 0.8px;
}

.term
{
    font-family: 'Open Sans';
    font-size: 12px;
    color: #25130E;
    letter-spacing: 0.6px;
}

.interested-btn
{
    text-transform: uppercase;
    background-color: #88D1CF;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 30px;
    color: #ffffff;
    width: 100%;
}

::v-deep  #interested .modal-header
{
    border-bottom: 0px;
    padding-top: 3rem;
    padding-left: 4rem;
    padding-right: 3rem;
}

::v-deep #interested .modal-title
{
    font-family: 'Cormorant Garamond' !important;
    font-size: 24px !important;
    font-style: italic !important;
}

::v-deep #interested .modal-body
{
    padding-left: 4rem;
    padding-right: 4rem;
    padding-bottom: 4rem;
}

label
{
    font-size: 16px;
    font-family: 'Open Sans';
    color: #26140E;
    opacity: 0.5;
    width: 100%;
}

input
{
    border-top:none;
    border-left:none;
    border-right:none;
    border-bottom: 1px solid #c9c7c6;
    width: 100%;
}

.mandatory
{
    font-size: 12px;
    color: #26140E;
    opacity: 0.3;
}

.checkbox-label
{
    font-style: italic;
}

.submit-btn
{
    width: 100%;
    text-transform: uppercase;
    font-family: 'Open Sans';
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1.4px;
    padding-top:10px;
    padding-bottom: 10px;
}

::v-deep  #thankyou .modal-header
{
    border-bottom: 0px;
    padding-bottom: 2em;
}

::v-deep  #thankyou .modal-body
{
    border-bottom: 0px;
    padding-bottom: 4em;
}

.thank-you
{
    font-size: 100px;
    font-family: 'Cormorant Garamond';
    color: #26140E;
    text-align: center;
    font-style: italic;
    line-height: 1.2em;
}

.msg
{
    font-size: 16px;
    font-family: 'Open Sans';
    color: #26140E;
    letter-spacing: 0.8px;
    text-align: center;
}
</style>
