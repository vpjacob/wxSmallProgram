var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailImg: 'http://www.ppke.cn//upload/image/20171221/1513858881107010444.jpg',
    obj: [],
    banner:[]
  },

  action:function(){
    // console.log(this.data.obj);
  },

  buyAction:function(){
    wx.navigateTo({
      url: '../../page/confirmGood/confirmGood?id='+this.data.obj.id,
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {


    var that = this;
    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "mobile.business.product",
        needTrascation: false,
        funName: "queryProductDeatilById",
        form: {
          id: options.id
        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var obj = JSON.parse(res.data.formDataset.product);
        var banner = JSON.parse(res.data.formDataset.carouselList);
        that.setData({
          obj:obj,
          banner: banner
        })
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