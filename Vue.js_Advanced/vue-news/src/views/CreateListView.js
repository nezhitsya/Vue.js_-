import ListView from './ListView.vue';
import bus from '../utils/bus.js';

// HOC
export default function createListView(name) {
    return {
        // 재사용할 인스턴스(컴포넌트) 옵션 정의
        name,
        created() {
            bus.$emit('start:spinner');

            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    bus.$emit('end:spinner');
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        render(createElement) {
            return createElement(ListView);
        },
    }
}