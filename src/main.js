/*
 * @Descripttion: 
 * @version: 
 * @Author: qiaoyurensheng@163.com
 * @Date: 2020-06-11 00:22:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2020-06-11 00:26:59
 */
import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'

Vue.use(VueCompositionApi)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
