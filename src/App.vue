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
      bus5passengerData: [],
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

      <div class="main-cards">
        <div class="card">
          <div class="card-inner">
            <h3>Name 7</h3>
            <span class="material-icons-outlined">inventory_2</span>
          </div>
          <h1>{{ numericValue }}</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Name 8</h3>
            <span class="material-icons-outlined">category</span>
          </div>
          <h1>{{ numericValue }}</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Name 9</h3>
            <span class="material-icons-outlined">groups</span>
          </div>
          <h1>{{ numericValue }}</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Name 10</h3>
            <span class="material-icons-outlined">notification_important</span>
          </div>
          <h1>{{ numericValue }}</h1>
        </div>
      </div>

      {{ bus5passengerData }}

      <TransportMap />

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
