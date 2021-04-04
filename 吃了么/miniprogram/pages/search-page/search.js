// miniprogram/pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    words:'',
    all:[],
    img:[],//全部图片信息
    user:[],
    userimg:[],
    detail:[],
    userimg:[],
    a:''
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    //搜索首页传过来的数据
    let that=this
    
    // console.log(that.data.words)
    const db=wx.cloud.database()
    db.collection("food").where({
      detail: db.RegExp({
        regexp: e.word,
        options: 'i',
        })
      })
    .orderBy('time','desc').get({
      success(res){
        that.setData({
          all:res.data,
          img:res.data[0].img,
          user:res.data[0].user,
          userimg:res.data[0].userimg,
          detail:res.data[0].detail,
        })
      }
    })
  },
  //搜索页面数据
  searchwords(e){
    this.setData({
      words:e.detail
    })
    console.log(this.data.words)
    var that=this
    const db=wx.cloud.database()
    db.collection("food").where({
      detail: db.RegExp({
        regexp: that.data.words,
        options: 'i',
        })
      })
      .orderBy('time','desc').get({
        success(res){
          that.setData({
            all:res.data,
            img:res.data[0].img,
            user:res.data[0].user,
            userimg:res.data[0].userimg,
            detail:res.data[0].detail,
          })
        }
      }) 
    },
    //跳转详情页
    ondetail:function(e){
      var id=e.currentTarget.dataset.id
      wx.navigateTo({
        url: '../detail/detail?id='+id,
      })
    }
})