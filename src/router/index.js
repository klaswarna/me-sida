import Vue from 'vue'
import Router from 'vue-router'
//import VueNativeSock from 'vue-native-websocket'
import Me from '@/components/Me'
import Report from '@/components/Report'
import Login from '@/components/Login'
import NewReport from '@/components/NewReport'
import Chat from '@/components/Chat'
import OldPosts from '@/components/OldPosts'

Vue.use(Router)

export default new Router({
  routes: [
    {
        path: '/',
        name: 'Me',
        component: Me
    },
    {
        path: '/report/:kmom',
        name: 'Redovisning',
        component: Report
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/newreport',
        name: 'NewReport',
        component: NewReport
    },
    {
        path: '/chat',
        name: 'Chat',
        component: Chat
    },
    {
        path: '/oldposts',
        name: 'OldPosts',
        component: OldPosts
    }

  ]
})
