<template>
  <div id="chart" style="height: 200px">
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :plugins="plugins"
      :css-classes="cssClasses"
      :styles="styles"
      :width="width"
      :height="height"
    />
  </div>
</template>

<script>

import { Vue } from 'vue-property-decorator';
import { Bar } from 'vue-chartjs/legacy'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default Vue.extend({
  components: { Bar },
  props: {
    chartId: {
      type: String,
      default: 'bar-chart'
    },
    datasetIdKey: {
      type: String,
      default: 'label'
    },
    width: {
      type: Number,
    },
    height: {
      default: 160,
      type: Number,
    },
    cssClasses: {
      default: '',
      type: String
    },
    styles: {
      type: Object,
    },
    plugins: {
      type: Array,
    }
  },
  data() {
    return {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec "],
        datasets: [ { 
            label: "Doanh thu",
            backgroundColor: [
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
              "#DEDEEC",
            ],
            borderRadius: 8,
            hoverBackgroundColor: '#585CA2',
            height: 100,
            data: [30, 40, 60, 70, 50, 40, 60, 70, 50, 40, 60, 70, 50],
          } ],
      },
      chartOptions: {
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
          }
        },
        responsive: true
      }
    }
  }
})
</script>

<style scoped>
canvas {
  height: 200px !important;
}
</style>