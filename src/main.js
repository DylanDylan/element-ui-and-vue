import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import axios from "axios"
import Vueaxios from "vue-axios"

Vue.use(ElementUI)
Vue.use(Vueaxios,axios)

new Vue({
  el: '#app',
  render: h => h(App)
})
