<template>
  <div id="chart" style="{ width: '400px' }">
    <BarChart style="background-color: #fff" ref='barChartRef' :chart-data='testData'  />
  </div>
</template>
<script lang="ts">
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";
import { BarChart, ExtractComponentData, useBarChart } from "vue-chart-3";
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
          grid: {
            display: false
          }
        },
        y: {
          grid: {
            display: false
          }
        },
        myScale: {
          type: "logarithmic",
          position: this.legendTop ? "left" : "right",
        },
      },
      plugins: {
        legend: {
          position: this.legendTop ? "top" : "bottom",
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
          data: this.data,
          backgroundColor: [
            "#DEDEEC",
            "#DEDEEC",
            "#DEDEEC",
            "#DEDEEC",
            "#DEDEEC",
            "#DEDEEC",
            "#DEDEEC",
            "#585CA2",
            "#DEDEEC",
            "#DEDEEC",
            "#DEDEEC",
            "#DEDEEC",
          ],
          borderRadius: 15
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
