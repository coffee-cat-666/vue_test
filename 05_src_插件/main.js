import Vue from 'vue'
import App from './App.vue'
//引入插件
import plugins from './plugins'

// 启动插件
Vue.use(plugins) 

new Vue({
    el: '#root',
    render: h => h(App)
})