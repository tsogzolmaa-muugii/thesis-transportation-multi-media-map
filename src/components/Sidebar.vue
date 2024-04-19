<script setup>
defineProps({
  sideBarShouldBeShown: {
    type: Boolean,
    required: true
  },
  bus5Data: {
    type: Object,
    required: true
  },
  tram46Data: {
    type: Object,
    required: true
  },
})
</script>
<script>
export default {
  emits: ['hideSideBar', 'updateChosenStationNameTram46', 'updatechosenStopNameBus5', 'handleFileSelectTram46', 'handleFileSelectBus5'],
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

    <div class="container">
      <div>Upload Tram 4,6 data</div>
      <input id="files" type="file" @change="$emit('handleFileSelectTram46', $event)" />
      <div class="mt-2">Upload Bus 5 data</div>
      <input id="files" type="file" @change="$emit('handleFileSelectBus5', $event)" />
    </div>

    <div class="accordion mt-3" id="accordionExample">
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
              <li
                :class="['sidebar-list-item', (bus5Point.properties.average) ? '': 'sidebar-list-item-no-data']"
                v-for="bus5Point in bus5Data.features" :key="bus5Point"
                @click="$emit('updatechosenStopNameBus5', $event, bus5Point.properties.name)">
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
              <li
                :class="['sidebar-list-item', (tram46Point.properties.average) ? '': 'sidebar-list-item-no-data']"
                v-for="tram46Point in tram46Data.features" :key="tram46Point"
                @click="$emit('updateChosenStationNameTram46', $event, tram46Point.properties.name)">
                {{ tram46Point.properties.name }} <span class="badge text-bg-secondary">{{ tram46Point.properties.average }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.side-bar-close {
  cursor: pointer;
}
.sidebar-list-item-no-data {
  opacity: 0.3;
}

.sidebar-list-item:hover {
  cursor: pointer;
  color:rgb(70, 165, 113);
  border-bottom: 1px solid rgb(70, 165, 113);
}
</style>