<template>
    <div>
        <div class="container-fluid bg-color container-width">
            <div class="multiple-items project-slider" >
                <vueper-slides class="no-shadow" :visible-slides="3" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{ 800: { visibleSlides: 2 } }">
                    <vueper-slide class="mr-4" v-for="(image, i) in projectImages" :key="i" :image="image.slug"></vueper-slide>
                </vueper-slides>
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row">
                <div class="col-md-8 project-content">
                    <h3>{{ projectContent.project_name }}</h3>
                    <div v-html="projectContent.descriptions"></div>
                    <p v-if="projectContent.country">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Location: {{ projectContent.country }}
                    </p>
                    <ProfessionalProjects :projects="otherProjects"></ProfessionalProjects>
                </div>
                <ProfessionalReviews :professionalContent="projectContent" :reviews="reviews" :totalReviews="totalReviews"/>
            </div>
        </div>
            
    </div>
</template>

<script>
import axios from 'axios';
import ProfessionalReviews from '../Professionals/ProfessionalReviews';
import ProfessionalProjects from '../Professionals/ProfessionalProjects';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
    name: "ProjectContent",
    components: {
        ProfessionalReviews,
        ProfessionalProjects,
        VueperSlides, 
        VueperSlide
    },
    data() {
        return {
            project_slug: '',
            projectImages: [],
            projectContent: [],
            otherProjects: [],
            reviews: [],
            totalReviews: '',
        }
    },
    created() {
        this.project_slug = this.$route.params.slug;
    },
    methods: {
        getProjectContent () {
            const url =  process.env.VUE_APP_HITCHEED_API  + "/v1/projects/slug/" + this.project_slug;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.projectContent = response.data.project;
                this.projectImages = response.data.project_images;
                this.otherProjects = response.data.other_projects;
                this.totalReviews = response.data.total_reviews;
                this.reviews = response.data.reviews;
                console.log(this.projectImages);
            })
            .catch(error => {
                console.log(error);
            });
        },

    },
    beforeMount() {
        this.project_slug = this.$route.params.slug;
        this.getProjectContent();
    },
    mounted() {
        console.log(this.$options.name+' component successfully mounted');
    },
    beforeRouteUpdate(to,from,next) {
        this.project_slug = to.params.slug;
        this.getProjectContent();
        next();
    },
    computed: {
        navigationNext: function() { return `<i class="fas fa-chevron-right"></i>` },
        navigationPrev: function() { return `<i class="fas fa-chevron-left"></i>` },
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
    font-size: 25px;
    line-height: 30px;
    color: #25130e;
    margin: 30px 0;
}

.project-content
{
    text-align: left;
}

.project-slider
{
    min-height: 300px;
}

.slider-pro
{
    position: relative;
    box-sizing: content-box;
}

.sp-slides-container
{
    position: relative;
}

.container-width
{
    width: 98%;
}
</style>