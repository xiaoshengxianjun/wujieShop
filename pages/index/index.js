//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    searchLabelShow: false,
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    takeGroupGoods: [{
      id: 1,
      name: "奶油草莓 约500g",
      img: "../../image/demo/demo-goods1.png",
      nowPrice: 26.8,
      oldPrice: 36.8
    }, {
      id: 2,
      name: "砀山黄桃 约500g",
      img: "../../image/demo/demo-goods1.png",
      nowPrice: 22.3,
      oldPrice: 25.5
    }, {
      id: 3,
      name: "海南贵妃芒果 约500g",
      img: "../../image/demo/demo-goods1.png",
      nowPrice: 16.8,
      oldPrice: 20
    }],
    seckillGoods: [{
      id: 4,
      name: "眉县猕猴桃 约500g",
      img: "../../image/demo/demo-goods1.png",
      nowPrice: 16.8,
      oldPrice: 20
    }, {
      id: 5,
      name: "黄柠檬 约200g",
      img: "../../image/demo/demo-goods1.png",
      nowPrice: 26.8,
      oldPrice: 36.8
    }, {
      id: 6,
      name: "海南红心柚子 约1kg",
      img: "../../image/demo/demo-goods1.png",
      nowPrice: 22.3,
      oldPrice: 25.5
    }]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 搜索框点击事件,输入框聚焦
  handleFocus: function (e) {
    this.setData({
      searchLabelShow: true
    })
  },
  // 搜索框失去焦点处理
  handleBlur: function (e) {
    this.setData({
      searchLabelShow: false
    })
  },
  // 跳转到拼团页面
  toFightGroup: function () {
    wx.navigateTo({
      url: '../fightGroup/fightGroup'
    })
  },
  // 跳转到商品详情页面
  toGoodsDetail: function () {
    wx.navigateTo({
      url: '../goodsDetail/goodsDetail'
    })
  }
})
