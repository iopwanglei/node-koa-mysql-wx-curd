const app = getApp();
import { formatTime } from '../../utils/util.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: [],
    list: ["商品编号","人员编号","商品","购买时间","时间"],
    model: false,
    checked: false,
    isdelete: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.listData()
    // console.log(formatTime(new Date(Date.now())))
  },
  listData () {
    app.search().then((res) => {
      this.setData({
        arr: res.result
      })
    })
  },
  zAdd () {
    this.setData({
      model: true
    })
  },
  cancel () {
    this.setData({
      model: false
    })
  },
  formSubmit: function (e) {
    let data = e.detail.value
    if (this.data.checked) {
      app.editNow(data).then((res) => {
        console.log(res)
        this.listData()
        this.cancel()
        this.setData({ checked: false })
      })
    } else {
      app.add(data).then((res) => {
        console.log(res)
        this.setData({
          arr: res.result
        })
        this.cancel()
      })
    }
  },
  checkboxChange(e) {
    this.setData({ oidList: e.detail.value})
    if (!this.data.isdelete){
      this.zAdd()
      app.editSelect({}, this.data.oidList[0]).then((res) => {
        this.setData({ result: res.result })
      })
    } 
  },
  deleteB () {
    app.deleteData({}, this.data.oidList[0]).then((res) => {
      console.log(res)
      this.listData()
      this.setData({ isdelete: false })
    })
  },
  edit () {
    this.setData({ checked: !this.data.checked})
  },
  deleteA () {
    this.setData({ isdelete: !this.data.isdelete })
  }
})