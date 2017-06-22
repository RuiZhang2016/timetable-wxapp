// input.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  currentCourses:[
    'COMP1130','BUSN7008','MATH2222','STAT1008'],
  searchResults:'',
  courses: ['COMP1130', 'BUSN7008', 'MATH2222', 'STAT1008', 'STAT1003', 'MATH1013', 'COMP2300', 'ENGN4600', 'ASCT1003', 'ENGN1211']
  },
  //进入选tutorial界面
  goinfo: function () {
    wx.navigateTo({
      url: "../courseinfo/courseinfo",
    })
  },
  search: function(e){
    //回车后得到搜索框信息并返回结果
    var ccode=e.detail.value
this.setData({
      searchResults:ccode
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  
})