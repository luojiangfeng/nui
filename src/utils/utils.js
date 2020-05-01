/**
 * Created by Win on 20/02/21.
 */

// 时间戳转化为年 月 日
export function getLocalTime(nS) {
  // 将时间戳（十三位时间搓，也就是带毫秒的时间搓）转换成时间格式
  // d.cTime = 1539083829787
  let date = new Date(nS)
  const year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  // eslint-disable-next-line no-unused-vars
  let h = date.getHours()
  // eslint-disable-next-line no-unused-vars
  let minute = date.getMinutes()
  // eslint-disable-next-line no-unused-vars
  let second = date.getSeconds()
  month = month < 10 ? "0" + month : month
  day = day < 10 ? "0" + day : day
  h = h < 10 ? "0" + h : h
  minute = minute < 10 ? "0" + minute : minute
  second = second < 10 ? "0" + second : second
  date = year + "-" + month + "-" + day + " " + h + ":" + minute + ":" + second
  return date
}
// 获取当前时间，格式YYYY-MM-DD
export function getNowFormatDate() {
  var date = new Date()
  var seperator1 = "-"
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var strDate = date.getDate()
  if (month >= 1 && month <= 9) {
    month = "0" + month
  }
  if (strDate >= 0 && strDate <= 9) {
    strDate = "0" + strDate
  }
  var currentdate = year + seperator1 + month + seperator1 + strDate
  return currentdate
}
/**
 * @desc 获取url参数
 * @param {String} name  想要获取的参数名字
 */
export function getUrlVal(name) {
  const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)")
  const url = window.location.search.replace(/%26/g, "&")
  const url1 = url.replace(/%3D/g, "=")
  const r = url1.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

/**
 * 防抖
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function debounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}

/**
 * 检查元素是否有类
 * @param {HTMLElement} elm
 * @param {string} cls
 * @returns {boolean}
 */
export function hasClass(ele, cls) {
  return !!ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"))
}
/**
 * 向元素添加类
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function addClass(ele, cls) {
  if (!hasClass(ele, cls)) ele.className += " " + cls
}

/**
 * 从元素中删除类
 * @param {HTMLElement} elm
 * @param {string} cls
 */
export function removeClass(ele, cls) {
  if (hasClass(ele, cls)) {
    const reg = new RegExp("(\\s|^)" + cls + "(\\s|$)")
    ele.className = ele.className.replace(reg, " ")
  }
}

/**
 * 浮点数加法运算 arg1+arg2
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
export function floatAdd(arg1, arg2) {
  var r1, r2, m
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  return floatDiv(floatMul(arg1, m) + floatMul(arg2, m), m)
}

/**
 * 浮点数减法运算 arg1-arg2
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
export function floatSub(arg1, arg2) {
  var r1, r2, m, n
  try {
    r1 = arg1.toString().split(".")[1].length
  } catch (e) {
    r1 = 0
  }
  try {
    r2 = arg2.toString().split(".")[1].length
  } catch (e) {
    r2 = 0
  }
  m = Math.pow(10, Math.max(r1, r2))
  // 动态控制精度长度
  n = r1 >= r2 ? r1 : r2
  return floatDiv(floatMul(arg1, m) - floatMul(arg2, m), m).toFixed(n)
}

/**  
 * 浮点数乘法运算 arg1*arg2
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
export function floatMul(arg1, arg2) {
  var m = 0
  var s1 = arg1.toString()
  var s2 = arg2.toString()
  try {
    m += s1.split(".")[1].length
  } catch (e) {}
  try {
    m += s2.split(".")[1].length
  } catch (e) {}
  return (
    (Number(s1.replace(".", "")) * Number(s2.replace(".", ""))) /
    Math.pow(10, m)
  )
}

/**
 * 浮点数除法运算 arg1/arg2
 * @param {number} arg1
 * @param {number} arg2
 * @return {number}
 */
export function floatDiv(arg1, arg2) {
  var t1 = 0
  var t2 = 0
  var r1
  var r2
  try {
    t1 = arg1.toString().split(".")[1].length
  } catch (e) {}
  try {
    t2 = arg2.toString().split(".")[1].length
  } catch (e) {}
  r1 = Number(arg1.toString().replace(".", ""))
  r2 = Number(arg2.toString().replace(".", ""))
  return (r1 / r2) * Math.pow(10, t2 - t1)
}

/**
 * 精确浮点数位数（默认两位）
 * @param {number} val:待处理的数字
 * @param {number} pos：精确位数，default 2
 */
export function ToFixed(val, pos) {
  var p = pos || 2
  var mul = floatMul(Number(val), Math.pow(10, p))
  return floatDiv(Math.round(mul), Math.pow(10, p))
}

/**
 * 求数组对象中数字的和
 * @param {array} arry:为数组，数组中装的是对象
 * @param {string} attr：为对象的属性
 */
export function getSumArryObj(arry, attr) {
  var sum = 0
  for (var i in arry) {
    sum += arry[i][attr]
  }
  return ToFixed(sum, 2)
}
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/* 小写字母 */
export function validateLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validateAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
/* 判断网络响应状态是否成功 */
export function isStatusSucces(status) {
  if (typeof status !== "number") {
    return false
  }
  return status >= 200 && status < 300
}
