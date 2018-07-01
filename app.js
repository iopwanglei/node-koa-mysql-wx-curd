let http = require('./result/http.js'), serves = require("./result/methods.js")
App({
  ...http,
  ...serves,
  onLaunch: function () {
   },
  globalData: {
    userInfo: null
  }
})