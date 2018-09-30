// 首页
import wxRequest from '@/config/wxRequest'
import { API_PATH } from '@/config/env'

// 获取相关模块的提醒数量
export const login = (ajaxParams) => wxRequest(API_PATH + '/public/login', ajaxParams, 'POST')

// 列表页
export const getDataList = (obj) => wxRequest(API_PATH + '/api/list', obj, 'GET')

// 详情页
export const getApiDetail = (obj) => wxRequest(API_PATH + '/api/detail', obj, 'GET')