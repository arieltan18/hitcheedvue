<template>
    <div class="container">
        <div>
            <h1>Articles</h1>
        </div>
        <div class="container">
            <div class="row col-md-12">
                <div v-if="articleItems.length >0" >
                    <div v-for="articleItem in articleItems" :key="articleItem.id" class="col-sm-3 float-left">
                        <ArticleItems :articleItem="articleItem" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ArticleItems from './ArticleItems.vue';
import axios from 'axios';

export default {
    name: "Articles",
    components: {
        ArticleItems
    },
    data() {
        return {
            articleItems: []
        }
    },
    methods: {
        async getFullArticleItems () {
            //get the current timestamp
            const date = Date.now();

            const baseURL = 'https://api.storyblok.com/v1/cdn/stories?version=published';
            const url = baseURL + '&token=QNx6VlHAVqJWs82bNe8Ymgtt&starts_with=blog' + '&cv=' + date;

            axios.defaults.headers = {
                'Content-Type': 'application/json',
                'cache-control':'no-cache'
            }
            await axios.get(url)
            .then((response) => {
                this.articleItems = response.data.stories;
            })
            .catch(error => {
                console.log(error);
            });
        },
    },
    mounted() 
    {
        this.getFullArticleItems();
    }
}

</script>

<style scoped>
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
}
</style>