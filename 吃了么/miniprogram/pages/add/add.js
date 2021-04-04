// pages/add/add.js

const db = wx.cloud.database()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    tempImg: [],
    fileIDs: [],
    
    content:[],
    name:[],
    img:[],
    time:[]
   
  },
 
//获取textarea中数据
  upcontent:function(e){
    this.setData({
      content:e.detail.value
    }) 
  },
  
  onLoad: function () {
    //获取用户名和头像
    wx.getUserInfo({
      success:res=>{
       var userInfo = res.userInfo
       var nickName = userInfo.nickName
       var avatarUrl = userInfo.avatarUrl 
       this.setData({
         name:nickName,
         img:avatarUrl,
      })
      }
     })
  },
  
  //上传图片功能
  uploadimg:function(){
    wx.chooseImage({
      count: 9,
      sizeType:['original','compressed'],
      sourceType:['album','camera'],
      success:res=>{
        const filepaths =res.tempFilePaths
        this.setData({
          tempImg:filepaths,
          // isupload:true
        })
      }
    })
  },
  //提交按钮
  submit:function(e){
    // console.log(this.data.content)
    // console.log(this.data.name)
    // console.log(this.data.img)
    wx.showLoading({
      title: '提交中',
    })
    const arr=[]
    for(let i=0; i<this.data.tempImg.length;i++){
      let filepath =this.data.tempImg[i]
      let all = /\.[^\.]+$/.exec(filepath)[0];
      //. 匹配除了\.所有字符 匹配前面的子表达式 一次或多次 字符串结尾位置 exec一个在字符串中执行查找匹配的RegExp方法
      // console.log(all)
      arr.push(new Promise((reslove,reject)=>{
        // Promise 对象代表了未来将要发生的事件，用来传递异步操作的消息。
        wx.cloud.uploadFile({
          // 云存储路径命 filePath要上传文件资源的路径 (本地路径)
          cloudPath:new Date().getTime()+all,
          filePath:filepath,
        }).then(res=>{
          //Promise返回结果说明fileID	文件ID
          console.log(res.fileID)
          this.setData({
            fileIDs:this.data.fileIDs.concat(res.fileID)
            //concat() 方法用于连接两个或多个数组。
          })
          reslove()
        }).catch(error=>{
          console.log(error)
        })
      }))
    }
    Promise.all(arr).then(res=>{
      db.collection('food').add({
        data:{
          img:this.data.fileIDs,
          detail:this.data.content,
          user:this.data.name,
          userimg:this.data.img,
          time:new Date(),
          good:0,
          CollectionNum:0,
        }
      })
    }).then(res=>{
      // console.log(res)
      wx.hideLoading()
      wx.showToast({
        title: '提交成功',
      })
      this.setData({
        content:[],
        tempImg:[]
      })
    }).catch(error=>{
      console.log(error)
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