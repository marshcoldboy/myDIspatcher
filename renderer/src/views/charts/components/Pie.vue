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
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
      ]
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
        name: '电力出力信息',
        type: 'pie',
        radius: [20, 140],
        center: ['25%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5
        },
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true
          }
        },
        data: [
          { value: 47.2, name: '供电站 1' },
          { value: 33.3, name: '供电站 2' },
          { value: 19.5, name: '供电站 3' },
        ]
      },
      {
        name: '热力出力信息',
        type: 'pie',
        radius: [20, 140],
        center: ['75%', '50%'],
        roseType: 'area',
        itemStyle: {
          borderRadius: 5
        },
        data: [
          { value: 46.3, name: '供热站 1' },
          { value: 32.5, name: '供热站 2' },
          { value: 21.2, name: '供热站 3' }
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
