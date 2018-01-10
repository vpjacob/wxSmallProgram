var app = getApp()
var md5 = require('../../utils.js')

Page({
  pwdInput:function(e){
    console.log(e.detail.value);
    console.log(md5.md5(e.detail.value))
    this.setData({
      pwd: md5.md5(e.detail.value)
    })
  },
  userNameInput: function (e) {
    console.log(e.detail.value);
    this.setData({
      userName: e.detail.value
    })
  },
  loginAction:function(){
    var that = this;
    var userName = that.data.userName;
    var pwd = that.data.pwd;
    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "login.login",
        needTrascation: false,
        funName: "checkMemberAccount",
        form: {
          account: userName,
          password: pwd,
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


      
      if (data.execStatus){
        
        var formDataset = data.formDataset
        // 1.登录成功
        if (formDataset.checked == 'true'){

         wx.setStorage({
            key: 'token',
            data: data.formDataset.token
          })

         wx.setStorage({
           key: 'pwdMd5',
           data: pwd
         })
          wx.setStorage({
            key: 'userNo',
            data: data.formDataset.userNo
          })

          wx.setStorage({
            key: 'createTime',
            data: data.formDataset.createTime
          })

          wx.setStorage({
            key: 'hasRegist',
            data: true
          })

          wx.setStorage({
            key: 'hasLogon',
            data: true
          })

          wx.setStorage({
            key: 'memberid',
            data: data.formDataset.mid
          })

          wx.setStorage({
            key: 'account',
            data: data.formDataset.account
          })

          wx.setStorage({
            key: 'nickname',
            data: data.formDataset.nickname
          })


          wx.setStorage({
            key: 'telphone',
            data: data.formDataset.telphone
          })

        wx.showToast({
          title: '登录成功',
        })

        wx.navigateBack({
          url: '../my?isLogin=true'
        })

        }else{
        
          if (formDataset.failureReason == "noAccount"){
          // 2.账号错误
            wx.showToast({
              title: '账号错误',
              icon: 'loading',
              duration:500
            })

          } else if (formDataset.failureReason == "pwdError"){
            // 3.密码错误
            wx.showToast({
              title: '密码错误',
              icon: 'loading',
              duration: 500
            })
          }
        }

      }else{
      // 4.登录失败
        wx.showToast({
          title: '登录失败',
          icon: 'loading',
          duration: 500
        })

      }

      


     


        // if (data.formDataset.userNo != null) {
        //   // that.setData({
        //   //   isLogin: true
        //   // })

        //   wx.setStorage({
        //     key: 'token',
        //     data: data.formDataset.token
        //   })

        //   wx.setStorage({
        //     key: 'userNo',
        //     data: data.formDataset.userNo
        //   })

        //   wx.setStorage({
        //     key: 'createTime',
        //     data: data.formDataset.createTime
        //   })

        //   wx.setStorage({
        //     key: 'hasRegist',
        //     data: true
        //   })

        //   wx.setStorage({
        //     key: 'hasLogon',
        //     data: true
        //   })

        //   wx.setStorage({
        //     key: 'memberid',
        //     data: data.formDataset.mid
        //   })

        //   wx.setStorage({
        //     key: 'account',
        //     data: data.formDataset.account
        //   })

        //   wx.setStorage({
        //     key: 'nickname',
        //     data: data.formDataset.nickname
        //   })


        //   wx.setStorage({
        //     key: 'telphone',
        //     data: data.formDataset.telphone
        //   })

        // } else {
        //   console.log("登录");
        // }



      }
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    pwd:'',
    userName:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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