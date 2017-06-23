// /pages/courseinfo/courseinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'BUSN1001',
    currentT:[
      {'id':'T01','day':'tue', 'start':'12:00','location':'Han 2.22'},
      { 'id': 'T02', 'day': 'wed', 'start': '16:00' ,'location': 'Han 2.22' },
      { 'id': 'T03', 'day': 'fri', 'start': '6:00', 'location': 'Han 2.22' }
    ]

  },
  addT: function (e) {
    //功能1添加课程
   /* this.setData({
      name:e
    })*/
    //功能2跳转回页面
    wx.navigateTo({
      url: '../index/index',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      name: getApp().globalData.ccode
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