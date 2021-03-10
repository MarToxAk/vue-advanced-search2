import Vue from 'vue'
import AdvancedSearch from './InputAutoComplete'

Vue.config.productionTip = false

new Vue({
    render: h => h(AdvancedSearch),
}).$mount('#app')