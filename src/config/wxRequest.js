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
        if (data.code === 120007) {
          wx.setStorageSync('createTime',+new Date())
          wx.setStorageSync('permissions',data.data.permissions)
          wx.setStorageSync('token',data.data.token)
          let url = data.data.jump_path == 1 ? '/pages/logs/index' : '/pages/myFriends/index' 
          wx.reLaunch({url})
        } 
        resolve(data)

      },
      fail: (error) => {
        reject(error)
      }
    })
  })
}
