var app = getApp()
Page({
  scanCode: function () {

    wx.scanCode({
      success: (res) => {
        console.log(res)
      }
    })

  },
  showOrderList:function(){
    wx:wx.navigateTo({
      url: '../../page/orderList/orderList',
    })
  },


  loginAction: function () {

    wx: wx.navigateTo({
      url: '../../page/login/login',
    })

  }
  ,


  /**
   * 页面的初始数据
   */
  data: {
    headerList: [],
    layoutLeftList: [0, 25, 50, 75],
    isLogin: false,
    telphone: '',
    pwdMd5: '',
    image:'../../image/my/mineBack.jpg',
    nickName:'小客'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var that = this;
    wx.getStorage({
      key: 'hasLogon',
      success: function (res) {
        that.setData({
          isLogin: res.data
        })
      },
    })
    wx.getStorage({
      key: 'telphone',
      success: function (res) {
        that.setData({
          telphone: res.data
        })

      }
    })
    wx.getStorage({
      key: 'pwdMd5',
      success: function (res) {
        that.setData({
          pwdMd5: res.data
        })
      }
    })
    wx.getStorage({
      key: 'userNo',
      success: function(res) {
        if(res.data){
          that.getUserNoInfo(res.data);
        }

      },
    })

    var headerList = [];
    var leftItem = -25;
    var bottomTitle = '金蛋总计';
    for (var i = 0; i < 4; i++) {
      leftItem += 25;
      headerList.push({
        count: 0,
        leftItem: leftItem,
        bottomTitle: bottomTitle
      })
      if (i == 1) {
        bottomTitle = '银蛋总计';
      } else if (i == 2) {
        bottomTitle = '可用积分';
      } else if (i == 3) {
        bottomTitle = '可用金币';
      }
    }
    this.setData({
      headerList: headerList
    })

  },

  getUserNoInfo:function(userNo){
    var that = this;
    
    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "managers.home.person",
        needTrascation: false,
        funName: "getmemberinfo",
        form: {
          "userNo": userNo
        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data.datasources[0]);
        that.setData({
          image: "http://www.ppke.cn" + data.datasources[0].rows[0].head_image,
          nickName: data.datasources[0].rows[0].nickname
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var telphone = this.data.telphone;
    var pwdMd5 = this.data.pwdMd5;
    var that = this;

    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "login.login",
        needTrascation: false,
        funName: "checkMemberAccount",
        form: {
          account: telphone,
          password: pwdMd5,
          deviceId: "",
          registrationId: ""
        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        if (data.formDataset.userNo != null) {

          that.setData({
            isLogin:true
          })

          wx.setStorage({
            key: "hasLogon",
            data: true
          })

        } else {
          wx.showToast({
            title: '请登录',
            icon: 'loading',
            success: function () {
              wx.setStorage({
                key: "hasLogon",
                data: false
              })
            }
          })
        }
      }
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    wx.getStorage({
      key: 'hasLogon',
      success: function (res) {
        console.log(res);
        that.setData({
          isLogin: res.data
        })
      },
    })

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
    return {
      title: 'ddddd',
      path: '/page/user?id=123'
    }
  }
})