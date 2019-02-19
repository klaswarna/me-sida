import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;


//Vue.JWT_TOKEN= Vue.prototype.JWT_TOKEN = 'Ingen token ännu';
//window.document.JWT_TOKEN = "uninlogged"

new Vue({
    router,
  render: h => h(App),
}).$mount('#app')
