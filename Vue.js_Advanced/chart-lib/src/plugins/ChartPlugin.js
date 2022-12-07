import { Chart } from 'chart.js';

export default {
    install: (app) => {
        app.config.globalProperties.$_Chart = Chart;
    }
}