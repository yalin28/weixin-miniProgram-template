import router from './utils/router'
import * as api from './config/api'
import { checkFullSucreen } from './utils/util'

App({
  router,
  api,
  globalData: {
    isFullSucreen: false, //是否是全面屏手机
  },
  onPageNotFound(res) {
    // console.log(res)
  },
  onLaunch(options) {
    console.log('-------APPonLaunch------')
    // console.log(options)
    this.globalData.isFullSucreen = checkFullSucreen()
  },
  onShow(options) {
    console.log('-------APPonShow------')
    // console.log(options)
  },
  onHide(options) {},
})
