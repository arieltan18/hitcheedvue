<template>
    <div class="container-fluid mb-5 pb-5">
        <h6>Popular {{ this.category_name }} Searches</h6>
        <div class="row d-flex justify-content-between">
            <div v-for="tag in tags.data" :key="tag.id">
                <div class="block">
                    {{ tag.name }}
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { CATEGORIES_FILTER } from '../../graphql/graphql.js';
import { TAGS_BY_CATEGORY_BY_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: 'PopularSearchesNav',
    data() {
        return {
            category_name: this.$route.query.category
        }
    },
    apollo: {
        category: {
            query: CATEGORIES_FILTER,
            variables() {
                return {
                    name: this.category_name
                }
            },
            update(data)
            {
                return data.category_filter;
            }
        },
        //query the first 6 tags by category with pagination
        tags: {
            query: TAGS_BY_CATEGORY_BY_PAGINATE,
            variables() {
                return {
                    category_id: this.category.id,
                    first : 6,
                    page: 1,
                }
            },
            update(data) 
            {
                return data.tags_by_category_paginate;
            }
        }
    },

}
</script>

<style lang="scss" scoped>
.container-fluid
{
    border-bottom: 1px solid #f5f5f4;
}
h6
{
    text-align: left;
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-size: 20px;
    color: #26140E;
    margin-bottom: 16px;
}

.block
{
    border:0.5px solid rgba(38, 20, 14, .5);
    color: #26140E;
    font-size: 12px;
    letter-spacing: 1.2px;
    font-family: 'Open Sans';
    text-align: center;
    padding: 12px 25px;
    text-transform: uppercase;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
}
</style>