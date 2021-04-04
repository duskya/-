// miniprogram/pages/detail/detail.js
Page({
  //将图片信息存到数组
  data: {
    all:[],
    img:[],//全部图片信息
    user:[],
    userimg:[],
    detail:[],
    userimg:[],
    colstatus: true,
    goodstatus:true,
    goodnum:0,
    colnum:0,
  },
//获取id数据 在数据库中寻找 传值
  onLoad: function (e) {
    // console.log(e)
    let that=this
    let a=e.id
    // console.log(a)
    wx.cloud.database().collection("food").where({
      _id:a
      // _id:"28ee4e3e60161d870203261e146e87ee"
    }).get({
      success(res){
        that.setData({
          all:res.data,
          img:res.data[0].img,
          user:res.data[0].user,
          userimg:res.data[0].userimg,
          detail:res.data[0].detail,
          goodnum:res.data[0].good,
          colnum:res.data[0].CollectionNum,
          good:0,
          CollectionNum:0,
        })
      }
    })
  },


 //点赞
  goodbtn:function(e){  
    // 判断是否点赞过 
    if(this.data.goodstatus==true){
      this.setData({
      goodstatus:false,
      goodnum:this.data.goodnum+1
      })
    }else if(this.data.goodstatus==false){
      this.setData({
      goodstatus:true,
      goodnum:this.data.goodnum-1
    })
    }
    // console.log(this.data.goodnum)
    //数值更新数据库
    const db=wx.cloud.database()
    console.log(e.currentTarget.dataset.id)
    db.collection('food').doc(
      e.currentTarget.dataset.id
      ).update({
      // data 传入需要局部更新的数据
      data: {
        good:this.data.goodnum
      },
      success: res => {
      }
    })
   
  },

  //收藏
  colbtn:function(e){   
    if(this.data.colstatus==true){
      this.setData({
      colstatus:false,
      colnum:this.data.colnum+1
      })
    }else if(this.data.colstatus==false){
      this.setData({
        colstatus:true,
        colnum:this.data.colnum-1
    })
    }

    const db=wx.cloud.database()
    console.log(e.currentTarget.dataset.id,)
    db.collection('food').doc(
      e.currentTarget.dataset.id
      ).update({
      // data 传入需要局部更新的数据
      data: {
        CollectionNum:this.data.colnum
      },
      success: res => {
        console.log('------')
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