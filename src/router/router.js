import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Common from '@/components/Common'
import Address from '@/components/Address'
import Help from '@/components/Help'
import Commonpdf from '@/components/commonpdf'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {

    return originalPush.call(this, location).catch(err => err)
};

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Index',
            component: Index
        },

        {
            path: '/common',
            name: 'Common',
            component: Common
        },
        {
            path: '/address',
            name: 'address',
            component: Address
        },
        {
            path: '/help',
            name: 'help',
            component: Help
        },

        {
            path: '/Commonpdf',
            name: 'Commonpdf',
            component: Commonpdf
        }
    ]


})