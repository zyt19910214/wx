// page/component/new-pages/cart/cart.js
const app = getApp()

Page({
  data: {
    carts: [],               // 购物车列表
    hasList: true,          // 列表是否有数据
    totalPrice: 0,           // 总价，初始为0
    selectAllStatus: false,    // 全选状态，默认全选
  },

  
  onLoad(e) {


  },

  onShow() {
    this.setData({
      hasList: true,
      carts:[]
    });
    wx.showLoading({
      title: '加载中',
    })
    this.getlove()
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
    const index = e.currentTarget.dataset.index;
   
    let carts = this.data.carts;
    app.getInfoWhere('love', { id: e.currentTarget.dataset._id},e3=>{

      app.deleteInfoFromSet('love', e3.data[0]['_id'],e4=>{
 
        wx.showToast({
          title: '删除成功',
        })
        carts.splice(index, 1);
        this.setData({
          carts: carts
        });

        if (!carts.length) {
          this.setData({
            hasList: false
          });
        } else {

        }
      })
      })
      
   
  },


  getlove (e){
    app.getInfoWhere('love', {}, e => {
      let that = this
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
            let details = that.data.carts
            details.push(res.data.data)
            console.log(details)
            that.setData({
              carts: details,
            });
           
          }
        })
      }
      if (e.data.length.length == 0) {
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