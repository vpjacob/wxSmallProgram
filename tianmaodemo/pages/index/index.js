//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    circleList: [],
    imageAward: [
      '../../images/1.jpg',
      '../../images/2.jpg',
      '../../images/3.jpg',
      '../../images/4.jpg',
      '../../images/5.jpg',
      '../../images/6.jpg',
      '../../images/7.jpg',
      '../../images/8.jpg'
    ],
    awardList: [],
    colorCircleFirst: '#FFDF2F',
    colorCircleSecond: '#FE4D32',
    selectedIndex:0,
    awardSelected:'#54FF9F',
    awardUnSelected:'#F5F0FC',
    isRunning:false

  }, startBtnAction: function () {
    // console.log("抽奖");
    if (this.data.isRunning == true) return;
    this.setData({
      isRunning : true
    })
    var _this = this;
    var selectedIndex = 0;
    var i = 0;
    var interval = setInterval(function(){
      selectedIndex += 1;
      i += Math.random() * 100;
      console.log(i);
      if(i>1000){
        clearInterval(interval);

        wx.showModal({
          title: '恭喜您',
          content: '获得了' + selectedIndex + '个优惠券',
          showCancel:false,
          success:function(res){
            if(res.confirm){
              _this.setData({
                isRunning: false
              })
            }
          }
        })
      }

    selectedIndex = selectedIndex % 8
    _this.setData({
      selectedIndex: selectedIndex
    })
    },(200 + i))

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this = this;

    var leftCircle = 7.5;
    var topCircle = 7.5;
    var circleList = [];
    var j = 20;
    var mar = 60;
    var wid = 30;

    for (var i = 0; i < 24; i++) {

      if (i == 0) {
        leftCircle = j;
        topCircle = j;
      } else if (i < 6) {
        leftCircle += mar + wid;
        topCircle = j;
      } else if (i == 6) {
        leftCircle += mar + wid;
        topCircle = topCircle;
      } else if (i < 12) {
        leftCircle = leftCircle;
        topCircle += mar + wid;
      } else if (i == 12) {
        leftCircle = leftCircle;
        topCircle += mar + wid;
      } else if (i < 18) {
        leftCircle -= mar + wid;
        topCircle = topCircle;
      } else if (i == 18) {
        leftCircle -= mar + wid;
        topCircle = topCircle;
      } else if (i < 24) {
        leftCircle = leftCircle;
        topCircle -= mar + wid;
      } else {
        return
      }

      circleList.push({ topCircle: topCircle, leftCircle: leftCircle });

    }

    this.setData({
      circleList: circleList
    })


    var awardList = [];
    var imgWithd = 130;
    var imgMargin = 20;
    var q = 10;
    var topAward = 0;
    var leftAward = 0;
    for (var i = 0; i < 8; i++) {

      if (i == 0) {
        topAward = q;
        leftAward = q;
      } else if (i < 3) {
        topAward = topAward;
        leftAward += imgWithd + imgMargin;
      } else if (i == 3) {
        topAward += imgWithd + imgMargin;
        leftAward = leftAward;
      } else if (i < 5) {
        topAward += imgWithd + imgMargin;
        leftAward = leftAward;
      } else if (i == 5) {
        topAward = topAward;
        leftAward -= imgWithd + imgMargin;
      } else if (i < 7) {
        topAward = topAward;
        leftAward -= imgWithd + imgMargin;
      } else if (i == 7) {
        topAward -= imgWithd + imgMargin;
        leftAward = leftAward;
      } else if (i < 9) {
        topAward -= imgWithd + imgMargin;
        leftAward = leftAward;
      }
      else {
        return
      }
      var imageAward = this.data.imageAward[i];

      awardList.push({
        topAward: topAward,
        leftAward: leftAward,
        imageAward: imageAward
      });


    }
    this.setData({
      awardList: awardList
    })


    setInterval(function () {
      if (_this.data.colorCircleFirst == '#FFDF2F') {
        _this.setData({
          colorCircleFirst: '#FE4D32',
          colorCircleSecond: '#FFDF2F'
        })
      } else {
        _this.setData({
          colorCircleFirst: '#FFDF2F',
          colorCircleSecond: '#FE4D32'
        })

      }
    }, 500)


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