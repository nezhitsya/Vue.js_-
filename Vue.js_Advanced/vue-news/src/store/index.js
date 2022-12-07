// import { fetchAskList, fetchJobsList, fetchNewsList } from '@/api';
import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations.js'
import actions from './actions.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
    // vuex data flow : actions -> mutations -> state
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {},
        list: [],
    },
    getters: {
        fetchedNews(state) {
            return state.news;
        },
        fetchedAsk(state) {
            return state.asks;
        },
        fetchedJobs(state) {
            return state.jobs;
        },
        fetchedUser(state) {
            return state.user;
        },
        fetchedItem(state) {
            return state.item;
        },
    },
    // mutations: {
    //     SET_NEWS(state, news) {
    //         state.news = news;
    //     },
    //     SET_ASKS(state, asks) {
    //         state.asks = asks
    //     },
    //     SET_JOBS(state, jobs) {
    //         state.jobs = jobs
    //     },
    // },
    mutations,
    // actions: {
    //     FETCH_NEWS(context) {
    //         fetchNewsList()
    //             .then(response => {
    //                 context.commit('SET_NEWS', response.data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     },
    //     FETCH_ASKS({ commit }) {
    //         fetchAskList()
    //             .then(({ data }) => {
    //                 commit('SET_ASKS', data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     },
    //     FETCH_JOBS({ commit }) {
    //         fetchJobsList()
    //             .then(({ data }) => {
    //                 commit('SET_JOBS', data);
    //             })
    //             .catch(error => {
    //                 console.log(error);
    //             })
    //     },
    // },
    actions,
})