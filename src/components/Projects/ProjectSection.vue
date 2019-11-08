<template>
    <div class="container">
        <div class="row">
            <div v-for="project in projects.data" :key="project.id" class="col-md-3 mb-5">
                <ProjectList :project="project" />
            </div>
        </div>
    </div>
</template>

<script>
import ProjectList from './ProjectList.vue';
import { PROJECTS_BY_CATEGORY_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: 'ProjectSection',
    props: [ 'category_id', 'first', 'page' ],
    components: {
        ProjectList,
    },
    apollo: {
        //query the first 8 professionals by category with pagination
        projects: {
            query: PROJECTS_BY_CATEGORY_PAGINATE,
            variables() {
                return {
                    category_id: this.category_id,
                    first : this.first,
                    page: this.page,
                }
            },
            update(data){
                return data.projects_by_category_paginate;
            }
        },
    }
}
</script>

<style scoped>

</style>