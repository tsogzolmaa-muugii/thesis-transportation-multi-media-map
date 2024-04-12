<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import Sidebar from './components/Sidebar.vue'
import { passenger_data_list } from './data/data.js'
import { convertForSlider } from './utils/conversion.js'
import TransportMap from './components/TransportMap.vue'
import BarChart from './components/BarChart.vue'
</script>

<script>
export default {
  data() {
    return {
      sideBarShouldBeShown: false,
      numericValue: 5,
      passenger_data: null,
      fileContentTram46: JSON.stringify(''),
      fileContentBus5: JSON.stringify(''),
      bus5ChartData: null,
      tram46ChartData: null,
      chosenStationName: ''
    }
  },
  methods: {
    updateTimeOfDay(e) {
      const numericValue = convertForSlider(5, 22, e.target.value)
      this.numericValue = numericValue

      const passenger_data = passenger_data_list.find((d) => d.left == numericValue)
      this.passenger_data = passenger_data
    },
    showSideBar() {
      this.sideBarShouldBeShown = true
    },
    hideSideBar() {
      this.sideBarShouldBeShown = false
    },
    updateChosenStationName(e) {
      this.chosenStationName = e.target.value
      this.updateCharts()
    },
    handleFileSelectTram46(event) {
      if (event.target.files[0]) {
        const reader = new FileReader()
        reader.onload = this.handleFileLoadTram46
        reader.readAsText(event.target.files[0])
      } else {
        // Herev file baihgui bol fileContentTram46 hooson baih yostoi.
        this.fileContentTram46 = JSON.stringify('')
      }
    },
    handleFileLoadTram46(event) {
      this.fileContentTram46 = event.target.result
      this.updateCharts()
    },
    handleFileSelectBus5(event) {
      if (event.target.files[0]) {
        const reader = new FileReader()
        reader.onload = this.handleFileLoadBus5
        reader.readAsText(event.target.files[0])
      } else {
        // Herev file baihgui bol fileContentBus5 hooson baih yostoi.
        this.fileContentBus5 = JSON.stringify('')
      }
    },
    handleFileLoadBus5(event) {
      this.fileContentBus5 = event.target.result
      this.updateCharts()
    },
    updateCharts() {
      const labels = [
        '00:00',
        '01:00',
        '02:00',
        '03:00',
        '04:00',
        '05:00',
        '06:00',
        '07:00',
        '08:00',
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00',
        '23:00'
      ]
      const bus5Data = JSON.parse(this.fileContentBus5)
      const tram46Data = JSON.parse(this.fileContentTram46)

      if (this.chosenStationName) {
        const bus5passengerData = bus5Data.features.find((d) => {
          return d.properties.name == this.chosenStationName
        })

        if (bus5passengerData) {
            const passengers = labels.map((l) => {
              const num_passengers = bus5passengerData.properties[l]
              if (num_passengers) {
                return num_passengers
              } else {
                return null
              }
            })
            this.bus5ChartData = {
              labels: labels,
              datasets: [{ data: passengers }]
            }
        }

        const tram46passengerData = tram46Data.features.find((d) => {
          return d.properties.name == this.chosenStationName
        })

        if (tram46passengerData) {
            const passengers = labels.map((l) => {
              const num_passengers = tram46passengerData.properties[l]
              if (num_passengers) {
                return num_passengers
              } else {
                return null
              }
            })
            this.tram46ChartData = {
              labels: labels,
              datasets: [{ data: passengers }]
            }
        }
      }
    }
  }
}
</script>

<template>
  <div class="grid-container">
    <HeaderComponent @showSideBar="showSideBar" @updateTimeOfDay="updateTimeOfDay" />

    <Sidebar
      :sideBarShouldBeShown="sideBarShouldBeShown"
      @hideSideBar="hideSideBar"
      @updateChosenStationName="updateChosenStationName"
    />

    <!-- Main -->
    <main class="main-container">
      <div class="main-title">
        <h2>DASHBOARD</h2>
      </div>

      {{ chosenStationName }}

      <div class="row mb-5">
        <div class="col-4">
          <div>Upload Tram 4,6 data</div>
          <input id="files" type="file" @change="handleFileSelectTram46" />
          <div>Upload Bus 5 data</div>
          <input id="files" type="file" @change="handleFileSelectBus5" />
        </div>
      </div>

      <TransportMap :fileContentTram46="fileContentTram46" :fileContentBus5="fileContentBus5" />

      <div class="charts">
        <div class="charts-card">
          <h2 class="chart-title">Bus 5 passengers</h2>
          <BarChart v-if="bus5ChartData" :chartData="bus5ChartData" />
        </div>
        <div class="charts-card">
          <h2 class="chart-title">Tram 4,6 passengers</h2>
          <BarChart v-if="tram46ChartData" :chartData="tram46ChartData" />
        </div>
      </div>
    </main>
    <!-- End Main -->
  </div>
</template>

<style scoped>
.hamgiin-gadna-taliin-hairtsag {
  border: 1px solid black;
  height: 500px;
}
.dotorh-hairtsag-1 {
  border: 1px solid black;
  height: 30px;

  display: flex;
}
.dotorh-hairtsag-2 {
  border: 1px solid black;

  height: calc(500px - 30px);
  display: flex;
}

.jijig-hairtsag-1 {
  background: green;
  /* border: 1px solid; */
  width: 30%;
}

.jijig-hairtsag-2 {
  background: greenyellow;
  /* border: 1px solid; */
  width: 70%;
}

.jijig-hairtsag-3 {
  background: white;
  border: 1px solid;
  width: 30%;
}

.jijig-hairtsag-4 {
  background: white;
  border: 1px solid;
  width: 70%;
}
</style>
