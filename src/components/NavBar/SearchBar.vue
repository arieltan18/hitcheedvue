<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div class="text-left search-wrapper">
        <i @click="toggleSearch" class="fa fa-search search-icon" aria-hidden="true" :style="`color:${theme};`"></i>
        <input
                @focus="inputFocus(true)"
                @blur="inputFocus(false)"
                @keypress.enter="search"
                v-model="query"
                size="sm"
                :class="`keyword-field search-width input-${theme} ${showSearch && 'show-input'}`"
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
                <ais-configure :query="query"  :hitsPerPage="4" :distinct="true">
                <ais-autocomplete :indices="[{ label: 'Professionals', value: 'professionals' }]">
                    <div slot-scope="{ currentRefinement, indices }">

                        <div class="p-2" v-for="index in indices" :key="index.label">
                            <template v-if="index.hits.length">
                                <h5 class="p-1 text-primary">{{index.label === 'primary'? 'Projects' : index.label}} <b-button class="float-right" variant="link" :to="{name:'search', params:{type:index.index}, query:{q: query}}">See all</b-button></h5>
                                <b-list-group class="w-100">
                                    <b-list-group-item class="mt-0 p-1" v-for="item in index.hits" :key="item.id" :to="`/${index.index}/${item.slug}`">
                                        <div class="w-100">
                                            <h6 class="m-0 p-0 mt-1"><ais-highlight class="title" attribute="name" :hit="item"/></h6>
                                            <div class="text-left"><small>{{item.country}}</small></div>
                                        </div>
                                    </b-list-group-item>
                                </b-list-group>
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
                showSearch: false,
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
                return (this.inputFocused || this.resultFocused) && !!this.query
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
            toggleSearch(){
              this.showSearch = !this.showSearch;
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
        transition: all 0.25s;
        width:0px !important;
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
        margin-left: 5px !important;
    }

    .input-black
    {
        font-weight: 400;
        font-family: 'Cormorant Garamond';
        font-style: italic;
        font-size: 16px;
        color:#26140E;
        opacity: 0.7;
        border:none;
        background: none;
        outline: none;
        box-shadow: none;
        border-bottom: 1px solid #26140E;
    }

    .show-input
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
        z-index: 1000;
        outline: 0;
        top: 30px;
        right: 0;
        width: 400px;
        max-height: calc(100vh - 150px);
        overflow: auto;
        position: absolute;
        background-color: #f8f8f8;
        border-radius: 5px;
        box-shadow: #cdcdcd 0px 2px 5px  ;
    }
</style>
