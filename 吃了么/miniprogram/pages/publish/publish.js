// miniprogram/pages/publish/publish.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:[],
    openid:'',
    all:[],
    code:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */ 
  
  onLoad: function (options) 
  {
    // var that=this
    // wx.login({
    //   //获取code
    //   success: function(res) {
    //     that.setData({
    //       code : res.code 
    //     })
    //      //返回code
    //   }
    // })
    // wx.request({
    //   url: 'https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code='+ this.data.code +'&grant_type=authorization_code',
    //   data: {},
    //   header: {
    //       'content-type': 'application/json'
    //   },
    //   success: function(res) {
    //     that.setData({
    //     openid : res.data._openid //返回openid
    //   })
    //   }
    // })


    console.log(this.data.openid,'------')
    const db=wx.cloud.database()
    db.collection("food").where({
      
      _openid: '{openid}'
        
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
 


})