import { getHomeList } from '../../config/api'

Page({
  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    disabled: false,
    loading: false,
    list: [],
    btnText: '请求数据',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  getList() {
    if (this.data.list.length > 0) {
      this.setData({
        disabled: false,
        list: [],
        btnText: '请求数据',
      })
    } else {
      this.setData({
        disabled: true,
        loading: true,
      })
      const requestData = {
        results: 10,
      }
      getHomeList(requestData)
        .then((res) => {
          console.log(res)
          this.setData({
            disabled: false,
            loading: false,
            list: res.results,
            btnText: '重置数据',
          })
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {},

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {},

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {},

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {},

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {},

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {},

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {},
})
