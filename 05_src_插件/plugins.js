export default {
    install(Vue) {
        //全局过滤器
        Vue.filter('myslice', function (value) {
            return value.slice(0, 4)
        })
    }


}