import Vue from 'vue'
import demo from './InputAutoComplete'

Vue.config.productionTip = false

new Vue({
    render: h => h(demo),
}).$mount('#app')