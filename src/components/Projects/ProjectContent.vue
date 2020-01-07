<template>
    <div>
        <div class="container-fluid bg-color container-width">
            <div v-if="this.videoLink">
                <iframe :src="this.videoLink" width="100%" height="800" frameborder="0" allow="autoplay; fullscreen" allowfullscreen data-ready="true" tabindex="-1"></iframe>
            </div>
            <div class="multiple-items project-slider" v-else>
                <vueper-slides class="no-shadow" :visible-slides="3" :touchable="false" slide-multiple :slide-ratio="1/4" :dragging-distance="200" :breakpoints="{
                    800: { visibleSlides: 2 },
                    600: { visibleSlides: 1 , slideRatio: 2/3}
                }">
                    <vueper-slide class="m-sm-2" v-for="(image, i) in projectImages" :key="i" >
                        <template v-slot:content>
                            <div style="width:100%;height:100%;cursor:pointer;" @click="displayImageModal(i)">
                                <a class="grouped_elements" data-fancybox="gallery" rel="group1" :href="image.slug">
                                    <img :src="image.slug" class="slider-image"/>
                                </a>
                            </div>
                        </template>
                    </vueper-slide>
                </vueper-slides>
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row">
                <div class="col-md-8 project-content">
                    <h3>{{ projectContent.name }}</h3>
                    <div class="description" v-if="projectContent.descriptions">
                        {{ projectContent.descriptions }}
                    </div>
                    <p v-if="projectContent.price_text && projectContent.price_text!=0">
                        Price: {{ projectContent.price_text }}
                    </p>
                    <p v-if="projectContent.country">
                        <i class="fa fa-map-marker" aria-hidden="true"></i>
                        Location: {{ projectContent.country.name }}
                    </p>
                    <ProfessionalProjects :project_id="projectContent.id" :professional_id="this.professional.id"></ProfessionalProjects>
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
            projectVideos: [],
            videoLink: '',
            projectContent: [],
            otherProjects: [],
            professional: [],
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
                this.professional = data.project_by_slug.professional;
                this.otherProjects = data.project_by_slug.professional.projects;
                this.reviews = data.project_by_slug.professional.reviews;
                this.totalReviews = this.reviews.length;  
                this.projectVideos = data.project_by_slug.project_videos;

                if(Object.keys(this.projectVideos).length != 0)
                {
                    if(this.projectVideos[0].video_type==='youtube')
                    {
                        this.videoLink = 'https://www.youtube.com/embed/' + this.projectVideos[0].video_id;
                    }

                    if(this.projectVideos[0].video_type==='vimeo')
                    {
                        this.videoLink = 'https://player.vimeo.com/video/'+ + this.projectVideos[0].video_id +'?title=0&amp;byline=0&amp;portrait=0&amp;app_id=122963' ;
                    }
                    
                }

                return data.professional_by_slug;
            }
        }
    },
    methods: {
        displayImageModal(index) 
        {
            $('[data-fancybox="gallery"]').fancybox();
            console.log(Object.keys(this.otherProjects).length);
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

p
{
    color: #25130e;
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

.description
{
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 22px;
    color: #25130e;
    margin: 20px 0;
    font-family: 'Open Sans';
    white-space: pre-line;
}

.multiple-items
{
    width: 95%;
    margin: auto;
}

.slider-image
{
    width: 100%;
    height: 100%;
    object-fit: contain;
}
</style>
