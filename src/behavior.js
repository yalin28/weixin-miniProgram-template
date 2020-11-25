// 全局 混入函数 抽离出多页面都需要用到的方法和属性
export const navBar = Behavior({
  data: {
    filterBarFixed: false,
  },
  methods: {
    handlerGoback() {
      wx.navigateBack()
    },
    handlerGohome() {
      wx.reLaunch({
        url: '/pages/index/index',
      })
    },
  },
})
