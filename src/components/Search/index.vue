<template>
    <div class="container">
        <div v-if="projects.length">
        <h2 class="p-5">Projects</h2>
            <div class="row">
                <div v-for="project in projects" :key="project.id" class="col-md-3 mb-5">
                    <ProjectList :project="project"/>
                </div>
                <div class="col-12 pb-5">
                    <b-button v-if="projects.hasMore" :disabled="projects.isLoading" @click="loadMore('projects')">Load more Projects</b-button>
                </div>
            </div>
        </div>
        <div v-if="professionals.length">
            <h2 class="p-5">Professionals</h2>
            <div class="row" >
                <div v-for="professional in professionals" :key="professional.id" class="col-md-3 mb-5">
                    <ProfessionalList :professional="professional"></ProfessionalList>
                </div>
                <div class="col-12 pb-5">
                    <b-button v-if="professionals.hasMore" :disabled="professionals.isLoading" @click="loadMore('professionals')">Load more Professionals</b-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import algoliasearch from 'algoliasearch/lite';
    import ProjectList from "../Projects/ProjectList";
    import ProfessionalList from "../Professionals/ProfessionalList";
    import Http from "../../services/Http";


    export default {
        name: "Search",
        components: {ProfessionalList, ProjectList},
        data(){
            return {
                projects: [],
                professionals: [],
                searchClient: algoliasearch(
                    'JM6090N65T',
                    '0d201b6bf1664e41e165f3dc793576c6'),
            }
        },
        computed:{
            query(){
                return this.$route.query.q || '';
            },
            type(){
                return this.$route.params.type||'';
            },
            hasType(){
                return !!this.$route.params.type;
            }
        },
        watch:{
          query(){
            this.search();
          }
        },
        methods:{
            isType(typeName){
                return this.$route.params.type === typeName;
            },
            search(){
              Http.get(`/v1/search?q=${this.query}&type=${this.type}`).then(res=>{
                  Object.keys(res).forEach((key)=>{
                    const records = res[key]['data'];
                    records.currentPage = res[key]['current_page'];
                    records.hasMore = res[key]['current_page'] < res[key]['last_page'];
                    this[key] = records;
                  });
              })
            },
            loadMore(type){
                const nextPage = this[type].currentPage + 1;
                this[type].isLoading = true;
                Http.get(`/v1/search?q=${this.query}&type=${type}&page=${nextPage}`).then(res=>{
                    Object.keys(res).forEach((key)=>{
                        const records = [...this[key], ...res[key]['data']];
                        records.currentPage = res[key]['current_page'];
                        records.hasMore = res[key]['current_page'] < res[key]['last_page'];
                        this[key] = records;
                    })
                })
            },
        },
        mounted(){
            this.search();
        }
    }
</script>

<style scoped>

</style>
