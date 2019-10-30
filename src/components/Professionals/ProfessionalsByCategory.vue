<template>
    <div class="container-fluid mb-5" >
        <div class="container">
            <div class="row mb-2">
                <div class="col-sm-12 text-center">
                    <h1></h1>
                    <h1>{{ this.professionals }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import { PROFESSIONALS_BY_CATEGORY } from '../../graphql/graphql.js';

export default {
    name: "ProfessionalsByCategory",
    components: {
        ProfessionalList
    },
    data() {
        return {
            professionals: [],
            category_id: this.$route.query.category
        }
    },
    apollo: {
        professionals: {
            query: PROFESSIONALS_BY_CATEGORY,
            variables() {
                return {
                    category_id: this.$route.query.category,
                    cat_id : this.$route.query.category,
                }
            },
            update(data){
                return data.professionals_by_category;
            }
        }
    },
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

.header-link
{
    text-decoration: none;
    color: black;
}
</style>
