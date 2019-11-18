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
import VueChatScroll from 'vue-chat-scroll'
import VueAxios from 'vue-axios'
import VueSocialauth from 'vue-social-auth'
import axios from 'axios';

Vue.use(VueAxios, axios)
Vue.use(VueSocialauth, {
  providers: {
    facebook: {
      clientId: '123367248113310',
      redirectUri: '/auth/facebook/callback' // Your client app URL
    }
  }
})

Vue.use(BootstrapVue)
Vue.use(VueSimpleMarkdown)
Vue.use(VueChatScroll)

Vue.config.productionTip = false


new Vue({
  store,
  render: h => h(App),
  apolloProvider: createProvider(),
  router
}).$mount('#app')
