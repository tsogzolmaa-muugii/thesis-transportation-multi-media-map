<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>


<script setup>
defineProps({
  chartData: {
    type: Object,
    required: true
  },
})
</script>

<script>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>