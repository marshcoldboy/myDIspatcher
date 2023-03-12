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
        <a-card title="出力信息" :bordered="false" style="width: 900px; height: 650px">
          <Pie style="width: 800px; height: 600px;" />
        </a-card>
      </ACol>
      <ACol >
        <a-card title="新能源消纳" :bordered="false" style="width: 250px; height: 300px">
          <p>风力总功率</p>
          <p>消纳系数</p>
          <p>风力并网功率</p>
        </a-card>
        <br/>
        <a-card title="储能策略" :bordered="false" style="width: 250px; height: 300px">
          <p>电储能</p>
          <p>热储能</p>
        </a-card>
      </ACol>
    </ARow>
  </div>
</template>

<style>

</style>
