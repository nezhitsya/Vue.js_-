import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from '../views/NewsView.vue'
import AskView from '../views/AskView.vue'
import JobsView from '../views/JobsView.vue'
import UserView from '../views/UserView.vue'
import ItemView from '../views/ItemView.vue'
import createListView from '../views/CreateListView'
import bus from '../utils/bus.js';
import { store } from "../store/index.js";

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
            // 네비게이션 가드
            beforeEnter: (to, from, next) => {
                bus.$emit('start:spinner');

                store.dispatch('FETCH_LIST', to.name)
                    .then(() => {
                        next();
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            }
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
