import Vue from 'vue'
import VueRouter from 'vue-router'
import ArticleContent from '../components/Articles/ArticleContent'
import Home from '../components/Home'

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    base: '',
    routes: [
        {
            path: '/',
            component: Home
        },
        { 
            path: '/articles/:slug', 
            component: ArticleContent
        },
    ]
})