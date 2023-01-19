Vue.config.productionTip = false

Vue.component('start', {
  template: '#start'
})

Vue.component('next', {
  template: '#next'
})

new Vue({
  el: '#app',
  
  data: {
    page: 'start'
  },
  
  methods: {
    onChangePage(to) {
      this.page = to
    }
  }
})