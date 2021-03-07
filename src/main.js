import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'

Object.defineProperty( Vue.prototype, '$moment', { value: moment });

Vue.prototype.$test = function(args){
  return args
}

Vue.config.productionTip = false

Vue.filter('formatDateTimeSimple', function(value) {
  if (value) {
    return moment(String(value)).format('DD.MM.YYYY')
  }
})

new Vue({
  render: h => h(App),
}).$mount('#app')
