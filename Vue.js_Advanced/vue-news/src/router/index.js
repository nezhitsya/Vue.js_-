import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView'

Vue.use(VueRouter);

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news',
        },
        {
            // path: url 주소
            path: '/news',
            // component: url 주소에 갔을 때 표시될 컴포넌트
            // component: NewsView,
            // HOC (High Order Component)
            component: createListView('NewsView'),
            name: 'news',
        },
        {
            path: '/ask',
            component: createListView('AskView'),
            name: 'ask',
        },
        {
            path: '/jobs',
            component: createListView('JobsView'),
            name: 'jobs',
        },
        {
            path: '/user/:id',
            component: UserView,
        },
        {
            path: '/item/:id',
            component: ItemView,
        },
    ],
});
