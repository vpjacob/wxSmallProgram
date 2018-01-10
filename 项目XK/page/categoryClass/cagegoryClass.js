// page/categoryClass/cagegoryClass.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    page:1,
    productList:[],
    id:''
  },
  clickAction: function (e) {

    wx: wx.navigateTo({
      url: '../../page/detail/detail?id=' + e.currentTarget.dataset.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  console.log(options.id);
  this.setData({
    id:options.id
  })
  this.loadMoreData(options.id);

  },
  loadMoreData: function (e) {
    var that = this
    var page = that.data.page
    var productList = []
    console.log(e);
    wx.showLoading({
      title: '正在加载中。。。',
    })
    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "mobile.business.product",
        needTrascation: false,
        funName: "queryProductList",
        form: {
          isRecommend: '',
          type: e,
          name: '',
          sales: '',
          isPref: '',
          p: page
        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      }, success(res) {
        console.log(res);
        if (res.data.execStatus) {

          var productList = JSON.parse(res.data.formDataset.productList);
          if (page == 1) {
            that.setData({
              productList: productList,
              page: page + 1
            })
            wx.stopPullDownRefresh()
          } else {

            that.setData({
              productList: that.data.productList.concat(productList),
              page: page + 1
            })
          }
          console.log(that.data.productList);
          wx.hideLoading()
        }
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
  this.setData({
    page:1
  })
  this.loadMoreData(this.data.id);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.loadMoreData(this.data.id);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})