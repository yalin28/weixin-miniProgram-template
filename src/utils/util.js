export const formatTimeStamp = function (dateTimeStamp) {
  const minute = 1000 * 60
  const hour = minute * 60
  const day = hour * 24
  const month = day * 30
  const nowTime = new Date().getTime()
  const diffValue = nowTime - dateTimeStamp * 1000
  if (diffValue < 0) {
    return ''
  }

  const monthC = diffValue / month
  const weekC = diffValue / (7 * day)
  const dayC = diffValue / day
  const hourC = diffValue / hour
  const minC = diffValue / minute

  const result = ''
  if (monthC >= 1) {
    result = '' + parseInt(monthC) + '个月前'
  } else if (weekC >= 1) {
    result = '' + parseInt(weekC) + '周前'
  } else if (dayC >= 1) {
    result = '' + parseInt(dayC) + '天前'
  } else if (hourC >= 1) {
    result = '' + parseInt(hourC) + '小时前'
  } else if (minC >= 1) {
    result = '' + parseInt(minC) + '分钟前'
  } else {
    result = '刚刚'
  }
  return result
}

export const checkMobile = function (mobile) {
  if (!/^1\d{10}$/.test(mobile)) {
    return false
  }
  return true
}

export const checkNumber = function (string) {
  if (!/^[0-9]*$/.test(string)) {
    return false
  }
  return true
}

export const isEmpty = function (variable) {
  if (variable === null || variable === undefined || variable === '' || variable.length === 0) {
    return true
  }
  return false
}

export const throttle = function (fn, interval) {
  let enterTime = 0 //触发的时间
  let gapTime = interval || 300 //间隔时间，如果interval不传，则默认300ms
  return function () {
    let context = this
    let backTime = new Date() //第一次函数return即触发的时间
    if (backTime - enterTime > gapTime) {
      fn.call(context, arguments)
      enterTime = backTime //赋值给第一次触发的时间，这样就保存了第二次触发的时间
    }
  }
}

export const debounce = function (fn, interval) {
  let timer
  let gapTime = interval || 200 //间隔时间，如果interval不传，则默认1000ms
  return function () {
    clearTimeout(timer)
    let context = this
    let args = arguments //保存此处的arguments，因为setTimeout是全局的，arguments不是防抖函数需要的。
    timer = setTimeout(function () {
      fn.call(context, args)
    }, gapTime)
  }
}
export const getParamsByURL = function (url) {
  if (url === undefined || url === null) {
    return {}
  }
  let params = {}
  let component = url.split('?')
  console.log('getParamsByURL............')
  for (let i = 1; i < component.length; i++) {
    let paramsListText = component[i]
    let paramsList = paramsListText.split('&')
    for (let i = 0; i < paramsList.length; i++) {
      let paramsComponent = paramsList[i].split('=')
      params[paramsComponent[0]] = paramsComponent[1]
    }
  }
  console.log('getParamsByURL：', params)
  return params
}

export const splicingParams = function (paramsObj) {
  let paramsStr = ''
  for (let key in paramsObj) {
    paramsStr += key + '=' + paramsObj[key] + '&'
  }
  paramsStr = '&' + paramsStr.substring(0, paramsStr.length - 1)
  return paramsStr
}

const x_PI = (3.14159265358979324 * 3000.0) / 180.0
const PI = 3.1415926535897932384626
const a = 6378245.0
const ee = 0.00669342162296594323
/**
 * WGS-84 转 GCJ-02
 * @param lng
 * @param lat
 * @returns {*[]}
 */
var wgs84togcj02 = function wgs84togcj02(lng, lat) {
  var lat = +lat
  var lng = +lng
  if (out_of_china(lng, lat)) {
    return [lng, lat]
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0)
    var dlng = transformlng(lng - 105.0, lat - 35.0)
    var radlat = (lat / 180.0) * PI
    var magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    var sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtmagic)) * PI)
    dlng = (dlng * 180.0) / ((a / sqrtmagic) * Math.cos(radlat) * PI)
    var mglat = lat + dlat
    var mglng = lng + dlng
    return [mglng, mglat]
  }
}

/**
 * GCJ-02 转换为 WGS-84
 * @param lng
 * @param lat
 * @returns {*[]}
 */
const gcj02towgs84 = function gcj02towgs84(lng, lat) {
  var lat = +lat
  var lng = +lng
  if (out_of_china(lng, lat)) {
    return [lng, lat]
  } else {
    var dlat = transformlat(lng - 105.0, lat - 35.0)
    var dlng = transformlng(lng - 105.0, lat - 35.0)
    var radlat = (lat / 180.0) * PI
    var magic = Math.sin(radlat)
    magic = 1 - ee * magic * magic
    var sqrtmagic = Math.sqrt(magic)
    dlat = (dlat * 180.0) / (((a * (1 - ee)) / (magic * sqrtmagic)) * PI)
    dlng = (dlng * 180.0) / ((a / sqrtmagic) * Math.cos(radlat) * PI)
    var mglat = lat + dlat
    var mglng = lng + dlng
    return [lng * 2 - mglng, lat * 2 - mglat]
  }
}

const transformlat = function transformlat(lng, lat) {
  var lat = +lat
  var lng = +lng
  var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng))
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0
  ret += ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) / 3.0
  ret += ((160.0 * Math.sin((lat / 12.0) * PI) + 320 * Math.sin((lat * PI) / 30.0)) * 2.0) / 3.0
  return ret
}

const transformlng = function transformlng(lng, lat) {
  var lat = +lat
  var lng = +lng
  var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng))
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0
  ret += ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) * 2.0) / 3.0
  ret += ((150.0 * Math.sin((lng / 12.0) * PI) + 300.0 * Math.sin((lng / 30.0) * PI)) * 2.0) / 3.0
  return ret
}

/**
 * 判断是否在国内，不在国内则不做偏移
 * @param lng
 * @param lat
 * @returns {boolean}
 */
const out_of_china = function out_of_china(lng, lat) {
  var lat = +lat
  var lng = +lng
  // 纬度 3.86~53.55, 经度 73.66~135.05
  return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55)
}

/**
 * @description 创建指定长度的随机 key（大小写字母数字下划线）
 * @param { String or Number } name 长度
 * @return { String } 指定长度随机 key
 */
export const randomStr = function (length) {
  let text = ''
  const s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_'
  for (let i = 0; i < length * 1; i++) {
    text += s.charAt(Math.floor(Math.random() * s.length))
  }
  return text
}

// 校验是否是全面屏手机 对全面屏手机做样式兼容
export const checkFullSucreen = function () {
  let isFullSucreen = false
  try {
    const res = wx.getSystemInfoSync()
    const modelList = [/iphone x/i, /iphone 11/i, /iphone 12/i, /unknown\(iphone\)/i]
    modelList.forEach((item) => {
      if (res.model.search(item) > -1) {
        isFullSucreen = true
      }
    })
  } catch (e) {
    console.log(e)
  }
  return isFullSucreen
}
