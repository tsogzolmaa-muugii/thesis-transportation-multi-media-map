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
      sliderNumericValue: 7,
      passenger_data: null,
      fileContentTram46: JSON.stringify({}),
      fileContentBus5: JSON.stringify({}),
      bus5ChartData: null,
      tram46ChartData: null,
      chosenStationNameTram46: '',
      chosenStopNameBus5: '',
      bus5Data: {},
      tram46Data: {}, 
    }
  },
  methods: {
    updateTimeOfDay(e) {
      const sliderNumericValue = convertForSlider(5, 22, e.target.value)
      this.sliderNumericValue = sliderNumericValue

      const passenger_data = passenger_data_list.find((d) => d.left == sliderNumericValue)
      this.passenger_data = passenger_data
    },
    showSideBar() {
      this.sideBarShouldBeShown = true
    },
    hideSideBar() {
      this.sideBarShouldBeShown = false
    },
    updateChosenStationNameTram46(e, name) {
      this.chosenStationNameTram46 = name
      this.updateCharts()
    },
    updatechosenStopNameBus5(e, name) {
      this.chosenStopNameBus5 = name
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
      this.bus5Data = JSON.parse(this.fileContentBus5)
      this.tram46Data = JSON.parse(this.fileContentTram46)

      if (this.chosenStopNameBus5) {
        if (this.bus5Data) {
          if (this.bus5Data.features) {
            const bus5passengerData = this.bus5Data.features.find((d) => {
              return d.properties.name == this.chosenStopNameBus5
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
          }
        }
      }

      if (this.chosenStationNameTram46) {
        if (this.tram46Data) {
          if (this.tram46Data.features) {
            const tram46passengerData = this.tram46Data.features.find((d) => {
              return d.properties.name == this.chosenStationNameTram46
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
  }
}
</script>

<template>
  <div class="grid-container">
    <HeaderComponent
      @showSideBar="showSideBar"
      :chosenStopNameBus5="chosenStopNameBus5"
      :chosenStationNameTram46="chosenStationNameTram46"
    />

    <Sidebar
      :sideBarShouldBeShown="sideBarShouldBeShown"
      :bus5Data="bus5Data"
      :tram46Data="tram46Data"
      @hideSideBar="hideSideBar"
      @updateChosenStationNameTram46="updateChosenStationNameTram46"
      @updatechosenStopNameBus5="updatechosenStopNameBus5"
      @handleFileSelectTram46="handleFileSelectTram46"
      @handleFileSelectBus5="handleFileSelectBus5"
    />

    <!-- Main -->
    <main class="main-container">
      <TransportMap
        :fileContentTram46="fileContentTram46"
        @updateTimeOfDay="updateTimeOfDay"
        :fileContentBus5="fileContentBus5"
        :sliderNumericValue="sliderNumericValue" />

      <div class="charts">
        <div class="charts-card">
          <h2 class="chart-title">Bus 5 passengers</h2>
          <p>Stop: {{ chosenStopNameBus5 }}</p>
          <BarChart v-if="bus5ChartData" :chartData="bus5ChartData" />
        </div>
        <div class="charts-card">
          <h2 class="chart-title">Tram 4,6 passengers</h2>
          <p>Station: {{ chosenStationNameTram46 }}</p>
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
