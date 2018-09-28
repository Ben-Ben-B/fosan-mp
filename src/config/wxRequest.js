import { wxLogin } from '@/mixins/authorization'
export default async (url, params, method) => {
  return new Promise((resolve, reject) => {
    const community_id = wx.getStorageSync('community_id') || ''
    wx.request({
      url: url,
      method: method || 'GET',
      data: params,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': wx.getStorageSync('token') ? "Bearer " + wx.getStorageSync('token') : '',
      },
      success: (response) => {
        const data = response.data
        resolve(data)

      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}
