<template>
    <div>
        <div class="container-fluid bg-color container-width">
            <div class="multiple-items project-slider" >
                <vueper-slides class="no-shadow" :visible-slides="3" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{
                    800: { visibleSlides: 2 },
                    600: { visibleSlides: 1 , slideRatio: 2/3}
                }">
                    <vueper-slide class="m-sm-2" v-for="(image, i) in projectImages" :key="i" :image="image.slug"></vueper-slide>
                </vueper-slides>
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row">
                <div class="col-md-8 project-content">
                    <h3>{{ projectContent.name }}</h3>
                    <div v-html="projectContent.descriptions"></div>
                    <p v-if="projectContent.country">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Location: {{ projectContent.country.name }}
                    </p>
                    <ProfessionalProjects :projects="otherProjects"></ProfessionalProjects>
                </div>
                <ProfessionalReviews :professionalContent="this.projectContent" :reviews="reviews" :totalReviews="totalReviews"/>
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
import {metaResolver} from "../../helpers";
import { PROJECT_BY_SLUG } from '../../graphql/graphql.js';

export default {
    name: "ProjectContent",
    metaInfo: metaResolver.bind('projectContent'),
    components: {
        ProfessionalReviews,
        ProfessionalProjects,
        VueperSlides,
        VueperSlide
    },
    data() {
        return {
            projectImages: [],
            projectContent: [],
            otherProjects: [],
            reviews: [],
            totalReviews: 0,
        }
    },
    beforeRouteUpdate(to,from,next) {
        next();
    },
    computed: {
        navigationNext: function() { return `<i class="fas fa-chevron-right"></i>` },
        navigationPrev: function() { return `<i class="fas fa-chevron-left"></i>` },
    },
    apollo: {
        project: {
            query: PROJECT_BY_SLUG,
            variables() {
                return {
                    slug: this.$route.params.slug
                }
            },
            update(data) {
                this.projectContent = data.project_by_slug;
                this.projectImages = data.project_by_slug.project_images;
                this.otherProjects = data.project_by_slug.professional.projects;
                this.reviews = data.project_by_slug.professional.reviews;
                this.totalReviews = this.reviews.length;  

                return data.professional_by_slug;
            }
        }
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
