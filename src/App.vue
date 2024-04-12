<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import Sidebar from './components/Sidebar.vue';
import { passenger_data_list } from './data/data.js';
import { convertForSlider } from './utils/conversion.js'
import TransportMap from './components/TransportMap.vue';
import BarChart from './components/BarChart.vue';
</script>

<script>
export default {
  data() {
    return {
      sideBarShouldBeShown: false,
      numericValue: 5,
      passenger_data: null,
      fileContentTram46: JSON.stringify(''),
      fileContentBus5: JSON.stringify('')
    }
  },
  methods: {
    updateTimeOfDay(e) {
      const numericValue = convertForSlider(5, 22, e.target.value)
      this.numericValue = numericValue

      const passenger_data = passenger_data_list.find(d => d.left == numericValue)
      this.passenger_data = passenger_data
    },
    showSideBar() {
      this.sideBarShouldBeShown = true
    },
    hideSideBar() {
      this.sideBarShouldBeShown = false
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
    },
    handleFileSelectBus5(event) {
      if (event.target.files[0]) {
        const reader = new FileReader()
        reader.onload = this.handleFileBus5
        reader.readAsText(event.target.files[0])
      } else {
        // Herev file baihgui bol fileContentBus5 hooson baih yostoi.
        this.fileContentBus5 = JSON.stringify('')
      }
    },
    handleFileBus5(event) {
      this.fileContentBus5 = event.target.result
    }
  }
}
</script>

<template>
  <div class="grid-container">
    <HeaderComponent
      @showSideBar="showSideBar"
      @updateTimeOfDay="updateTimeOfDay"
    />

    <Sidebar
      :sideBarShouldBeShown="sideBarShouldBeShown"
      @hideSideBar="hideSideBar"
      />

    <!-- Main -->
    <main class="main-container">
      <div class="main-title">
        <h2>DASHBOARD</h2>
      </div>

      {{ passenger_data }}

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
          <h2 class="chart-title">Passengers</h2>
          <BarChart />
        </div>

        <div class="charts-card">
          <h2 class="chart-title">Name 12</h2>
          <div id="area-chart"></div>
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
