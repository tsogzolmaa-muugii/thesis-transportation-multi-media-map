<script setup>
defineProps({
  sideBarShouldBeShown: {
    type: Boolean,
    required: true
  }
})
</script>
<script>

export default {
  emits: ['hideSideBar'],
  data() {
     return {
      bus5Points: []
     }
  },
  methods: {
    async getBus5Points() {
      const response = await fetch('../data/bus_5_points.geojson');
      const data = await response.json();
      alert('ZA DATAGAA ORUULLLAA SHUUU')
      this.bus5Points = data.features
    }
  },
  mounted() {
    this.getBus5Points()
  }
}
</script>


<template>
  <aside id="sidebar" :class="(sideBarShouldBeShown) ? `sidebar-responsive`: ``">
    <div class="sidebar-title">
      <div class="sidebar-brand">
        <span class="material-icons-outlined">emoji_transportation</span>
        Public Transportation Webmap
      </div>
      <span class="material-icons-outlined side-bar-close" @click="$emit('hideSideBar')">close</span>
    </div>

    <h1>Bus 5</h1>
    <ul class="sidebar-list">
      <li class="sidebar-list-item" v-for="bus5Point in bus5Points" :key="bus5Point">
        {{ bus5Point.properties.name }}
      </li>
    </ul>
  </aside>
</template>

<style>
.side-bar-close {
  cursor: pointer;
}
</style>