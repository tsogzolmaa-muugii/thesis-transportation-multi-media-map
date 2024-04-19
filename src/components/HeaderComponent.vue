<script setup>
defineProps({
  chosenStationNameTram46: {
    type: String,
    required: true
  },
  chosenStopNameBus5: {
    type: String,
    required: true
  },
})
</script>

<script>
export default {
  emits: ['showSideBar'],
}
</script>



<template>
  <header class="header">
    <div class="menu-icon" @click="$emit('showSideBar')">
      <span class="material-icons-outlined">menu</span>
    </div>
    <div class="header-left">
      <div v-if="chosenStationNameTram46">Chosen <b>Tram 4,6</b> station name: <b>{{ chosenStationNameTram46 }}</b></div>
      <div v-if="chosenStopNameBus5">Chosen <b>Bus 5</b> stop name: <b>{{ chosenStopNameBus5 }}</b></div>
    </div>
    <div class="header-right">
      <a class="material-icons-outlined link-to-github" href="https://github.com/tsogzolmaa-muugii/thesis-transportation-multi-media-map">
      code
      </a>
    </div>
  </header>
</template>

<style>
.menu-icon {
  cursor: pointer;
}
.link-to-github {
  text-decoration: none;
  color: #000;
}
.link-to-github:hover {
  color: #cecece;
}
</style>