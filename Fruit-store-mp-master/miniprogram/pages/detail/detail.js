// miniprogram/pages/detail/detail.js
const app = getApp()
var WxParse = require('../../wxParse/wxParse.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    fruitDetail: {}, //水果信息
    curIndex: 0,
    articleID: ""
  },

  // 跳转收藏頁面
  goToCart: function() {
    // console.log('hhhh')
    wx.switchTab({
      url: '/pages/cart/cart',
    })
  },



  
  // ------------加入收藏------------
  addLoveByDetail: function (e) {
    wx.showLoading({
      title: '加载中',
    })
    console.log(e)
    var self = this
    app.getInfoWhere('fruit-board', { _id: e.currentTarget.dataset._id },
      e => {
        //console.log(e.data["0"]._id)

        app.isNotRepeteToLove({ id: e.data["0"]._id, _openid: this.data.openid })

      }
    )
  },


  // 详细信息切换
  bindTap(e) {
    const index = parseInt(e.currentTarget.dataset.index);
    this.setData({
      curIndex: index
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.showLoading() 
    console.log(e._id)
    var that = this
    wx.request({
      url: 'https://api.it120.cc/aoph/shop/goods/detail',
      data: {
        id: e._id
      },
      success: function (res) {
        console.log(res)

        that.setData({
         fruitDetail: res.data.data,
        });
        WxParse.wxParse('article', 'html', res.data.data.content, that, 5);
        wx.hideLoading() 
      }
    })
   
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