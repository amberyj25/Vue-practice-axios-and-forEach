import Vue from 'vue'
import VueAxios from "vue-axios"
import axios from "axios"
import App from './App.vue'

Vue.use(VueAxios, axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
