// input.js
var fileCourses = require('../../utils/courses.js')
var fileUser = require('../../utils/user.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentCourses:null,
    searchResults:null,
    courses: fileCourses.coursesName()
  },
  //进入选tutorial界面
  goinfo: function (e) {
    getApp().globalData.ccode = e.currentTarget.dataset.text
    wx.navigateTo({
      url: "../courseinfo/courseinfo",
    })
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

  onLoad: function (options) {
    var ids = fileUser.ids()
    var tmpCourses = []
    for (let i =0 ; i < ids.length; i++){
      var tmpCourse = fileCourses.searchId(ids[i])
      tmpCourses.push(tmpCourse['name'])
    }
    this.setData({
      currentCourses:tmpCourses
    })
  },
  
  
  
})
