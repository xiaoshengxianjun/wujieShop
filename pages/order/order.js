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
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods1.jpg",
      }, {
        id: 2,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods2.jpg",
      }, {
        id: 3,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods3.jpg",
      }],
      totalPrice: '53.23'
    }, {
      type: "拼团",
      orderNum: "201801234123554123",
      status: "待拼团",
      details: [{
        id: 1,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods1.jpg",
      }],
      totalPrice: '53.23'
    }, {
      type: "秒杀",
      orderNum: "201801234123554123",
      status: "待自提",
      details: [{
        id: 1,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods4.jpg",
      }, {
        id: 2,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods6.jpg",
      }],
      totalPrice: '53.23'
    }, {
      type: "秒杀",
      orderNum: "201801234123554123",
      status: "待收货",
      details: [{
        id: 1,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods5.jpg",
      }],
      totalPrice: '53.23'
    }],
    unpayedOrders: [{
      type: "拼团",
      orderNum: "201801234123554123",
      status: "待付款",
      details: [{
        id: 1,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods2.jpg",
      }],
      totalPrice: '53.23'
    }],
    ungroupOrders: [{
      type: "拼团",
      orderNum: "201801234123554123",
      status: "待拼团",
      details: [{
        id: 1,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods3.jpg",
      }],
      totalPrice: '53.23'
    }],
    untakeOrders: [{
      type: "秒杀",
      orderNum: "201801234123554123",
      status: "待自提",
      details: [{
        id: 1,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods4.jpg",
      }, {
        id: 2,
        img: "https://gomoretech2.oss-cn-shanghai.aliyuncs.com/demo-goods6.jpg",
      }],
      totalPrice: '53.23'
    }],
    ungetOrders:[],
    swiperHeight: 0
  },
  //生命周期函数-监听页面初次渲染完毕
  onReady: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          swiperHeight: res.windowHeight + 10
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

  },
  //swiperChange
  bindChange: function (e) {
    var that = this;
    this.setData({
      tabSelected: e.detail.current
    });
    //如果需要加载数据
    
  },
})