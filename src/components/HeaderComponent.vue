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
      <span class="material-icons-outlined">search</span>
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