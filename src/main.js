import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import store from './store/index.js';
import { createProvider } from './vue-apollo'

Vue.use(BootstrapVue)
Vue.use(VueSimpleMarkdown)
Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
  apolloProvider: createProvider(),
  router
}).$mount('#app')
