<template>
    <div class="container">
        <div class="">
            <div v-for="professional in professionalsByTag" :key="professional.professional.id" class="row">
                <div v-for="project in professional.professional.projects" :key="project.id" class="col-md-3 mb-5">
                    <ProjectList :project="project" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProjectList from './ProjectList.vue';
import { PROFESSIONAL_FILTER_BY_TAGS } from '../../graphql/graphql.js';

export default {
    name: 'ProjectTagSection',
    props: [ 'tag_id' ],
    data() {
        return { 
            professionalsByTag: []
        }
    },
    components: {
        ProjectList,
    },
    apollo: {
        //get the projects of professionals filter by tags 
        professionalsByTag: {
            query: PROFESSIONAL_FILTER_BY_TAGS,
            variables() {
                return {
                    tag_id: this.tag_id
                }
            },
            update(data)
            {
                return data.professional_filter_by_tags;
            }
        },
    }
}
</script>

<style scoped>

</style>