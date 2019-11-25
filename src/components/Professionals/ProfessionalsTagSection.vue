<template>
    <div class="container">
        <div class="row">
            <div v-for="professional in professionalsByTag" :key="professional.professional.id" class="col-md-3 mb-5">
                <ProfessionalList :professional="professional.professional" />
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import { PROFESSIONAL_FILTER_BY_TAGS } from '../../graphql/graphql.js';

export default {
    name: 'ProfessionalTagSection',
    props: [ 'tag_id' ],
    data() {
        return { 
            professionalsByTag: []
        }
    },
    components: {
        ProfessionalList,
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