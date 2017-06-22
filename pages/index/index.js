//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: [ "#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
 
    daytime:[
      '8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
    ],
    dayline: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28],
 
    wlist: [
      { "id": 1, "start": 1, "dur":2, "day":1 ,"info":"Lecture1 / 1 ", "location":"JD 102", "name":"ACST\n4032", "fullName": "ACST4032_S2 Actuarial Control Cycle 2" },
     
     


     
    ]
  },
  //<!--added by rui-- >
  classcodeInput: function () {
    wx.navigateTo({
      url: '../input/input',
    })
  },
 // end
  onLoad: function () {
    console.log('onLoad')
  }
})
