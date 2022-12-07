<template>
  <div>
    <!-- <div v-for="n in news">{{ n.title }}</div> -->
    <!-- <div v-for="news in fetchedNews">{{ news.title }}</div> -->
    <!-- <ul class="news-list">
      <li v-for="news in fetchedNews" class="post">
        <div class="points">
          {{ news.points }}
        </div>
        <div>
          <p class="news-title">
            <a v-bind:href="news.url">{{ news.title }}</a>
          </p>
          <small class="link-text">
            {{ news.time_ago }} by
            <router-link v-bind:to="`/user/${news.user}`">
              {{ news.user }}
            </router-link>
          </small>
        </div>
      </li>
    </ul> -->
    <list-item></list-item>
  </div>
</template>

<script>
// import axios from "axios";
// import { fetchNewsList } from "../api/index.js";
// import { mapGetters, mapState } from 'vuex';
import ListItem from "../components/ListItem.vue";
import bus from "../utils/bus.js";

export default {
  components: {
    ListItem,
  },
  // data() {
  //   return {
  //     news: [],
  //   };
  // },
  // computed: {
  // news() {
  //   return this.$store.state.news
  // }

  // ...mapState({
  //   news: state => state.news
  // })

  //   ...mapGetters(["fetchedNews"]),
  // },
  created() {
    // var vm = this;
    // axios
    //   .get("https://api.hnpwa.com/v0/news/1.json")
    //   .then(function (response) {
    //     console.log(response);
    //     vm.news = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });

    // fetchNewsList()
    //   .then(response => {
    //     console.log(response);
    //     this.news = response.data;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    bus.$emit("start:spinner");

    setTimeout(() => {
      this.$store
        .dispatch("FETCH_NEWS")
        .then(() => {
          bus.$emit("end:spinner");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  },
};
</script>

<style scoped>
/* .news-list {
  margin: 0;
  padding: 0;
}
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0;
}
.link-text {
  color: #828282;
} */
</style>
