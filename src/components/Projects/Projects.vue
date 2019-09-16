<template>
    <div class="container-fluid mb-5" v-if="projects.length >0" >
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <h1>Projects</h1>
                </div>
            </div>
            <div class="row">
                <div v-for="professional in professionals" :key="professional.id" class="col-md-4 projects-padding mb-4">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
//import ProfessionalList from './ProfessionalList.vue';
import axios from 'axios';

export default {
    name: "Projects",
    data() {
        return {
            projects: []
        }
    },
    methods: {
        async getProjectList () {

            //const api = "https://laravel.hitcheed.com/api/v1/Projects";
            const api = 'http://hitcheedlaravel.test/api/v1/Projects';

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache',
            }
            await axios.get(api,{crossDomain: true})
            .then((response) => {
                //console.log(response.data.data);
                this.professionals = response.data.data;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted() 
    {
        this.getProjectList();
    }
}

</script>

<style scoped>
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
}

.professional-padding
{
    padding-left: 30px;
    padding-right: 30px;
}

.text-center
{
    text-align: center;
}
</style>