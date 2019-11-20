<template>
    <div class="container">
        <div v-if="!hasType || isType('projects')">
        <h2 class="p-5">Projects</h2>
            <ais-instant-search
                    :search-client="searchClient"
                    index-name="projects"
            >
                <ais-configure :query="query"  :hitsPerPage="12">
                    <ais-infinite-hits>
                        <div class="row" slot-scope="{ items , refinePrevious, refineNext }">
                            <div v-for="item in items" :key="item.id" class="col-md-3 mb-5">
                                {{item.name}}
                                <ProjectList :project="item"/>
                            </div>
                            <div class="col-12 pb-5">
                                <b-button @click="refineNext">Load more Projects</b-button>
                            </div>
                        </div>
                    </ais-infinite-hits>
                </ais-configure>
            </ais-instant-search>
        </div>
        <div v-if="!hasType || isType('professionals')">
            <h2 class="p-5">Profesionals</h2>
            <ais-instant-search
                    :search-client="searchClient"
                    index-name="professionals"
            >
                <ais-configure :query="query"  :hitsPerPage="12">
                    <ais-infinite-hits>
                        <div class="row" slot-scope="{ items , refinePrevious, refineNext }">
                            <div v-for="item in items" :key="item.id" class="col-md-3 mb-5">
                                {{item.name}}
                                <ProfessionalList :professional="item"/>
                            </div>
                            <div class="col-12 pb-5">
                                <b-button @click="refineNext">Load more Professionals</b-button>
                            </div>
                        </div>
                    </ais-infinite-hits>
                </ais-configure>
            </ais-instant-search>
        </div>
    </div>
</template>

<script>
    import algoliasearch from 'algoliasearch/lite';
    import AisInfiniteHits from "vue-instantsearch/src/components/InfiniteHits";
    import ProjectList from "../Projects/ProjectList";
    import ProfessionalList from "../Professionals/ProfessionalList";


    export default {
        name: "Search",
        components: {ProfessionalList, ProjectList, AisInfiniteHits},
        data(){
            return {
                searchClient: algoliasearch(
                    'JM6090N65T',
                    '0d201b6bf1664e41e165f3dc793576c6'),
            }
        },
        computed:{
            query(){
                return this.$route.query.q;
            },
            hasType(){
                return !!this.$route.params.type;
            }
        },
        methods:{
            isType(typeName){
                return this.$route.params.type === typeName;
            }
        }
    }
</script>

<style scoped>

</style>
