import { $props, $prefix, $setup } from '@opentiny/vue-common'
import PCTemplate from './pc.vue'

const template = () => PCTemplate

export default {
  name: $prefix + 'UserAccount',
  props: {
    ...$props,
    getLangData: Function,
    getUserInfo: Function,
    getUserImageUrl: Function,
    getLogoutUrl: Function,
    redirectUrl: String,
    isLocal: Boolean,
    network: Function,
    isMock: Boolean,
    isGuestUser: Function,
    showLogin: Function,
    showArrow: {
      type: Boolean,
      default: false
    },
    popperClass: String,
    popperAppendToBody: {
      type: Boolean,
      default: true
    },
    beforeLogout: Function
  },
  setup(props, context) {
    return $setup({ props, context, template })
  }
}
