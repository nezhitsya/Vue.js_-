import { fetchAskList, fetchJobsList, fetchNewsList, fetchUserInfo, fetchItemInfo, fetchList } from '@/api';

export default {
    // promise
    // FETCH_NEWS(context) {
    //     return fetchNewsList()
    //         .then(response => {
    //             context.commit('SET_NEWS', response.data);
    //             return response;
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // },

    // async
    async FETCH_NEWS(context) {
        const response = await fetchNewsList();
        context.commit('SET_NEWS', response.data);
        return response;
    },

    async FETCH_ASKS(context) {
        const response = await fetchAskList();
        context.commit('SET_ASKS', response.data);
        return response;
    },
    async FETCH_JOBS(context) {
        try {
            const response = await fetchJobsList();
            context.commit('SET_JOBS', response.data);
            return response;
        } catch (error) {
            console.log(error);
        }
    },
    FETCH_USER({ commit }, username) {
        return fetchUserInfo(username)
            .then(({ data }) => {
                commit('SET_USER', data);
            })
            .catch(error => {
                console.log(error);
            });
    },
    FETCH_ITEM({ commit }, id) {
        return fetchItemInfo(id)
            .then(({ data }) => {
                commit('SET_ITEM', data)
            })
            .catch(error => {
                console.log(error);
            });
    },

    // FETCH_LIST({ commit }, pageName) {
    //     return fetchList(pageName)
    //         .then(({ data }) => {
    //             commit('SET_LIST', data)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // },

    async FETCH_LIST({ commit }, pageName) {
        const response = await fetchList(pageName);
        commit('SET_LIST',response.data);
        return response;
    },
}