// 首页
import wxRequest from '@/config/wxRequest'
import { API_PATH } from '@/config/env'

// 获取相关模块的提醒数量
export const login = (ajaxParams) => wxRequest(API_PATH + '/public/wxLogin', ajaxParams, 'POST')

// 列表页
export const getDataList = (obj) => wxRequest(API_PATH + '/api/list', obj, 'GET')

// 详情页
export const getApiDetail = (obj) => wxRequest(API_PATH + '/api/detail', obj, 'GET')

//我的朋友圈

// 列表页
export const getMyfriList = (obj) => wxRequest(API_PATH + '/api/myfri/list', obj, 'GET')

// 详情页
export const getMyfriDetail = (obj) => wxRequest(API_PATH + '/api/myfri/detail', obj, 'GET')