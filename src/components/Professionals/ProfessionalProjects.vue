<template>
    <div>
        <h3>Other Projects by Professionals</h3>
        <div class="row projects" v-if="this.project_id!=0">
            <div class="col-sm-4" v-for="project in otherProjects.data" :key="project.id">
                <div class="thumbnail">
                    <router-link :to="{ name: 'project', params: { slug: project.slug }}">
                        <div class="image-holder">
                            <img :alt="project.name" :src="project.image">
                        </div>
                        <div class="caption text-center">
                            <p class="font-weight-bold">{{project.name}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="container mt-5" v-if="hasMorePages && !completeFetching">
                <button class="see-more-btn" :disabled="isLoading" @click="fetchOtherProjects()">See More Projects<i v-if="isLoading" class="fa fa-spinner fa-spin"></i></button>
            </div>
        </div>
        <div class="row professional" v-else>
            <div class="col-sm-4" v-for="project in allOtherProjects.data" :key="project.id">
                <div class="thumbnail">
                    <router-link :to="{ name: 'project', params: { slug: project.slug }}">
                        <div class="image-holder">
                            <img :alt="project.name" :src="project.image">
                        </div>
                        <div class="caption text-center">
                            <p class="font-weight-bold">{{project.name}}</p>
                        </div>
                    </router-link>
                </div>
            </div>
            <div class="container mt-5" v-if="hasMorePages && !completeFetching">
                <button class="see-more-btn" :disabled="isLoading" @click="fetchAllOtherProjects()">See More Projects<i v-if="isLoading" class="fa fa-spinner fa-spin"></i></button>
            </div>
        </div>
    </div>
</template>

<script>
import { PROJECTS_BY_PROFESSIONAL_PAGINATE } from '../../graphql/graphql.js';
import { OTHER_PROJECTS_BY_PROFESSIONAL_PAGINATE } from '../../graphql/graphql.js';

export default {
    name: "ProfessionalProjects",
    props:[  'project_id' , 'professional_id' ],
    data() {
        return {
            allOtherProjects:[],
            otherProjects:[],
            isLoading:false,
            first: 3,
            pageNumber: 1,
            totalCount: '',
            hasMorePages: false,
            completeFetching: false
        }
    },
    apollo: {
        allOtherProjects: {
            query: PROJECTS_BY_PROFESSIONAL_PAGINATE,
            variables() {
                return {
                    professional_id: this.professional_id,
                    first: this.first,
                    page: this.pageNumber
                }
            },
            loadingKey: 'loading',
            update(data) {
                // console.log(data.projects_by_professional_paginate.paginatorInfo.total);
                this.totalCount = data.projects_by_professional_paginate.paginatorInfo.total;
                this.hasMorePages = data.projects_by_professional_paginate.paginatorInfo.hasMorePages;
                
                return data.projects_by_professional_paginate;
            }
        },
        otherProjects: {
            query: OTHER_PROJECTS_BY_PROFESSIONAL_PAGINATE,
            variables() {
                return {
                    id: this.project_id,
                    professional_id: this.professional_id,
                    first: this.first,
                    page: this.pageNumber
                }
            },
            loadingKey: 'loading',
            fetchPolicy: 'network-only',
            result({data}){
                this.totalCount = data.other_projects_by_professional_paginate.paginatorInfo.total;
                this.hasMorePages = data.other_projects_by_professional_paginate.paginatorInfo.hasMorePages;
            },
            update(data) 
            {
                // console.log(data.other_projects_by_professional_paginate.paginatorInfo.total);
                // this.totalCount = data.other_projects_by_professional_paginate.paginatorInfo.total;
                // this.hasMorePages = data.other_projects_by_professional_paginate.paginatorInfo.hasMorePages;
                
                return data.other_projects_by_professional_paginate;
            }
        },
    },
    methods: {
        fetchOtherProjects() {
            this.isLoading=true;
            //get another 3 projects
            this.first = this.first + 3;

            this.$apollo.queries.otherProjects.refetch()

            this.isLoading = false;
        },
        fetchAllOtherProjects() {
            this.isLoading=true;
            //get another 3 projects
            this.first = this.first + 3;

            this.$apollo.queries.allOtherProjects.refetch()

            this.isLoading = false;
        },

    }
}
</script>

<style scoped>
h3
{
    font-weight: 500;
    font-family: 'Cormorant Garamond';
    font-size: 40px;
    line-height: 30px;
    color: #25130e;
    margin: 30px 0;
}

a
{
    color: rgb(137, 209, 207);
    text-decoration: none;
}

a:hover
{
    text-decoration: none;
}

.image-holder
{
    width: 100%;
    height: 406px;
    overflow: hidden;
}

.thumbnail
{
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
}

.thumbnail img
{
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
    object-fit: cover;
}

.thumbnail.caption
{
    padding: 9px;
    color: #333;
}

.text-center
{
    text-align: center;
}

.font-weight-bold
{
    margin-top: 5px !important;
    font-weight: bold;
}

.caption p
{
    font-size: 14px;
    letter-spacing: 1px;
    line-height: 20px;
    color: #25130e;
    margin: 20px 0;
}

.see-more-btn
{
    font-size: 14px;
    letter-spacing: 1px;
    color: #25130e;
    font-family: 'Open Sans';
    font-weight: 700;
    border-radius: 7px;
    background-color: #fff;
    border: 1px solid #dddad9;
    text-transform: uppercase;
    padding: 10px 15px;
}
</style>