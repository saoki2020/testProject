import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify' // 追加
import 'vuetify/dist/vuetify.min.css' // 追加

Vue.config.productionTip = false

new Vue({
  vuetify, // 追加
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
