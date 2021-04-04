// pages/user/user.js
Page({
  data: {
    isHide:false,
    canIuse :wx.canIUse('button.open-type.getUserinfo'),
    value:[],
  },
  onLoad: function () {
    var that=this;
    //查看是否授权
    wx.getSetting({
      success:function(res){
        // authSetting	用户授权结果
        //scope 需要获取权限的 userInfo		用户信息对象
        if(res.authSetting["scope.userInfo"]){
          wx.getUserInfo({
            success:function(res){  
                // var userInfo = res.userInfo
              wx.login({
                success:res =>{
                  // console.log("用户的id"+res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：           
                }
              });
            }
          });
        } else {
          //用户没有授权 改变ishide 显示授权页面
          that.setData({
            isHide:true
          });
        }
      }
    });
  },
  bindGetUserInfo:function(e){
    //userInfo		用户信息对象
    if(e.detail.userInfo)
    {
      var that=this;
      console.log("用户信息如下:")
      console.log(e.detail.userInfo);
      //授权成功 通过改变isHide的值 让页面显示出来
      that.setData({
        isHide:false
      });
    }else{
      wx.showModal({
        title: '警告',
        content:'你点击了拒绝授权 将无法进入小程序 请授权后在进入',
        showCancel:false,
        success:function(res){
          if(res.confirm){
            console.log('用户点击了返回授权');
          }
        }
      })
    }
  },
  publish:function(e){
    wx.navigateTo({
      url: '../publish/publish',
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