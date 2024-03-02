<script setup>
import HeaderComponent from './components/HeaderComponent.vue'
import Sidebar from './components/Sidebar.vue';
</script>

<script>
export default {
  data() {
    return {
      sideBarShouldBeShown: false
    }
  },
  methods: {
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
    <HeaderComponent @showSideBar="showSideBar" />

    <Sidebar
      :sideBarShouldBeShown="sideBarShouldBeShown"
      @hideSideBar="hideSideBar"
      />

    <!-- Main -->
    <main class="main-container">
      <div class="main-title">
        <h2>DASHBOARD</h2>
      </div>

      <div class="main-cards">
        <div class="card">
          <div class="card-inner">
            <h3>Name 7</h3>
            <span class="material-icons-outlined">inventory_2</span>
          </div>
          <h1>249</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Name 8</h3>
            <span class="material-icons-outlined">category</span>
          </div>
          <h1>25</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Name 9</h3>
            <span class="material-icons-outlined">groups</span>
          </div>
          <h1>1500</h1>
        </div>

        <div class="card">
          <div class="card-inner">
            <h3>Name 10</h3>
            <span class="material-icons-outlined">notification_important</span>
          </div>
          <h1>56</h1>
        </div>
      </div>

      <div class="charts">
        <div class="charts-card">
          <h2 class="chart-title">Name 11</h2>
          <div id="bar-chart"></div>
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
