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
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {},
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: ['1', '3', '5', '7', '9', '11', '13', '15', '17', '19', '21', '23']
    },
    series: [
      {
        name: '电',
        type: 'bar',
        data: [18, 23, 29, 10, 13, 63, 20]
      },
      {
        name: '热',
        type: 'bar',
        data: [19, 23, 31, 12, 13, 68, 15]
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
