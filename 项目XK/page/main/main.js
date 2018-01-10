var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    typeList: [],
    userNo: '',
    page:1,
    productList:[]
  },
  tapAction: function (res) {
    // console.log(res.currentTarget.dataset.id);
    
    wx: wx.navigateTo({
      url: '../../page/categoryClass/cagegoryClass?id=' + res.currentTarget.dataset.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },
 
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'userNo',
      success: function (res) {
        console.log(res.data)
        if (res.data) {
          that.setData({
            userNo: res.data
          })
        }
      },
    })

    that.RequestCategoryClass();

  },
  RequestCategoryClass: function () {
    var that = this;
    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "mobile.business.product",
        needTrascation: false,
        funName: "queryProductTypeList",
        form: {

        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.statusCode == 200) {
          if (res.data.formDataset.checked == "true")
            // res.data.formDataset.typeList
            var typeList = JSON.parse(res.data.formDataset.typeList);
          console.log(typeList);
          that.setData({
            typeList: typeList
          })
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