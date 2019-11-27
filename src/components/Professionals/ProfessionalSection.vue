<template>
    <div class="container">
        <div class="row">
            <div v-for="professional in professionals.data" :key="professional.id" class="col-md-3 professional-padding mb-5">
                <ProfessionalList :professional="professional" />
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import { PROFESSIONALS_BY_CATEGORY_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: 'ProfessionalSection',
    props: [ 'category_id', 'first', 'page' ],
    components: {
        ProfessionalList,

    },
    data() {
        return {
            professionals: [],
        }
    },
    apollo: {
        //query the first 8 professionals by category with pagination
        professionals: {
            query: PROFESSIONALS_BY_CATEGORY_PAGINATE,
            variables() {
                return {
                    category_id: this.category_id,
                    first : this.first,
                    page: this.page,
                }
            },
            update(data){
                return data.professionals_by_category_paginate;
            }
        },
    }
}
</script>

<style scoped>

</style>