// page/component/new-pages/cart/cart.js
const app = getApp()

Page({
  data: {
    carts:[],               // 收藏列表
    hasList: true,          // 列表是否有数据
  },

  onLoad(e) {
    this.getlove()
  },

  onShow() {
   
    let loves = app.globalData.carts
    console.log(loves.length)
    if(loves.length>0){
      wx.hideLoading()
      this.setData({  
        hasList:true,
        carts: loves
      })
    }else{
      this.setData({
        hasList: false,
      });
    }
 
  },


  onHide: function () {
   
  },


  /**
   * 删除收藏的当前商品
   */
  deleteList(e) {
    wx.showLoading({
      title: '加载中',
    })
    console.log(e)
    const index = e.currentTarget.dataset.index;
    console.log(index)
    let carts = app.globalData.carts;
    app.getInfoWhere('love', { id: e.currentTarget.dataset._id},e3=>{

      app.deleteInfoFromSet('love', e3.data[0]['_id'],e4=>{
 
        wx.showToast({
          title: '删除成功',
        })
        carts.splice(index, 1);
        this.setData({
          carts:carts
        });
        app.globalData.carts = carts

        if (!carts.length) {
          this.setData({
            hasList: false
          });
        } else {
        }
      })
      })
      
   
  },onPullDownRefresh: function () {

  },


  getlove:function (e){
    let that = this
 
      app.getInfoWhere('love', {}, e => {
        
        //console.log(e.data)

        for (let i = 0; i < e.data.length; i++) {
          //console.log(e.data[i]['id'])
          wx.request({
            url: 'https://api.it120.cc/aoph/shop/goods/detail',
            data: {
              id: e.data[i]['id']
            },
            success: function (res) {
              //console.log(res.data.data)
              let details = app.globalData.carts
              if (JSON.stringify(details).indexOf(JSON.stringify(res.data.data)) == -1) {
                details.push(res.data.data) // 进行动态的操作
              }
              app.globalData.carts = details
              that.setData({
                carts:details
              })
            }
          })
        }
        console.log(e.data.length)
        if (e.data.length == 0) {
          that.setData({
            hasList: false
          });

        } else {
          that.setData({
            hasList: true,
          });

        }

        wx.hideLoading()
    
      })
    

   
  }





})