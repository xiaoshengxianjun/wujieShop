// pages/seckill/seckill.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeList: [{
      time: "10:00",
      status: "已开抢",
      active: false
    }, {
      time: "10:00",
      status: "抢购中",
      active: true      
    }, {
      time: "10:00",
      status: "即将开始",
      active: false      
    }, {
      time: "10:00",
      status: "明天即将开始",
      active: false 
    }, {
      time: "10:00",
      status: "明天即将开始",
      active: false 
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})