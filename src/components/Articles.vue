<template>
    <div>
        <div>
            <h1>Articles</h1>
        </div>
        <div class="container">
            <div v-if="articleItems.stories.length >0" >
                <div v-for="articleItem in articleItems.stories" :key="articleItem.id" class="col-sm-3 float-left">
                    <ArticleItems :articleItem="articleItem" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import ArticleItems from './ArticleItems.vue';


export default {
    name: "Articles",
    components: {
        ArticleItems
    },
    computed: {
        ...mapGetters(['articleItems'])
    },
    created() {
        this.$store.dispatch('getFullArticleItems');
    },

}

</script>

<style scoped>
h1 {
    font-family: 'Cormorant Garamond';
    font-weight: normal;
    font-size: 36px;
}
</style>