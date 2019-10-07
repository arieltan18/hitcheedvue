<template>
    <div class="container-fluid mb-5" v-if="professionals.data">
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <router-link :to="{ name: 'professionalHome'}" class="header-link">
                        <h1>Professionals</h1>
                    </router-link>
                </div>
            </div>
            <div class="row">
                <div v-for="professional in professionals.data" :key="professional.id" class="col-md-4 professional-padding mb-4">
                    <ProfessionalList :professional="professional" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import gql from 'graphql-tag'


export default {
    name: "Professionals",
    components: {
        ProfessionalList
    },
    apollo: {
        professionals: gql`
        query {
            professionals:professionals_paginate(first: 10) {
            data {
                    id
                    name
                    slug
                    cover_image
                    around_image
                    profile_image
                }
            }
        }
        `
    },
    // methods: {
    //     async getProfessionalList () {

    //         const api = process.env.VUE_APP_HITCHEED_API + "/v1/professionals";
    //         //const api = 'http://hitcheedlaravel.test/api/v1/professionals';

    //         axios.defaults.headers = {
    //             'Content-Type': 'application/json',
    //             'cache-control':'no-cache',

    //         }
    //         await axios.get(api,{crossDomain: true})
    //         .then((response) => {
    //             //console.log(response.data.data);
    //             this.professionals = response.data.data;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    //     },
    // },
    // mounted() 
    // {
    //     this.getProfessionalList();
    // }
}

</script>

<style scoped>
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
    text-decoration: none;
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

.header-link
{
    text-decoration: none;
    color: black;
}
</style>