<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      Public Transportation Infographic
    </div>

    <div class="hamgiin-gadna-taliin-hairtsag">
      <div class="dotorh-hairtsag-1">
        <div class="jijig-hairtsag-1">
          1
        </div>
        <div class="jijig-hairtsag-2">
          2
        </div>
      </div>
      <div class="dotorh-hairtsag-2">
        <div class="jijig-hairtsag-3">
          3
        </div>
        <div class="jijig-hairtsag-4">
          4
        </div>
      </div>
    </div>


  </header>

  <RouterView />
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
