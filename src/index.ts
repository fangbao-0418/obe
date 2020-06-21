import Vue from 'vue'
import App from './App.vue'

console.log(App, 'app')

new Vue({
  // router,
  // store,
  render: h => h(App)
}).$mount('#app')
