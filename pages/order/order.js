Page({
  data: {
    tabType: ["全部", "待付款", "待拼团", "待自提", "待收货"],
    tabSelected: '0',
    allOrders: [{
      type: "拼团",
      orderNum: "201801234123554123",
      status: "待付款",
      details: [{
        id: 1,
        img: "../../image/demo/demo-goods1.png",
      }, {
        id: 2,
        img: "../../image/demo/demo-goods2.png",
      }, {
        id: 3,
        img: "../../image/demo/demo-goods3.png",
      }, {
        id: 2,
        img: "../../image/demo/demo-goods2.png",
      }, {
        id: 3,
        img: "../../image/demo/demo-goods3.png",
      }, {
        id: 2,
        img: "../../image/demo/demo-goods2.png",
      }, {
        id: 3,
        img: "../../image/demo/demo-goods3.png",
      }],
      totalPrice: '53.23'
    }],
    swiperHeight: 0
  },
  //生命周期函数-监听页面初次渲染完毕
  onReady: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          swiperHeight: (res.windowHeight - 45)
        });
      }
    })
  },
  //切换顶部标签
  switchTab: function (e) {
    console.log(e)
    this.setData({
      tabSelected: e.currentTarget.dataset.idx
    });
    //如果需要加载数据

  }
})