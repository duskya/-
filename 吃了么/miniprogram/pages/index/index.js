// pages/homepage.js
const app = getApp();
Page({
  data: {
    imgList:[],	
    imgUrls: [
     '../../images/swiper/1.jpg',
      '../../images/swiper/2.jpg',
    ],
    values:''
  },
  
  onLoad: function (e) { 
    let that =this
    
    wx.cloud.database().collection("food").orderBy('time','desc').get({
      success(res){
        that.setData({
          imgList:res.data
        })
        // console.log(res.data)
      }
    })
  }, 
  
  onDetail: function (e) {
    // console.log(e)
    var foodurl = e.currentTarget.dataset.id;
    //currentTarget 事件属性返回其监听器触发事件的节点
    //  console.log( e.currentTarget.dataset.id)
     wx.navigateTo({
      url: "../detail/detail?id=" + foodurl,
     })
  },
  searchwords(e){
    this.setData({
      values:e.detail
    })
    
    // console.log(value,'-----')
    wx.navigateTo({
      url: "../search-page/search?word=" +this.data.values,
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