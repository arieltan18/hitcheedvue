import Vue from 'vue';
import Vuex from 'vuex';
import article from './modules/article';
import VueSimpleMarkdown from 'vue-simple-markdown'
// You need a specific loader for CSS files like https://github.com/webpack/css-loader
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
 
Vue.use(VueSimpleMarkdown);
Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        article
    }
});

