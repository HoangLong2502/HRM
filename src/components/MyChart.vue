<template>
  <div id="chart" style="{ width: '400px' }">
    <BarChart style="background-color: #fff" ref='barChartRef' :chart-data='testData' :chart-options='options' />
  </div>
</template>
<script lang="ts">
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { BarChart, ExtractComponentData } from "vue-chart-3";
import { Component, Vue, Ref } from "vue-property-decorator";

Chart.register(...registerables);

@Component({
  components: {BarChart}
})
export default class MyChart extends Vue {

  @Ref() barChartRef!: ExtractComponentData<typeof BarChart>

  public data = [30, 40, 60, 70, 50, 40, 60, 70, 50, 40, 60, 70, 50];
  public legendTop = true;

  get options(): ChartOptions<"bar"> {
    return {
      scales: {
        x: {
          display: false,
        },
        y: {
          display: false,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
          text: "Chart.js Doughnut Chart",
        },
      },
    }
  }
  
  get testData(): ChartData<"bar"> {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec "],
      datasets: [
        {
          label: "Doanh thu",
          data: this.data,
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
          hoverBackgroundColor: '#585CA2'
        },
      ],
    }
  }
}
</script>

<style>
#chart {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #1c74cc;
}
canvas {
  width: 100% !important;
  height: 200px !important;
}
</style>
