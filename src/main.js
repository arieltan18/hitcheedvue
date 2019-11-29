import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import BootstrapVue from 'bootstrap-vue'
import './assets/css/bootstrap.scss';
import './assets/css/style.css';
import store from './store/index.js';
import { createProvider } from './vue-apollo'
import VueChatScroll from 'vue-chat-scroll'
import VueAxios from 'vue-axios'
import axios from 'axios';
import InstantSearch from 'vue-instantsearch';
import VueMeta from "vue-meta";


Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.use(VueSimpleMarkdown);
Vue.use(VueChatScroll);
Vue.use(InstantSearch);
Vue.use(VueMeta);

Vue.config.productionTip = false;


new Vue({
  store,
  render: h => h(App),
  apolloProvider: createProvider(),
  router
}).$mount('#app')
