// page/component/new-pages/user/user.js
const app = getApp();

Page({
  data: {
    isAdmin: -1,
    openid: '',
    adiminArr: [      
      'oenS94lGcw7qyDo0AZ7uWBqeo0Lg'
    ]
  },
  onLoad() {
    var that = this;
    that.getOpenid();
    // console.log(that.data)
  },

  onShow() {
  
  },
  callPhone(e) {
    //console.log(e)
    wx.makePhoneCall({
      phoneNumber: '15105390367',
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  // 获取用户openid
  getOpenid() {
    var that = this;
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        console.log('云函数获取到的openid: ', res.result.openid)
        var openid = res.result.openid;
        var isAdmin = null;
        that.setData({
          openid: openid,
          isAdmin: that.data.adiminArr.indexOf(openid)
        })
      }
    })
  },

  goToBgInfo: function() {
    wx.navigateTo({
      url: '/pages/bgInfo/bgInfo',
    })
  },
  openLocation(e) {
    console.log(e)
    const value = e.detail.value
    console.log(value)
    wx.openLocation({
      longitude: 118.24065,
      latitude: 35.14640,
      name:"澳品汇义堂店",
      address:"山东省临沂市兰山区义堂中心卫生院东20米路南"
    })
  }
  
})