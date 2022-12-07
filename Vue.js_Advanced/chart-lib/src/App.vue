<template>
  <div>
    <h1>Chart.js</h1>
    <bar-chart></bar-chart>
    <line-chart v-on:refresh:chart="refreshChart" v-bind:propsdata="chartDataSet"></line-chart>
  </div>
</template>

<script>
// import axios from "axios";
import BarChart from "./components/BarChart.vue";
import LineChart from "./components/LineChart.vue";

export default {
  components: {
    BarChart,
    LineChart,
  },
  methods: {
    refreshChart() {
      this.chartDataSet = [];
    }
  },
  data() {
    return {
      chartDataSet: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    };
  },
  created() {
    // axios
    //   .get("charts/line/1")
    //   .then((response) => (this.chartDataSet = response.data))
    //   .catch((error) => console.log(error));
  },
};
</script>

<style></style>
