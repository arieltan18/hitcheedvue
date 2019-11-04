<template>
    <div class="container-fluid mb-5" >
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center mt-2 mb-5">
                    <router-link class="header-link" :to="{ name: 'professionalCategory', params: { 'id': categoryID }}">
                        <h1>{{categoryName}}</h1>
                    </router-link>
                </div>
            </div>
            <div>
                <PopularSearchesNav></PopularSearchesNav>
            </div>
            <div class="row">
                <div v-for="professional in professionals" :key="professional.id" class="col-md-3 professional-padding mb-5">
                    <ProfessionalList :professional="professional" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import PopularSearchesNav from "../PopularSearches/PopularSearchesNav.vue";
import ProfessionalList from './ProfessionalList.vue';
import axios from 'axios';

export default {
    name: "ProfessionalCategory",
    components: {
        ProfessionalList,
        PopularSearchesNav
    },
    data() {
        return {
            professionals: [],
            categoryName: '',
            categoryID: 1
        }
    },
    props:[
        'professionalCategories'
    ],
    methods: {
        async getProfessionalList () {

            const api = process.env.VUE_APP_HITCHEED_API + '/v1/professionals/category/' + this.$route.params.id;
            //const api = 'http://hitcheedlaravel.test/api/v1/professionals/category/' + this.$route.params.id;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache',

            }
            await axios.get(api,{crossDomain: true})
            .then((response) => {
                //console.log(response.data);
                this.professionals = response.data.professionals;
                this.categoryName = response.data.category_name;
                this.categoryID = response.data.category_id;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted() 
    {
        if(this.$route.params.id)
        {
            this.getProfessionalList();
        }
        else
        {
            //console.log(this.professionalCategories);
            this.professionals = this.professionalCategories.professionals;
            this.categoryName = this.professionalCategories.category_name;
            this.categoryID = this.professionalCategories.category_id;
        }
        
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
    padding-left: 10px;
    padding-right: 10px;
}

.text-center
{
    text-align: center;
}

.header-link
{
    text-decoration: none;
    color: black;
}
</style>
