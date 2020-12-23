Page({

  /**
   * 页面的初始数据
   */
  data: {
    rotationList:[],
    navList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
    // 轮播图数据请求
    wx.request({
      url: 'https://locally.uieee.com/slides',
      method:"GET",
      success:function(options){
        //   console.log(options.data);
          that.setData({
            rotationList:options.data
          });
      }
    })

    // 导航栏数据请求
    wx.request({
      url: 'https://locally.uieee.com/categories',
      method:"GET",
      success:function(options){
        //   console.log(options.data);
          that.setData({
            navList:options.data
          });
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