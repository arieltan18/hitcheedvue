<template>
    <div class="container">
        <div class="row">
            <div v-for="professional in professionals.data" :key="professional.id" class="col-md-3 professional-padding mb-5">
                <ProfessionalList :professional="professional" />
            </div>
        </div>
        <div class="container mt-5" v-if="hasMorePages && !completeFetching && this.$route.name=='professionalsByCategoryAll'">
            <button class="see-more-link" :disabled="isLoading" @click="loadMore()">See More {{ this.category_name }}<i v-if="isLoading" class="fa fa-spinner fa-spin"></i></button>
        </div>
    </div>
</template>

<script>
import ProfessionalList from './ProfessionalList.vue';
import { PROFESSIONALS_BY_CATEGORY_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: 'ProfessionalSection',
    props: [ 'category_id', 'category_name', 'first', 'page' ],
    components: {
        ProfessionalList
    },
    data() {
        return {
            professionals: [],
            isLoading: false,
            pageNumber: 1,
            totalCount: '',
            hasMorePages: false,
            completeFetching: false
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
            loadingKey: 'loading',
            result({data}){
                this.totalCount = data.professionals_by_category_paginate.paginatorInfo.total;
            },
            update(data)
            {    
                this.totalCount = data.professionals_by_category_paginate.paginatorInfo.total;
                this.hasMorePages = data.professionals_by_category_paginate.paginatorInfo.hasMorePages;

                return data.professionals_by_category_paginate;
            }
        },
    },
    methods: {
        loadMore() {
            this.isLoading =true;
            this.pageNumber++;
            this.$apollo.queries.professionals.fetchMore({
                variables: {
                    category_id: this.category_id,
                    first : this.first,
                    page: this.pageNumber,
                },
                // Transform the previous result with new data
                updateQuery: (previousResult, { fetchMoreResult }) => {
                    //set the loading to false
                    this.isLoading = false;

                    const newData = fetchMoreResult.professionals_by_category_paginate.data;

                    this.professionals.data.push(...newData);

                    if(this.professionals.data.length >= this.totalCount)
                    {
                        this.completeFetching = true;
                    }
                },
            });
        }
    }
}
</script>

<style scoped>
.see-more-link
{
    border:none;
    text-decoration: none;
    color: #26140E;
    font-style: italic;
    font-size: 18px;
    text-align: center;
    font-family: 'Cormorant Garamond';
    border-bottom: 0.5px solid #26140E;
    text-transform: capitalize;
}
</style>