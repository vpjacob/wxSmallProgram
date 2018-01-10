var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    category: [
      { name: '果味', id: 'guowei' },
      { name: '蔬菜', id: 'shucai' },
      { name: '炒货', id: 'chaohuo' },
      { name: '点心', id: 'dianxin' },
      { name: '粗茶', id: 'cucha' },
      { name: '淡饭', id: 'danfan' }
    ],
    detail: [],
    curIndex: 0,
    isScroll: false,
    toView: 'guowei'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  clickAction:function(e){

    wx:wx.navigateTo({
      url: '../../page/detail/detail',
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })

  },
  leftBind:function(e){
    console.log(e.currentTarget);
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.currentTarget.dataset.id,
        curIndex: e.currentTarget.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var self = this;
    // wx.request({
    //   url: 'http://www.gdfengshuo.com/api/wx/cate-detail.txt',
    //   success(res){
    //     self.setData({
    //       detail: res.data
    //     })
    //   }
    // })
  
  self.setData({
    detail: [
      {
        "id": "guowei",
        "banner": "/image/category/banner1.jpg",
        "cate": "果蔬",
        "detail": [
          {
            "thumb": "/image/c2.png",
            "name": "苹果"
          },
          {
            "thumb": "/image/c3.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c3.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c2.png",
            "name": "苹果 500g"
          }
        ]
      },
      {
        "id": "shucai",
        "banner": "/image/category/banner1.jpg",
        "cate": "蔬菜",
        "detail": [
          {
            "thumb": "/image/s4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s5.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s6.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s6.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s5.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s4.png",
            "name": "苹果 500g"
          }
        ]
      },
      {
        "id": "chaohuo",
        "banner": "/image/category/banner1.jpg",
        "cate": "炒货",
        "detail": [
          {
            "thumb": "/image/c2.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c3.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c3.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c2.png",
            "name": "苹果 500g"
          }
        ]
      },
      {
        "id": "dianxin",
        "banner": "/image/category/banner1.jpg",
        "cate": "点心",
        "detail": [
          {
            "thumb": "/image/s4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s5.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s6.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s6.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s5.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s4.png",
            "name": "苹果 500g"
          }
        ]
      },
      {
        "id": "cucha",
        "banner": "/image/category/banner1.jpg",
        "cate": "粗茶",
        "detail": [
          {
            "thumb": "/image/c2.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c3.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c3.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/c2.png",
            "name": "苹果 500g"
          }
        ]
      },
      {
        "id": "danfan",
        "banner": "/image/category/banner1.jpg",
        "cate": "淡饭",
        "detail": [
          {
            "thumb": "/image/s4.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s5.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s6.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s6.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s5.png",
            "name": "苹果 500g"
          },
          {
            "thumb": "/image/s4.png",
            "name": "苹果 500g"
          }
        ]
      }
    ]
  })
  
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