<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="search-wrapper text-left">
        <input
                @focus="inputFocus(true)"
                @blur="inputFocus(false)"
                @keypress.enter="search"
                v-model="query"
                size="sm"
                :class="`keyword-field search-width input-${theme}`"
                placeholder="Search Locations, Vendors, Articles"
        >
        <div
                tabindex="0"
                class="search-results"
                @focus="resultFocus(true)"
                @blur="resultFocus(false)"
                v-if="showResults">
            <ais-instant-search
                    :search-client="searchClient"
                    index-name="projects"
            >
                <ais-configure :query="query"  :hitsPerPage="4">
                <ais-autocomplete :indices="[{ label: 'Professionals', value: 'professionals' }]">
                    <div slot-scope="{ currentRefinement, indices }">

                        <div v-for="index in indices" :key="index.label">
                            <template>
                                <h5 class="p-1">{{index.label === 'primary'? 'Projects' : index.label}} (<router-link :to="{name:'search', params:{type:index.index}, query:{q: query}}">See all</router-link>)</h5>
                                <ul class="list-unstyled">
                                    <b-media class="mt-0 mb-1 p-1" v-for="item in index.hits" :key="item.id">
                                        <template v-slot:aside>
                                            <!--<b-img blank blank-color="#abc" width="10" alt="placeholder"></b-img>-->
                                        </template>
                                        <b-link variant="primary" class="link-dark" :to="`/projects/${item.slug}`">
                                            <ais-highlight attribute="name" :hit="item"/>
                                        </b-link>
                                        <div class="text-muted">{{item.country}}</div>
                                    </b-media>
                                </ul>
                            </template>
                        </div>
                    </div>
                </ais-autocomplete>
                </ais-configure>
            </ais-instant-search>
        </div>
    </div>

</template>

<script>

    import algoliasearch from 'algoliasearch/lite';

    export default {
        name: "SearchBar",
        props: ['theme'],
        data(){
            return {
                inputFocused:false,
                resultFocused:false,
                query: '',
                searchClient: algoliasearch(
                    'JM6090N65T',
                    '0d201b6bf1664e41e165f3dc793576c6'),
            }
        },
        computed:{
            showResults(){
                return this.inputFocused || this.resultFocused
            }
        },
        methods:{
            inputFocus(focus){
                setTimeout(()=>{
                        this.inputFocused = focus;
                    }, focus? 0 : 200);
            },
            resultFocus(focus){
                setTimeout(()=>{
                    this.resultFocused = focus;
                }, focus? 0 : 200);
            },
            search(){
                this.$router.push(`/search?q=${this.query}`);
            }
        }
    }
</script>

<style scoped>
    .keyword-field
    {
        font-weight: 400;
        font-family: 'Cormorant Garamond';
        font-style: italic;
        font-size: 16px;
        color:#FFFFFF;
        opacity: 0.7;
        border:none;
        background: none;
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid #ffffff;
        margin-left: -20px;
        display: none;
    }
    .search-width
    {
        width:235px !important;
    }
    .input-white::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #ffffff;
        opacity: 0.7; /* Firefox */
        font-size: 16px;
    }
    .input-white:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #ffffff;
        opacity: 0.7;
        font-size: 16px;
    }
    .input-white::-ms-input-placeholder { /* Microsoft Edge */
        color: #ffffff;
        opacity: 0.7;
        font-size: 16px;
    }
    .input-black::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: #26140E;
        opacity: 0.7; /* Firefox */
        font-size: 16px;
    }
    .input-black:-ms-input-placeholder { /* Internet Explorer 10-11 */
        color: #26140E;
        opacity: 0.7;
        font-size: 16px;
    }
    .input-black::-ms-input-placeholder { /* Microsoft Edge */
        color: #26140E;
        opacity: 0.7;
        font-size: 16px;
    }
    .search-wrapper{
        display: inline-block;
        position: relative;
    }

    .search-results{
        outline: 0;
        top: 30px;
        right: 0;
        width: 400px;
        max-height: calc(100vh - 200px);
        overflow: auto;
        position: absolute;
        background-color: #f8f8f8;
        border-radius: 5px;
        box-shadow: #cdcdcd 0px 2px 5px  ;
    }
</style>
