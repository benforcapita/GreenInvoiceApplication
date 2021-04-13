import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './assets/css/app.scss';
import '../node_modules/jquery/src/jquery.js';
import '../node_modules/popper.js/dist/popper.min.js';
import '../node_modules/bootstrap/dist/js/bootstrap.min';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
