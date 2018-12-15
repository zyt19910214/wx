// miniprogram/pages/homepage/homepage.js


const app = getApp()

Page({
  
  data: {
    swiperImgNo: 1,
    imgSwiperUrl: '',
    fruitInfo: [],
    goodsinfo:{},
    curPage: 1,
    pageSize: 10,
    loadingMoreHidden: true,
    typeCat: [
 
    ],
    activeTypeId:0,
    isShow:false,
    openid: ''
  },
  onPageScroll(e) {
   
  },

  // 获取用户openid
  getOpenid() {
    let that = this;
    wx.cloud.callFunction({
      name: 'login',
      complete: res => {
        //console.log('云函数login返回结果:', res)
        var openid = res.result.openid;
        //console.log('云函数获取到的openid:', openid)
        that.setData({
          openid: openid
        })
      }
    })
  },

  // ------------加入收藏------------
  addLoveByHome: function(e) {
    wx.showLoading({
      title: '加载中',
    }) 
    console.log(e.currentTarget.dataset)
    app.isNotRepeteToLove({ id: e.currentTarget.dataset._id, _openid: this.data.openid })
    
  },
 

  // ------------分类展示切换---------
  typeSwitch: function(e) {
   //console.log(e)
    console.log(this.data.goodsinfo)
    this.setData({
      activeTypeId: parseInt(e.currentTarget.id),
      loadingMoreHidden:true,
      curPage:1,
      fruitInfo: []
    });
    //获取当前类型下的所有数据
    //this.onswitch()
    this.getGoodsList(e.currentTarget.id)
  },


  // ---------点击跳转至详情页面-------------
  tapToDetail: function(e) {
    wx.navigateTo({
      url: '../detail/detail?_id=' + e.currentTarget.dataset.fid,
    })
  },


  // ------------生命周期函数------------
  onLoad: function (options) {
    var that = this
    wx.showLoading({
      title: '加载中',
    })


    // 获取openId
    this.getOpenid();

    // data = [{ id: 0, name: "全部商品" },
    //   { id: 1, name: "高档套盒" },
    //   { id: 2, name: "奶粉" },
    //   { id: 3, name: "儿童保健品" },
    //   { id: 4, name: "儿童洗护" },
    //   { id: 5, name: "奶瓶杯子" },
    //   { id: 6, name: "成人保健品" },
    //   { id: 7, name: "大牌彩妆" },
    //   { id: 8, name: "面膜" },
    //   { id: 9, name: "护肤品" },
    //   { id: 10, name: "红酒" },
    //   { id: 11, name: "生活用品" },
    //   { id: 12, name: "休闲娱乐" },
    //   ]
    // ---------加载所有分类-------------
    wx.request({
      url: 'https://api.it120.cc/aoph/shop/goods/category/all',
      success: function (res) {
        var categories = [{ id: 0, name: "全部" }];
        if (res.data.code == 0) {
          for (var i = 0; i < res.data.data.length; i++) {
            categories.push(res.data.data[i]);
          }
        }
        that.setData({
          typeCat: categories,
          activeTypeId: 0,
          isShow: true
        });
        console.log('当前分类为：',that.data.typeCat)

      }
    })
 
  },

  onReady: function () {

  },


  onShow: function () {
    this.onswitch()
   
  },
  
  getGoodsList: function (categoryId, append) {
    console.log(categoryId)
    
    if (categoryId == 0) {
      categoryId = "";
    }
    var that = this;
    wx.showLoading({
      "mask": true
    })
    wx.request({
      url: 'https://api.it120.cc/aoph/shop/goods/list',
      data: {
        categoryId: categoryId,
        nameLike: '',
        page:1,
        pageSize: 20
      },
      success: function (res) {
        //console.log(res)
        wx.hideLoading()
        if (res.data.code == 404 || res.data.code == 700) {
          let newData = { loadingMoreHidden: false }
          if (!append) {
            newData.goods = []
          }
          that.setData(newData);
          return
        }
        let goods = [];
        if (append) {
          goods = that.data.goods
          
        }
        for (var i = 0; i < res.data.data.length; i++) {
          goods.push(res.data.data[i]);
        }
        that.setData({
          loadingMoreHidden: true,
          fruitInfo: goods,
        });
        console.log(that.data.fruitInfo)
      }
    })
  },
  onswitch:function(e){

    let id = this.data.activeTypeId
    //console.log('33333333')
    this.data.goodsinfo[this.data.activeTypeId.toString()] = { curPage: 1, goods: [] }
    //console.log(id)
    this.getGoodsList(id)
  },

  onHide: function () {

  },

  onUnload: function () {

  },
  getdata: function (filter){
    console.log(filter)
    wx.showLoading({
      title: '加载中',
    })
    
    console.log(this.data.goodsinfo)
    let id = this.data.activeTypeId.toString()
    wx.cloud.callFunction({
      name: 'pageination',
      data: {
        dbName: 'fruit-board',
        filter: filter,
        pageIndex: this.data.goodsinfo[id].curPage,
        pageSize: this.data.pageSize,
      }
    }).then(res => {
      //console.log(res.result.haseMore)

      // if (!res.result.haseMore){
      //   this.setData({
      //     loadingMoreHidden: false
      //   });
      // }
      
      this.data.goodsinfo
      let goods = [...this.data.goodsinfo[id].goods, ...res.result.data]
      
      console.log(goods)
      let page = this.data.goodsinfo[id].curPage
      let info = this.data.goodsinfo
      info[id] = {curPage:page,goods:goods,loadingMoreHidden:res.result.haseMore}
      console.log(page)
      this.setData({
        fruitInfo:goods,
        goodsinfo:info,
        isShow: true
      })
      wx.hideLoading()
    })
  },
  onPullDownRefresh: function () {
    this.setData({
      curPage: 1
    });
    this.getdata({})
  
  },

  onReachBottom: function () {
    let info = this.data.goodsinfo
    if (info[this.data.activeTypeId.toString()].loadingMoreHidden){
      info[this.data.activeTypeId.toString()].curPage = info[this.data.activeTypeId.toString()].curPage+1;
      this.getdata({});
      this.setData({
          goodsinfo: info
      });
   
    }else{
      wx.showToast({
        title: '没有更多啦',
        icon: '',
        image: '',
        duration: 500,
        mask: true,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    }

  },

  onShareAppMessage: function () {
    return {
      title: 'AO奥品汇',
      imageUrl: '../../images/icon/fruit.jpg',
      path: '/pages/homepage/homepage'
    }
  }

})