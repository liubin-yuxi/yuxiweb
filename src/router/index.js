import Vue from 'vue'
import Router from 'vue-router'
//components
import Main from '@/pages/main'


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {path: '/', component: Main}
    ]
})
