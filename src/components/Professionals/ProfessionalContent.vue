<template>
    <div>
        <div class="container-fluid bg-color">
            <div class="row">
                <img class="top-image" :src="professionalContent.cover_image" width="100%">
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row">
                <div class="col-md-8 professional-content">
                    <h3>About this Professional</h3>
                    <div class="description" v-html="professionalContent.description"></div>
                    <p v-if="professionalContent.address || professionalContent.country">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Location: {{ professionalContent.address ? professionalContent.address : professionalContent.country }}
                    </p>
                    <ProfessionalProjects :projects="projects"></ProfessionalProjects>
                </div>
                <ProfessionalReviews :professionalContent="professionalContent" :reviews="reviews" :totalReviews="professionalContent.review_count" />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import ProfessionalReviews from './ProfessionalReviews';
import ProfessionalProjects from './ProfessionalProjects';
import {metaResolver} from "../../helpers";

export default {
    name: "ProfessionalContent",
    components: {
        ProfessionalReviews,
        ProfessionalProjects
    },
    metaInfo:metaResolver.bind('professionalContent'),
    data() {
        return {
            professional_slug: '',
            professionalContent: [],
            projects: [],
            reviews: []
        }
    },
    methods: {
        getProfessionalContent ()
        {
            const url = process.env.VUE_APP_HITCHEED_API + "/v1/professionals/slug/" + this.professional_slug;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.professionalContent = response.data.professional;
                this.projects = response.data.projects;
                this.reviews = response.data.reviews;
                //console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.professional_slug = this.$route.params.slug;
        this.getProfessionalContent();
    },
    beforeRouteUpdate(to,from,next) {
        this.professional_id = to.params.id;
        this.getProfessionalContent();
        next();
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
    color: #25130e;
    margin: 30px 0;
}

.professional-content
{
    text-align: left;
}

.description
{
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 22px;
    color: #25130e;
    margin: 20px 0;
    font-family: 'Open Sans';
}
</style>
