import * as echarts from 'echarts/core'
import { RadarChart } from 'echarts/charts'
import { CanvasRenderer } from 'echarts/renderers'
import { radar } from '@opentiny/vue-renderless/chart-radar/index'
import Core from '@opentiny/vue-chart-core'
import { $prefix } from '@opentiny/vue-common'

echarts.use([RadarChart, CanvasRenderer])

export default {
  ...Core,
  ...{
    name: $prefix + 'ChartRadar',
    data() {
      this.chartHandler = radar
      return {}
    }
  }
}
