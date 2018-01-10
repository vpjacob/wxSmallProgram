var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsId: "",
    modelTypeList: [],
    product: [],
    userNo: '',
    address: []


  },
  buyNowAction: function () {
    var that = this;
    var address = that.data.address;

    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "mobile.center.pay.pay",
        needTrascation: true,
        funName: "insertTempAndGetDealNo",
        form: {
          userNo: address.user_no,
          productId: address.id,
          userName: address.name,
          userPhone: address.phone,
          userAddress: address.address,
          goodName: that.data.modelTypeList.name,
          num: 1,
          postage: 0,
          price: 0.1,
          remark: " ",
          goodModel: "",
          merchantNo: "B000001",
          merchantName: "北京小客网络科技有限公司",
          mount: 0.1,
          type: "1"
        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      }, success(res) {
        // console.log(res.data.formDataset.address);
        // var address = JSON.parse(res.data.formDataset.address);
        // that.setData({
        //   address: address
        // })
        var dealNo = res.data.formDataset.dealNo;
        console.log(res);
        var data = {
          "totalAmount": 0.1,
          "description": "maioshu",
          "dealNo": dealNo
        }

        //拿到deal no 去获取订单其他信息
        wx.request({
          url: 'http://xk.ppke.cn:9030/pay/wxBuyPrefGetSign.do',
          data: {
            "totalAmount": 0.1,
            "description": "maioshu",
            "dealNo": dealNo
          },
          method: "POST",
          dataType: "json",
          header: {
            'content-type': 'application/json' // 默认值
          }, success(res) {
            // console.log(res.data.formDataset.address);
            // var address = JSON.parse(res.data.formDataset.address);
            // that.setData({
            //   address: address
            // })
            // console.log(res);
            var mData = res.data.data;
            console.log(mData);
            wx.requestPayment({
              timeStamp: mData.timestamp,
              nonceStr: mData.noncestr,
              package: mData.package,
              signType: 'MD5',
              paySign: mData.paySign,
              success: function (res) {
                console.log(res);
              },
              fail: function (res) {
                console.log(res);
              }
            })

          }
        })


      }
    })


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    this.setData({
      goodsId: options.id
    });


    wx.getStorage({
      key: 'userNo',
      success: function (res) {
        // console.log(res)
        that.setData({
          userNo: res.data
        })

        // 收货地址
        wx.request({
          url: 'http://www.ppke.cn/api/execscript',
          data: {
            script: "mobile.business.product",
            needTrascation: false,
            funName: "queryDefaultAddress",
            form: {
              goodId: options.id,
              userNo: res.data
            }
          },
          header: {
            'content-type': 'application/json' // 默认值
          }, success(res) {
            console.log(res.data.formDataset.address);
            var address = JSON.parse(res.data.formDataset.address);
            that.setData({
              address: address
            })


          }
        })


      },
    })
    var that = this;
    console.log(that.data.userNo);
    wx.request({
      url: 'http://www.ppke.cn/api/execscript',
      data: {
        script: "mobile.business.product",
        needTrascation: false,
        funName: "queryProductDeatilAndModelType",
        form: {
          id: options.id
        }
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        if (res.data.execStatus) {
          var modelTypeList = JSON.parse(res.data.formDataset.modelTypeList);
          var product = JSON.parse(res.data.formDataset.product);
          console.log(modelTypeList);
          console.log(product);
          that.setData({
            modelTypeList: modelTypeList,
            product: product
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