import { isEmpty } from './util'

const formDataHeader = { 'Content-Type': 'application/x-www-form-urlencoded' }
const defaultHeader = { 'Content-Type': 'application/json' }

const request = function (url, params = {}, method = 'GET', isFormData) {
  // url
  if (isEmpty(url)) {
    wx.showToast({
      title: '请求连接不能为空！',
      icon: 'fail',
      duration: 2000,
    })
    return
  }

  // header
  const header = isFormData ? formDataHeader : defaultHeader

  // data
  const copyData = JSON.parse(JSON.stringify(params))
  const defaultData = {} //需要全局加入的默认参数
  const data = {
    ...defaultData,
    ...copyData,
  }

  // return Promise
  return new Promise((resove, reject) => {
    wx.request({
      url,
      method,
      data,
      header,
      success(res) {
        let responseInfo = res.data
        if (res.statusCode == 200) {
          resove(responseInfo)
        } else {
          reject(responseInfo)
        }
      },
      fail(err) {
        console.log(err)
        reject(err)
      },
    })
  })
}

export default request
