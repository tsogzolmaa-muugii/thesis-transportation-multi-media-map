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
  emits: ['showSideBar', 'updateTimeOfDay'],
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
      <span>
        <input type="range" @change="$emit('updateTimeOfDay', $event)" name="time-range" id="time-range" />
      </span>
      <!--<span class="material-icons-outlined">notifications</span>-->
      <!--<span class="material-icons-outlined">email</span>-->
      <span class="material-icons-outlined">account_circle</span>
    </div>
  </header>
</template>

<style>
.menu-icon {
  cursor: pointer;
}
</style>