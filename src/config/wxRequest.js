export default async (url, params, method) => {
  return new Promise((resolve, reject) => {
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
        if (data.code === 120001 || data.code === 120006) {
          wx.clearStorage()
          wx.reLaunch({url:'/pages/index/index'})
        } 
        resolve(data)

      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}
