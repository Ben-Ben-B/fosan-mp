/**
 * 公共配置变量
 * API_PATH 接口URL
 * PRICE_RANGE 匹配价格区间
 */

var API_PATH = 'https://www.pterosaur1.cn'

/* isDEV
 * true为开发模式，登录时只获取测试token，无法走微信登录流程
 * false为生产模式，走正常的微信登录流程
 */
const isDEV = process.env.NODE_ENV === 'development'

// 正则表达式
const PHONEREG = /^(0|86|17951)?(13[0-9]|19[0-9]|16[0-9]|15[0-9]|17[0-9]|18[0-9]|14[57])[0-9]{8}$/
const PRICE_RANGE = /^\d*-\d+$/
const CAPTCHA = /^[0-9]\d{5}$/
export {
  API_PATH,
  isDEV,
  PHONEREG,
  CAPTCHA,
  PRICE_RANGE
}
