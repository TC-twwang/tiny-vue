import Radar from './src/index.js'
import { radar } from '@opentiny/vue-renderless/chart-radar/index'

/* istanbul ignore next */
Radar.install = function (Vue) {
  Vue.component(Radar.name, Radar)
}

Radar.version = process.env.COMPONENT_VERSION

/* istanbul ignore next */
if (process.env.BUILD_TARGET === 'runtime') {
  if (typeof window !== 'undefined' && window.Vue) {
    Radar.install(window.Vue)
  }
}

export { radar }

export default Radar
