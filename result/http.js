export let http = ({ url, method, data = {}, header }) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url,
      data,
      method,
      header,
      success(res) {
        res.statusCode === 200 ? resolve(res.data) : reject(res.data);
      },
      fail() {
        wx.showToast({
          title: "请求错误",
          icon: 'none'
        })
      }
    })
  })
}