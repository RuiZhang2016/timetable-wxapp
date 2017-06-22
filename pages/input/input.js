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
  goinfo: function (e) {
    var ccode = e.currentTarget.dataset.text
    this.setData({
      searchResults: [ccode]
    })
    // wx.navigateTo({
    //   url: "../courseinfo/courseinfo",
    // })
  },

  search: function(e){
    //回车后得到搜索框信息并返回结果
    var ccode=e.detail.value
    var res = []
    for (var i=0;i<this.data.courses.length;i++){
      var c = this.data.courses[i]
      if (c.indexOf(ccode) != -1){
         res.push(this.data.courses[i])
      }
    }
    this.setData({
          searchResults:res
        })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  
})