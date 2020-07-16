import Vue from 'vue'
import App from './App'
import router from './router'
import {ConfigProvider, Button, Row, Col, DatePicker, Affix, Breadcrumb} from 'ant-design-vue'

Vue.config.productionTip = false
Vue.use(ConfigProvider)
Vue.use(Button)
Vue.use(DatePicker)
Vue.use(Row)
Vue.use(Col)
Vue.use(Affix)
Vue.use(Breadcrumb)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
