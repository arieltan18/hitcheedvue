<template>
    <div>
        <div class="container-fluid">
            <div class="row">
                <img class="top-image" :src="event.cover_image" width="100%" style="object-fit:contain;max-height:500px;">
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row text-left">
                <div class="col-md-8 ">
                    <h3>{{ event.title }}</h3>
                    <div class="subtitle mb-3">by <span class="bold">{{ event.professional.name }}</span></div>
                    <div class="date-time mb-2">
                        <i class="fa fa-calendar mr-2" aria-hidden="true"></i>
                        {{ date(event.date_from) }} - {{ date(event.valid_to) }}
                    </div>
                    <div class="location mb-3">
                        <i class="fa fa-map-marker mr-2" aria-hidden="true"></i>
                        {{ event.location }}
                    </div>
                    <div class="happening mt-2 ">Happening in 3 days</div>
                    <div class="desc mt-4 mb-4">{{ event.description }}</div>
                    <div>
                        <b-button class="rsvp-btn" variant="primary" v-b-modal.rsvp>RSVP NOW</b-button>
                        <b-modal id="rsvp" title="RSVP to the event Celebrate Love Wedding Showcase, now." size="lg" centered hide-footer ok-only no-stacking>
                            <div class="centered-modal">
                                <form class="rsvp-form" method="POST">
                                    <div class="mb-5">
                                        <label for="name">Name*</label>
                                        <input type="text" name="name">
                                    </div>
                                    <div class="mb-5">
                                        <label for="email">Email*</label>
                                        <input type="text" name="email">
                                        <div class="mandatory">*Mandatory</div>
                                    </div>
                                    <div class="mb-5">
                                        <label for="name">Partner's Name</label>
                                        <input type="text" name="partner-name">
                                    </div>
                                    <div class="mb-5">
                                        <label for="phone">Contact Number</label>
                                        <input type="text" name="contact_number">
                                    </div>
                                    <b-button class="submit-btn" variant="primary" v-b-modal.thankyou>Submit</b-button>
                                </form>
                            </div>
                        </b-modal>
                        <b-modal id="thankyou" size="md" centered hide-footer >
                            <div class="thank-you">Thank<br/>You!</div>
                            <div class="msg">You have successfully completed your RSVP, the vendor will contact you shortly.</div>
                        </b-modal>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="text-center">
                        <router-link :to="{ name: 'professional', params: { slug: event.professional.slug }}">
                        <img class="img-circle" :src="event.professional.profile_image" width="200px">
                        <h4 class="text-center professional-name">
                            {{ event.professional.name }}
                        </h4>
                        </router-link>
                        <p class="review-rating-text text-center" v-if="event.professional.review_count > 0" >{{ event.professional.review_count }} Reviews
                            <span v-for="(value, index) in this.promoeventtion.professional.rating" :key="index">
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
import { EVENT_PROMOTION_FILTER } from '../../graphql/graphql.js';
import moment from 'moment';

export default {
    name: 'Events',
    data() {
        return {
            event: [],
        }
    },
    methods: {
        date: function (date) {
            return moment(date).format('D MMMM YYYY');
        },
    },
    apollo: {
        event: {
            query: EVENT_PROMOTION_FILTER,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            },
            update(data){
                return data.event_promotion_filter;
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

.happening
{
    font-family: 'Open Sans';
    font-size: 14px;
    color : #ffffff;
    background-color: rgba(248, 188, 178, 0.9);
    font-weight: bold;
    text-transform: uppercase;
    padding: 5px 15px;
    border-radius: 5px;
    width: 200px;
    text-align: center;
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

.rsvp-btn
{
    text-transform: uppercase;
    background-color: #88D1CF;
    font-size: 16px;
    font-weight: bold;
    padding: 10px 30px;
    color: #ffffff;
    width: 100%;
}

::v-deep  #rsvp .modal-header
{
    border-bottom: 0px;
    padding-top: 3rem;
    padding-left: 4rem;
    padding-right: 3rem;
}

::v-deep #rsvp .modal-title
{
    font-family: 'Cormorant Garamond' !important;
    font-size: 24px !important;
    font-style: italic !important;
}

::v-deep #rsvp .modal-body
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

.date-time, .location
{
    color: #26140E;
    font-size: 18px;
    letter-spacing: 0.9px;
    font-family: 'Open Sans';
}
</style>