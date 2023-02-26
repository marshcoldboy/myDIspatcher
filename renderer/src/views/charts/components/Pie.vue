<template>
  <div ref="chartRef" v-bind="attrs" />
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import type { Layout } from 'typings/layout'
import { ShallowRef } from 'vue'

const sidebarRelated = inject<Layout.SidebarRelated>('sidebarRelated')
const attrs = useAttrs()
const chartRef = ref()
const chart: ShallowRef<echarts.ECharts | null> = shallowRef(null)

onMounted(() => {
  initChart()
  window.addEventListener('resize', resizeChart)
})
onBeforeUnmount(() => {
  if (!chart.value) {
    return
  }
  chart.value.dispose()
  chart.value = null
  window.removeEventListener('resize', resizeChart)
})
watch(() => sidebarRelated?.collapsed, () => {
  setTimeout(() => {
    resizeChart()
  }, 300)
})
function initChart() {
  chart.value = echarts.init(chartRef.value)
  const option: echarts.EChartsOption = {
    legend: {
      top: 'bottom'
    },
    toolbox: {
      show: true,
      feature: {
        mark: { show: true },
        dataView: { show: true, readOnly: false },
        restore: { show: true },
        saveAsImage: { show: true }
      }
    },
    series: [
      {
        name: 'Nightingale Chart',
        type: 'pie',
        radius: [50, 250],
        center: ['50%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 8
        },
        data: [
          { value: 40, name: 'rose 1' },
          { value: 38, name: 'rose 2' },
          { value: 32, name: 'rose 3' },
          { value: 30, name: 'rose 4' },
          { value: 28, name: 'rose 5' },
          { value: 26, name: 'rose 6' },
          { value: 22, name: 'rose 7' },
          { value: 18, name: 'rose 8' }
        ]
      }
    ]
  }
  chart.value.setOption(option)
}

function resizeChart() {
  chart.value?.resize()
}
</script>

<style scoped>

</style>
