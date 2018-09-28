// 基础库版本比较
// 如果v2 > v1，则返回1，v1传兼容的版本，v2 传用户的版本
export const compareVersion = (v1, v2) => {
  v1 = v1.split('.')
  v2 = v2.split('.')
  var len = Math.max(v1.length, v2.length)

  while (v1.length < len) {
    v1.push('0')
  }
  while (v2.length < len) {
    v2.push('0')
  }

  for (var i = 0; i < len; i++) {
    var num1 = parseInt(v1[i])
    var num2 = parseInt(v2[i])

    if (num1 > num2) {
      return 1
    } else if (num1 < num2) {
      return -1
    }
  }

  return 0
}

// js获取当前时间前后N天前后日期的方法
export const getDateStr = (AddDayCount) => {

  let dd = new Date()
  dd.setDate(dd.getDate() + AddDayCount) // 获取AddDayCount天后的日期

  let y = dd.getFullYear()
  let m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1) // 获取当前月份的日期，不足10补0
  let d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate() // 获取当前几号，不足10补0
  return y + '-' + m + '-' + d
}

/**
 * 时间格式化
 * @param  {[type]} time   [description]
 * @param  {[type]} format [description]
 * @return {[type]}        [description]
 */
export const formatTimeString = (time, formatParam) => {
  var format = formatParam || 'yyyy-MM-dd'
  var t = new Date(time)
  var tf = function (i) {
    return (i < 10 ? '0' : '') + i
  }
  return format.replace(/yyyy|MM|dd|HH|mm|ss/g, function (a) {
    switch (a) {
      case 'yyyy':
        return tf(t.getFullYear())
      case 'MM':
        return tf(t.getMonth() + 1)
      case 'mm':
        return tf(t.getMinutes())
      case 'dd':
        return tf(t.getDate())
      case 'HH':
        return tf(t.getHours())
      case 'ss':
        return tf(t.getSeconds())
    }
  })
}

/**
 * 获取 url 参数
 * @param  {[type]} name [description]
 * @param  {[type]} link [description]
 * @return {[type]}      [description]
 */
export const getUrlKey = (name, link = location.href) => {
  console.log('get Url Key: ' + link)
  const reg = new RegExp(`(?:^|&|\\?)${name}=([^&]*)(?:&|$)`)
  const r = link.substring(link.indexOf('?') + 1).match(reg)
  if (r) {
    return decodeURIComponent(r[1])
  }
  return ''
}

const nameRe = /^[0-9]+.?[0-9]*$/
const telephoneRe = /^1[3|4|5|7|8|9][0-9]{9}$/
const codeRe = /^[0-9]\d{5}$/

/**
 * 通用表单校验
 */
export const ruleFn = {
  isName(val, item, cb) {
    if (!val) {
      item.state = 3
      item.msg = '* 请填写姓名'
    } else if (!nameRe.test(val)) {
      item.state = 1
      item.msg = ''
    } else {
      item.state = 2
      item.msg = '* 姓名仅支持中英文'
    }
    cb && cb()
  },
  isPhone(val, item, cb) {
    if (!val) {
      item.state = 3
      item.msg = '* 请输入手机号码'
    } else if (telephoneRe.test(val)) {
      item.state = 1
      item.msg = ''
    } else {
      item.state = 2
      item.msg = '* 请输入正确的手机号码'
    }
    cb && cb()
  },
  isCode(val, item, cb) {
    if (!val) {
      item.state = 3
      item.msg = '* 请输入短信验证码'
    } else if (codeRe.test(val)) {
      item.state = 1
      item.msg = ''
    } else {
      item.state = 2
      item.msg = '* 请输入正确的短信验证码'
    }
    cb && cb()
  },
  isSex(val, item, cb) {
    if (val) {
      item.state = 1
      item.msg = ''
    } else {
      item.state = 2
      item.msg = '* 请选择您的性别'
    }
    cb && cb()
  },
  isIdentify(val, item, cb) {
    if (val) {
      item.state = 1
      item.msg = ''
    } else {
      item.state = 2
      item.msg = '* 请选择您的身份'
    }
    cb && cb()
  },
}

export const arrayIntersection = (a, b) => {
  var ai = 0,
    bi = 0
  var result = new Array()
  while (ai < a.length && bi < b.length) {
    if (a[ai] < b[bi]) {
      ai++
    } else if (a[ai] > b[bi]) {
      bi++
    } else {
      result.push(a[ai])
      ai++
      bi++
    }
  }
  return result
}

export const navigateToPage = (url) => {
  wx.navigateTo({ url })
}

// 深拷贝
export const deepcopy = function (source) {
  if (!source) {
    return source;
  }
  let sourceCopy = source instanceof Array ? [] : {};
  for (let item in source) {
    sourceCopy[item] = typeof source[item] === 'object' ? deepcopy(source[item]) : source[item];
  }
  return sourceCopy;
};