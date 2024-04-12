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
      bus5Points: [],
      tram46Points: [],
    }
  },
  methods: {
    async getBus5Points() {
      const response = await fetch('../data/bus_5_points.geojson')
      const data = await response.json()
      this.bus5Points = data.features
    },
    async getTram46Points() {
      const response = await fetch('../data/tram_4_6_points.geojson')
      const data = await response.json()
      this.tram46Points = data.features
    }
  },
  mounted() {
    this.getBus5Points()
    this.getTram46Points()
  }
}
</script>


<template>
  <aside id="sidebar" :class="sideBarShouldBeShown ? `sidebar-responsive` : ``">
    <div class="sidebar-title">
      <div class="sidebar-brand">
        <span class="material-icons-outlined">emoji_transportation</span>
        Public Transportation Webmap
      </div>
      <span class="material-icons-outlined side-bar-close" @click="$emit('hideSideBar')"
        >close</span
      >
    </div>

    <div class="accordion" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            Bus 5
          </button>
        </h2>
        <div
          id="collapseOne"
          class="accordion-collapse collapse show"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="sidebar-list">
              <li class="sidebar-list-item" v-for="bus5Point in bus5Points" :key="bus5Point">
                {{ bus5Point.properties.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button
            class="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Tram 4,6
          </button>
        </h2>
        <div
          id="collapseTwo"
          class="accordion-collapse collapse"
          data-bs-parent="#accordionExample"
        >
          <div class="accordion-body">
            <ul class="sidebar-list">
              <li class="sidebar-list-item" v-for="tram46Point in tram46Points" :key="tram46Point">
                {{ tram46Point.properties.name }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style>
.side-bar-close {
  cursor: pointer;
}
</style>