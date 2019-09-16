<template>
    <div>
        <div class="container-fluid bg-color">
            <div class="row">
                <img class="top-image" >
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

export default {
    name: "ProjectContent",
    components: {
        ProfessionalReviews,
        ProfessionalProjects
    },
    data() {
        return {
            project_id: '',
            projectContent: [],
            otherProjects: [],
            reviews: [],
            totalReviews: ''
        }
    },
    created() {
        this.project_id = this.$route.params.id;
    },
    methods: {
        getProjectContent () {
            //const url = "https://laravel.hitcheed.com/api/v1/projects/" + this.project_id;
            const url = "http://hitcheedlaravel.test/api/v1/projects/" + this.project_id;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            }
            axios.get(url)
            .then((response) => {
                this.projectContent = response.data.project;
                this.otherProjects = response.data.other_projects;
                this.totalReviews = response.data.total_reviews;
                this.reviews = response.data.reviews;
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        }
    },
    mounted() {
        this.getProjectContent();
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
</style>