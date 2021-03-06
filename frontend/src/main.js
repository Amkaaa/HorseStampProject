// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import PictureInput from 'vue-picture-input'
import VueClip from 'vue-clip'
require('../node_modules/bootstrap/dist/css/bootstrap.css')
Vue.use(VueClip)
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(PictureInput)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
