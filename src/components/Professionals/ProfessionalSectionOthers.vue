<template>
    <div class="container mt-3">
        <div class="row">
            <div v-for="professional in professionals.data" :key="professional.id" class="col-md-3 professional-padding mb-5">
                <ProfessionalList :professional="professional" />
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import { PROFESSIONALS_OTHER_COUNTRY_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: 'ProfessionalSectionOthers',
    props: [ 'first', 'page' ],
    components: {
        ProfessionalList
    },
    data() {
        return {
            professionals: [],
        }
    },
    apollo: {
        //query the first 8 professionals by category with pagination
        professionals: {
            query: PROFESSIONALS_OTHER_COUNTRY_PAGINATE,
            variables() {
                return {
                    first : this.first,
                    page: this.page,
                }
            },
            update(data){
                return data.professionals_other_country_paginate;
            }
        },
    }
}
</script>

<style scoped>

</style>