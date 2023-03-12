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
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
      {
        type: 'graph',
        layout: 'none',
        symbolSize: 20,
        roam: true,
        label: {
          show: true
        },
        edgeSymbol: ['none', 'none'],
        edgeSymbolSize: [2, 5],
        edgeLabel: {
          fontSize: 20
        },
        data: [
          {
            name: '0',
            x: 80,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '1',
            x: 100,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '2',
            x: 120,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '3',
            x: 140,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '4',
            x: 160,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '5',
            x: 180,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '6',
            x: 200,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '7',
            x: 220,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '8',
            x: 240,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '9',
            x: 260,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '10',
            x: 280,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '11',
            x: 300,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '12',
            x: 320,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '13',
            x: 340,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '14',
            x: 360,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '15',
            x: 380,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '16',
            x: 400,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '17',
            x: 420,
            y: 200,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '18',
            x: 120,
            y: 240,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '19',
            x: 140,
            y: 240,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '20',
            x: 160,
            y: 240,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '21',
            x: 180,
            y: 240,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '22',
            x: 120,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '23',
            x: 140,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '24',
            x: 160,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '25',
            x: 180,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '27',
            x: 200,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '28',
            x: 220,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '29',
            x: 240,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '30',
            x: 260,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '31',
            x: 280,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '32',
            x: 300,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          },
          {
            name: '33',
            x: 320,
            y: 160,
            value: '100w',
            itemStyle: {
              color: 'blue'
            }
          }
        ],
        // links: [],
        links: [
          {
            source: 0,
            target: 1
          },
          {
            source: 1,
            target: 2
          },
          {
            source: 2,
            target: 3
          },{
            source: 3,
            target: 4
          },{
            source: 4,
            target: 5
          },{
            source: 5,
            target: 6
          },{
            source: 6,
            target: 7
          },{
            source: 7,
            target: 8
          },{
            source: 8,
            target: 9
          },
          {
            source: 9,
            target: 10
          },
          {
            source: 10,
            target: 11
          },
          {
            source: 11,
            target: 12
          },
          {
            source: 12,
            target: 13
          },
          {
            source: 13,
            target: 14
          },
          {
            source: 14,
            target: 15
          },{
            source: 15,
            target: 16
          },{
            source: 16,
            target: 17
          },{
            source: 1,
            target: 18
          },{
            source: 18,
            target: 19
          },{
            source: 19,
            target: 20
          },{
            source: 20,
            target: 21
          },{
            source: 2,
            target: 22
          },{
            source: 22,
            target: 23
          },{
            source: 23,
            target: 24
          },{
            source: 5,
            target: 25
          },
          {
            source: 25,
            target: 26
          },
          {
            source: 26,
            target: 27
          },
          {
            source: 27,
            target: 28
          },
          {
            source: 28,
            target: 29
          },
          {
            source: 29,
            target: 30
          },
          {
            source: 30,
            target: 31
          },
          {
            source: 31,
            target: 32
          },

        ],
        lineStyle: {
          opacity: 0.9,
          width: 2,
          curveness: 0
        }
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
