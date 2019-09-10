import Vue from 'vue'
import VueRouter from 'vue-router'
import Articles from '../components/Articles'
import ArticleContent from '../components/ArticleContent'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: '',
    routes: [
        {
            path: '/',
            component: Articles
        },
        { 
            path: '/articles/:slug', 
            component: ArticleContent
        },
    ]
})