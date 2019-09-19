import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueSimpleMarkdown)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
  router
}).$mount('#app')
