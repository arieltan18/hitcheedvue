<template>
    <div>
        <div class="container-fluid bg-color">
            <div class="row">
                
            </div>
        </div>
        <div class="container-fluid padding">
            <div class="row">
                <div class="col-md-8 project-content">
                    <h3>About this Projects</h3>
                </div>
            </div>
        </div>
            
    </div>
</template>

<script>
import axios from 'axios';


export default {
    name: "ProjectContent",
    data() {
        return {
            project_id: '',
            projectContent: [],
        }
    },
    created() {
        if(this.$route.query.id) {
            this.project_id = this.$route.query.id;
        }
    },
    methods: {
        getProjectContent () {
            const url = "https://laravel.hitcheed.com/api/v1/projects/" + this.project_id;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache'
            }
            axios.get(url)
            .then((response) => {

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
    font-size: 40px;
    line-height: 30px;
    color: #25130e;
    margin: 30px 0;
}

.professional-content
{
    text-align: left;
}
</style>