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
                        <img class="mr-1" src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/Group1077%402x.png" width="30px">
                        {{ date(event.date_from) }} - {{ date(event.valid_to) }}
                    </div>
                    <div class="location mb-3">
                        <img class="mr-3" src="https://hitcheed-laravel.s3-ap-southeast-1.amazonaws.com/images/Group1076%402x.png" width="20px">
                        {{ event.location }}
                    </div>
                    <div class="happening mt-2 ">Happening in {{ event.end }} days</div>
                    <div class="desc mt-4 mb-4">{{ event.description }}</div>
                    <div>
                        <b-button class="rsvp-btn" variant="primary" v-b-modal.rsvp>RSVP NOW</b-button>
                        <b-modal id="rsvp" ref="rsvpRef" :title="eventTitle" size="lg" centered hide-footer ok-only no-stacking>
                            <b-alert :variant="hasErrors? 'danger' : 'primary'" :show="!!alertMessage">{{alertMessage}}</b-alert>
                            <div class="centered-modal">
                                <form class="rsvp-form" @submit="submitRSVPForm" method="POST" validate>
                                    <div class="mb-5">
                                        <label for="name">Name*</label>
                                        <input class="form-control" type="text" name="name" v-model="name" required/>
                                    </div>
                                    <div class="mb-5">
                                        <label for="email">Email*</label>
                                        <input class="form-control" type="text" name="email" v-model="email" required/>
                                        <div class="mandatory">*Mandatory</div>
                                    </div>
                                    <div class="mb-5">
                                        <label for="name">Partner's Name</label>
                                        <input class="form-control" type="text" name="partner_name" v-model="partner_name"/>
                                    </div>
                                    <div class="mb-5">
                                        <label for="phone">Contact Number</label>
                                        <input class="form-control" type="text" name="contact_number" v-model="contact_number"/>
                                    </div>
                                    <input type="hidden" name="event_promotion_id" :value="event.id">
                                    <input type="hidden" name="professional_id" :value="event.professional.id">
                                    <input type="hidden" name="professional_name" :value="event.professional.name" >
                                    <b-button class="submit-btn" variant="primary" type="submit" >Submit</b-button>
                                </form>
                            </div>
                        </b-modal>
                        <b-modal id="thankyou" ref="thankyouRef" size="md" centered hide-footer>
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
                        <MessageProfessional :professional="event.professional"></MessageProfessional>
                        <p class="review-rating-text text-center" v-if="event.professional.review_count > 0" >{{ event.professional.review_count }} Reviews
                            <span v-for="(value, index) in this.event.professional.rating" :key="index">
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
import MessageProfessional from "../Professionals/MessageProfessional";
import axios from 'axios';

export default {
    name: 'Events',
    components: {MessageProfessional},
    data() {
        return {
            event: [],
            name: '',
            email: '',
            partner_name: '',
            contact_number: '',
            showModal: false,
            alertMessage:'',
            hasErrors: false
        }
    },
    methods: {
        date: function (date) {
            return moment(date).format('D MMMM YYYY');
        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        submitRSVPForm(e) {
            e.preventDefault();
            let currentObj = this;

            if(!this.validEmail(this.email))
            {
                this.alertMessage = 'Invalid Email Address';
            }
            else
            {
                this.axios.post('https://laravel.hitcheed.com/api/v1/event-promotion/rsvp', {
                    name: this.name,
                    email: this.email,
                    partner_name: this.partner_name,
                    contact_number: this.contact_number,
                    event_promotion_id: this.event.id,
                    professional_id: this.event.professional.id,
                    professional_name: this.event.professional.name
                })
                .then(response => {
                    currentObj.output = response.data;
                    if(response.data.success === true)
                    {
                        this.$refs.rsvpRef.hide();
                        this.$refs.thankyouRef.show();
                        //clear all the input value
                        this.name='';
                        this.email='';
                        this.partner_name='';
                        this.contact_number='';
                        this.hasErrors=false;
                        this.alertMessage='';
                    }
                })
                .catch(error => {
                    currentObj.output = error;
                    const {response:{data:{message = 'An error occurred while rsvp'}}} = error;
                    this.alertMessage = message;

                    if(message.includes('This email has been registered for this event'))
                    {
                        this.alertMessage = 'You have already submitted!';
                    }
                    
                    this.hasErrors = true;
                });
            }
        }

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
                var results = data.event_promotion_filter;
                const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

                //current date
                var date = new Date();
                var valid_to = new Date(results.valid_to);

                //calculate the difference of the days
                var difference = Math.round(Math.abs((valid_to - date) / oneDay));

                //store the difference to the results
                results.end = difference;

                return data.event_promotion_filter;
            }
        }
    },
    computed:  {
        eventTitle: function () {
            const eventTitle = 'RSVP to the event ' + this.event.title + '.' ;
            return eventTitle;
        }
    },
    mounted: function() {
        $('.rsvp').on('hidden.bs.modal', function () {
            $('.rsvp form')[0].reset();
        });
    }
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
