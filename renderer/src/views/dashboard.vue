<script setup lang="ts">
import Line from './charts/components/Line.vue'
import Pie from './charts/components/Pie.vue'
import Keyboard from './charts/components/Keyboard.vue'
import SystemGraph from  './charts/components/SystemGraph.vue'
import Load from './charts/components/Load.vue'

</script>

<template>
  <div>
    <ARow :gutter="12">
      <ACol >
        <a-card title="系统概览" :bordered="false" style="width: 600px; height: 500px">
          <SystemGraph style="width: 500px; height: 400px;" />
        </a-card>
      </ACol>
      <ACol >
        <a-card title="负荷" :bordered="false" style="width: 600px; height: 500px">
          <Load style="width: 500px; height: 400px;" />
        </a-card>
      </ACol>
    </ARow>
    <br/>
    <ARow :gutter="12">
      <ACol >
        <a-card title="出力信息" :bordered="false" style="width: 600px; height: 500px">
          <Pie style="width: 500px; height: 400px;" />
        </a-card>
      </ACol>
      <ACol >
        <a-card title="Card title" :bordered="false" style="width: 600px; height: 500px">
          <Pie style="width: 500px; height: 400px;" />
        </a-card>
      </ACol>
    </ARow>
  </div>
</template>

<style>

</style>
