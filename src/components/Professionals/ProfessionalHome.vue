<template>
    <div class="container-fluid mb-5" v-if="professionals.length >0" >
        <div class="container" v-for="(value, index) in professionals" :key="index">
            <ProfessionalCategory :professionalCategories="value"/>
        </div>
    </div>
</template>

<script>
import ProfessionalCategory from './ProfessionalCategory.vue';
//import ProfessionalList from './ProfessionalList.vue';
import axios from 'axios';

export default {
    name: "Professionals",
    metaInfo:{
        title: 'Professionals'
    },
    components: {
        ProfessionalCategory
    },
    data() {
        return {
            professionals: []
        }
    },
    methods: {
        async getProfessionalList () {

            const hotelsAPI = process.env.VUE_APP_HITCHEED_API + '/v1/professionals/category/1';
            const bridalStudiosAPI = process.env.VUE_APP_HITCHEED_API + '/v1/professionals/category/2';
            const photographersAPI = process.env.VUE_APP_HITCHEED_API + '/v1/professionals/category/5';

            // const hotelsAPI = 'http://hitcheedlaravel.test/api/v1/professionals/category/1';
            // const bridalStudiosAPI = 'http://hitcheedlaravel.test/api/v1/professionals/category/2';
            // const photographersAPI = 'http://hitcheedlaravel.test/api/v1/professionals/category/13';

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache',

            }
            await axios.get(hotelsAPI,{crossDomain: true})
            .then((response) => {
                this.professionals.push(response.data);
            })
            .catch(error => {
                console.log(error);
            });

            await axios.get(bridalStudiosAPI,{crossDomain: true})
            .then((response) => {
                this.professionals.push(response.data);

            })
            .catch(error => {
                console.log(error);
            });

            await axios.get(photographersAPI,{crossDomain: true})
            .then((response) => {
                this.professionals.push(response.data);
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted()
    {
        this.getProfessionalList();
        //console.log(this.professionals);
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
