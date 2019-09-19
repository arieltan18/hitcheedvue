<template>
    <div>
        <div class="container-fluid bg-color">
            <div class="multiple-items project-slider" >
                <Carousel :perPageCustom="[[768, 3], [1024, 4]]" :scrollPerPage="true" :navigationEnabled="true"  :minSwipeDistance="1" 
                    :navigation-next-label="navigationNext" :navigation-prev-label="navigationPrev">
                    <slide v-for="(projectImage,index) in projectImages" :key="index">
                        <a href="">
                            <img class="mr-3" :src="projectImage.slug" style="height:480px;" />
                        </a>
                    </slide>
                </Carousel>
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row">
                <div class="col-md-8 project-content">
                    <h3>{{ projectContent.name }}</h3>
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
import { Carousel, Slide } from 'vue-carousel';
//import carousel from 'vue-owl-carousel'

export default {
    name: "ProjectContent",
    components: {
        ProfessionalReviews,
        ProfessionalProjects,
        Carousel,
        Slide
    },
    data() {
        return {
            project_id: '',
            projectImages: [],
            projectContent: [],
            otherProjects: [],
            reviews: [],
            totalReviews: '',
            
        }
    },
    created() {
        this.project_id = this.$route.params.id;
    },
    methods: {
        getProjectContent () {
            const url = "https://laravel.hitcheed.com/api/v1/projects/" + this.project_id;
            //const url = "http://hitcheedlaravel.test/api/v1/projects/" + this.project_id;

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
        this.project_id = this.$route.params.id;
        this.getProjectContent();
    },
    mounted() {
        console.log(this.$options.name+' component successfully mounted');
    },
    beforeRouteUpdate(to,from,next) {
        this.project_id = to.params.id;
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
</style>