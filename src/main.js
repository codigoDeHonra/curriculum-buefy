import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/css/fontawesome.css";

import Buefy from 'buefy'
// import 'buefy/dist/buefy.css'

Vue.use(Buefy,
{
    defaultIconPack: 'fas',
    defaultContainerElement: '#content',
         })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
