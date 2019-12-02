<template>
    <div class="container">
        <div class="row">
            <div v-for="professional in professionalsByTag.data" :key="professional.professional.id" class="col-md-3 mb-5">
                <ProfessionalList :professional="professional.professional" />
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import { PROFESSIONALS_BY_TAG } from '../../graphql/graphql.js';

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
            query: PROFESSIONALS_BY_TAG,
            variables() {
                return {
                    tag_id: this.tag_id,
                    first: 20
                }
            },
            update(data)
            {
                return data.professionals_by_tag;
            }
        },
    }
}
</script>

<style scoped>

</style>