// 解决小程序页面路径最多只能十层限制
export default {
  navigateTo(object) {
    if (getCurrentPages().length > 9) {
      wx.redirectTo(object)
    } else {
      wx.navigateTo(object)
    }
  },
}
