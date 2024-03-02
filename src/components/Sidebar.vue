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

    <ul class="sidebar-list">
      <li class="sidebar-list-item">
        <a href="#" target="_blank">
          <span class="material-icons-outlined">dashboard</span> Dashboard
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" target="_blank">
          <span class="material-icons-outlined">inventory_2</span> Name 1
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" target="_blank">
          <span class="material-icons-outlined">category</span> Name 2
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" target="_blank"> <span class="material-icons-outlined">groups</span> Name 3 </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" target="_blank">
          <span class="material-icons-outlined">fact_check</span> Name 4
        </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" target="_blank"> <span class="material-icons-outlined">poll</span> Name 5 </a>
      </li>
      <li class="sidebar-list-item">
        <a href="#" target="_blank">
          <span class="material-icons-outlined">settings</span> Name 6
        </a>
      </li>
    </ul>
  </aside>
</template>

<style>
.side-bar-close {
  cursor: pointer;
}
</style>