<script setup lang="ts">
import SystemGraph from './components/SystemGraph.vue'
</script>

<template>
  <main className="main">
    <SystemGraph style="width: 100%; height: 100%;"/>
  </main>
</template>

<style scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
